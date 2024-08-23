import { useState, useEffect } from 'react'
import EditUserIcon from '../icons/EditUserIcon'
import { Permisos } from './Permisos'
import { Link } from 'react-router-dom'
import Discard from '../icons/DiscardIcon'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoints from '../services/endpoints'

const URI = "http://localhost:4000/api/usuarios/";

export const FormUpdateUsuario = () => {

  const uri = endpoints.usuarios;

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
      id: '',
      nombre: '',
      apellidop: '',
      apellidom: '',
      username: '',
      permisos: '',
      img: ''
    });

    const apellidos = `${user.apellidop || ''} ${user.apellidom || ''}`;
  
    useEffect(() => {
      const getUser = async () => {
        try {
          const response = await axios.get(URI + id);
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      };
      getUser();
    }, [id]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser(prevUser => ({
        ...prevUser,
        [name]: value
      }));
    };
  
    const updateUser = async (e) => {
      e.preventDefault();
      const confirm = await Swal.fire({
        title: "¿Esta seguro de asignar estos permisos a este usuario?",
        text: "Tendra acceso a ciertas partes del sistema",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0B1556",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, asignar",
        cancelButtonText: "Cancelar"
    }) 
    if (confirm.isConfirmed) {
      await axios.put(URI + id, user);
      navigate('/usuarios');
      Swal.fire({
          icon: 'success',
          title: 'Permisos asignados',
          text: 'El usuario ha sido actualizado con éxito',
          showConfirmButton: false,
          timer: 2000
      })
    }
    }

    

  return (
    <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg w-full">
    <form className="max-w-xlg mx-auto p-8" onSubmit={updateUser}>
    <hr className="w-full h-1 mx-auto mb-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    <h1 className="text-3xl italic mb-4 text-black ">Actualizar usuario</h1>     
    <p>Actualiza los permisos necesarios y guarda los cambios</p>  
    <div className="grid lg:grid-cols-2 gap-4 pt-5">
        <div className="flex justify-center row-span-3">
            <img src="/inventory.jpg" alt="imagen" className="w-auto h-auto rounded-md shadow-xl "/>
        </div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5 pr-8">
            <div className="relative">
                  <input type="text" value={user.id || ''} onChange={handleChange} disabled id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Número de usuario</label>
              </div>
              <div className="relative col-start-2">
                  <input type="text" value={user.username || ''} onChange={handleChange} disabled id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre de usuario</label>
              </div>
              <div className="relative ">
                  <input type="text" value={user.nombre || ''} onChange={handleChange} disabled id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre(s)</label>
              </div>
              <div className="relative col-start-2">
                  <input type="text" value={apellidos || ''} onChange={handleChange} disabled id="default_filled" className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label htmlFor="default-fillded" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellidos</label>
              </div>
                <div className="relative mb-6">
                <p className='mb-2'>Asigne los permisos correspondientes a su usuario.</p>
                <select name='permisos' value={user.permisos || ''} onChange={handleChange} className="block rounded-t-lg pb-2.5 px-2.5 pt-3 w-full text-sm text-gray-500 text-left pl-auto border-0 border-b-2 bg-gray-50 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option value="Lector">Lector</option>
                  <option value="Moderador">Moderador</option>
                  <option value="Administrador">Administrador</option>
              </select>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 pr-8">
            <button type="submit" className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-blue-tlax hover:-translate-y-1 hover:scale-100 hover:bg-blue-tlax-light duration-300">
                <EditUserIcon className="w-6 h-6 mr-2"/>
                Actualizar Registro
            </button>                    
            <Link to="/usuarios" replace type="button" className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg text-white transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-100 hover:bg-red-500 duration-300">
                <Discard className="w-6 h-6 mr-2"/>
                Cancelar
            </Link>
            <Permisos />
            </div>
            
        </div>
        <hr className="w-full h-1 mx-auto mt-5 bg-gray-100 border-0 rounded dark:bg-gray-700"/>
    </form>
</div>
  )
}
