import { useState, useEffect } from 'react'
import EditUserIcon from '../icons/EditUserIcon'
import Discard from '../icons/DiscardIcon'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert2'

const URI = "http://localhost:4000/api/usuarios/";

export const FormUpdateUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [apellidop, setApellidop] = useState('');
    const [apellidom, setApellidom] = useState('');
    const [username, setUsername] = useState('');
    const [permisos, setPermisos] = useState('');
    const [imagen, setImagen] = useState('');

    const { id } = useParams();

    const update = async () => {
        e.preventDefault();
        await axios.put(URI + id, {
            nombre: nombre,
            apellidop: apellidop,
            apellidom: apellidom,
            username: username,
            permisos: permisos,
            imagen: imagen
        });
    }

    useEffect(() => {
        getUsuario();
    }, []);

    const getUsuario = async () => {
        const response = await axios.get(URI + id);
        const data = response.data;
        setNombre(data.nombre);
        setApellidop(data.apellidop);
        setApellidom(data.apellidom);
        setUsername(data.username);
        setPermisos(data.permisos);
        setImagen(data.imagen);
    }

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
    <form className="max-w-xlg mx-auto p-8">
    <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    <h1 className="text-3xl italic mb-4 text-black ">Actualizar usuario</h1>     
    <p>Actualiza los permisos necesarios y guarda los cambios</p>  
    <div className="grid lg:grid-cols-2 gap-4 pt-5">
        <div className="flex justify-center row-span-3">
            <img src="/inventory.jpg" alt="imagen" className="w-auto h-auto rounded-md shadow-xl "/>
        </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5">
                <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre(s)</label>
                        <input type="text" onChange={(e) => setNombre(e.target.value)} disabled placeholder='Aqui los nombres' className="cursor-not-allowed shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
                </div>
                <div className="mb-3 col-start-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                        <input type="text" onChange={(e) => setApellidop(e.target.value)} disabled placeholder='Aqui los dos apellidos' className="cursor-not-allowed shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} disabled placeholder='Aqui el username' className="cursor-not-allowed shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-sm-light" required />
                </div>
                <div className="mb-5 col-start-2">
                  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permisos</label>
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option disabled>Seleccione</option>
                          <option>Super Administrador</option>
                          <option>Administrador</option>
                          <option>Lector</option>
                      </select>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
            <button type="button" className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
                <EditUserIcon className="w-6 h-6 mr-2"/>
                Actualizar Registro
            </button>                    
            <button type="button" className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300">
                <Discard className="w-6 h-6 mr-2"/>
                Cancelar
            </button>
            </div>
        </div>
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    </form>
</div>
  )
}
