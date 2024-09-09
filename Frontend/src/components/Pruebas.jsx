import React, { useEffect } from "react";
import EditInventoryIcon from "../icons/EditInventoryIcon";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import endpoints from "../services/endpoints";

export const Pruebas = () => {
  const [formData, setFormData] = useState({
    etiqueta: "",
    numAnterior: "",
    tipo: "",
    marca: "",
    modelo: "",
    serie: "",
    departamento: "",
    ubicacion: "",
    edicion: "",
    descripcion: "",
    responsable: "",
    imagen: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData({ ...formData, imagen: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(endpoints.inventario, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Registro agregado");
  };

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
      <form
        className="max-w-xlg mx-auto p-8"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        <h1 className="text-3xl italic mb-4 text-black ">Agregar registro</h1>
        <p className="mb-8">Llena los campos para agregar un nuevo registro</p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 ">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Etiqueta
            </label>
            <input
              type="number"
              name="etiqueta"
              value={formData.etiqueta}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Número anterior
            </label>
            <input
              type="text"
              name="numAnterior"
              value={formData.numAnterior}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tipo
            </label>
            <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Marca
            </label>
            <input
              type="text"
              name="marca"
              value={formData.marca}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Modelo
            </label>
            <input
              type="text"
              name="modelo"
              value={formData.modelo}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Serie
            </label>
            <input
              type="text"
              name="serie"
              value={formData.serie}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Departamento
            </label>
            <input
              type="text"
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ubicacion
            </label>
            <input
              type="text"
              name="ubicacion"
              value={formData.ubicacion}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Edicion
            </label>
            <input
              type="text"
              name="edicion"
              value={formData.edicion}
              onChange={handleChange}
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
        </div>
        <div className="mb-5 row-span-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Descripcion
          </label>
          <textarea
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="shadow-md bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="mb-5 ">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Responsable
            </label>
            <input
              type="text"
              name="responsable"
              value={formData.responsable}
              onChange={handleChange}
              placeholder="Ingrese el nombre completo del responsable"
              className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-tlax focus:border-blue-tlax block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-tlax dark:focus:border-blue-tlax dark:shadow-md-light"
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Subir imagen
            </label>
            <input
              onChange={handleFileChange}
              name="imagen"
              className="block w-full text-sm shadow-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
            <p
              className="mt-1 text-sm text-gray-tlax dark:text-gray-300"
              id="file_input_help"
            >
              PNG o JPG(MAX. 800x400px).
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-105 hover:bg-blue-tlax-light duration-300"
        >
          <EditInventoryIcon className="w-6 h-6 mr-2" />
          Agregar Registro
        </button>
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      </form>
    </div>
  );
};

/*export const Pruebas = () => {
REVISAR EL SELECT, SIRVE PARA CONSUMIR UNA API

  const [dpto, setDpto] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  const URL = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json"

  const getDptos = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDpto(data);
    })
  }
  
  const getMunicipios = (e) => {
    const slcMunicipios = document.getElementById("select-municipios");

    dpto.forEach(element => {
      if (element.departamento === e.target.value) {
        setCiudades(element.ciudades);
        console.log(element.ciudades);
        slcMunicipios.style.display = 'block';
      }
    });
  }

  useEffect(() => {
    getDptos();
  }, [])
  

  return (
    <>
      <select onChange={getDptos} name="" id="">
        <option value="Select">Seleccione un departamento</option>
        {
          dpto.map(dep => (
            <option key={dep.id} value={dep.departamento}>{dep.departamento}</option>      
          ))
        }
      </select>




      <select name="" id="select-municipios" className='select-municipios'>
      <option value="Select">Seleccione un Municipio</option>      
        {
            ciudades.map(ciudad => (
              <option key={ciudad} value={ciudad}>{ciudad}</option>      
            ))
        }
      </select>      
    </>
  )
}






FUNCIONA PARA ACTUALZAR LOS REGISTROS DE LA TABLA

export const Pruebas = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {

          id: 6,
          producto: "Producto 2",
          etiqueta: 4545225,
          responsable: "Responsable 2",
          
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div className="bg-white">
      <h1>{post.id}</h1>
      <p>{post.producto}</p>
      <p>{post.etiqueta}</p>
      <p>{post.responsable}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}*/
