const LoanConsumable = require('../models/loanConsumable.model');
const Consumable = require('../models/consumable.model');
const Status = require('../models/status.model');
const Loans = require('../models/loans.model');
const User = require('../../users/models/user.model');
const { Op } = require('sequelize');

const solicitudPrestamo = async (req, res) => {
  const { consumibles } = req.body;
  const idUsuario = req.userId;

  try {
    const fechaPrestamo = new Date();

    const consumiblesDisponibles = await Consumable.findAll({
      where: {
        id: consumibles,
        disponible: true
      },
    });

    if (consumiblesDisponibles.length !== consumibles.length) {
      return res.status(400).json({ message: 'Algunos consumibles no están disponibles' });
    }

    const estadoPrestamo = await Status.findOne({ where: { status: 'Pendiente' } });
    if (!estadoPrestamo) {
      return res.status(500).json({ message: 'Error al obtener el estado del préstamo' });
    }

    const prestamo = await Loans.create({
      loanDate: fechaPrestamo,
      userId: idUsuario,
      statusId: estadoPrestamo.id,
    });

    await LoanConsumable.bulkCreate(consumibles.map(consumibleId => ({
      loanId: prestamo.id,
      consumableId: consumibleId,
    })));

    await Consumable.update({ disponible: false }, { where: { id: consumibles } });

    return res.json({ message: 'Préstamo solicitado' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const aprobarPrestamo = async (req, res) => {
  const { id: loanId } = req.params;

  try {
    const prestamo = await Loans.findOne({
      where: {
        id: loanId,
      },
      include: [{ model: Consumable, as: 'Consumibles' }]
    });

    if (!prestamo) {
      return res.status(404).json({ message: 'Préstamo no encontrado' });
    }

    const estadoPendiente = await Status.findOne({ where: { status: 'Pendiente' } });
    if (prestamo.estadoId !== estadoPendiente.id) {
      return res.status(500).json({ message: 'Error al obtener el estado del préstamo' });
    }

    const estadoAprobado = await Status.findOne({ where: { status: 'Aprobado' } });
    if (!estadoAprobado) {
      return res.status(500).json({ message: 'Error al obtener el estado del préstamo' });
    }

    prestamo.estadoId = estadoAprobado.id;
    await prestamo.save();

    await Consumable.update({ disponible: false }, { where: { id: prestamo.Consumable.map(consumible => consumible.id) } });

    return res.json({ message: 'Préstamo aprobado' });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const obtenerSolicitudes = async (req, res) => {
  try {
    const estadoPrestamo = await Status.findOne({ where: { status: 'Pendiente' } });

    if (!estadoPrestamo) {
      return res.status(500).json({ message: 'Error al obtener el estado del préstamo' });
    }

    const prestamos = await Loans.findAndCountAll({
      where: { estadoId: estadoPrestamo.id },
      include: [
        { model: User, as: 'user', attributes: ['username', 'nombre', 'apellidop', 'apellidom'] },
        { model: Consumable, as: 'consumables' }
      ]
    });

    return res.json(prestamos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { solicitudPrestamo, aprobarPrestamo, obtenerSolicitudes };