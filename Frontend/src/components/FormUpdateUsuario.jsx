import { useState, useEffect } from 'react'
import EditUserIcon from '../icons/EditUserIcon'
import { Permisos } from './Permisos'
import { Link } from 'react-router-dom'
import Discard from '../icons/DiscardIcon'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoints from '../services/endpoints'
import authService from '../services/authService'

export const FormUpdateUsuario = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
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
          const token = authService.getCurrentUser();
          if (!token) {
            throw new Error("Token not found");
          }

          const response = await axios.get(endpoints.usuarioId + id, {
            headers: {
              'Authorization': `Bearer ${token.token}`
            }
          });
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data: ", error);
        } finally {
          setLoading(false);
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
      try{
        const token = authService.getCurrentUser();
        if (!token) {
          throw new Error("Token not found");
        }
        await axios.put(endpoints.usuarioId + id, user, {
          headers: {
            'Authorization': `Bearer ${token.token}`
          }
        });
        navigate('/usuarios');
        Swal.fire({
            icon: 'success',
            title: 'Permisos asignados',
            text: 'El usuario ha sido actualizado con éxito',
            showConfirmButton: false,
            timer: 2000
        })
        } catch (error) {
          console.error("Error al actualizar el usuario:", error);
          Swal.fire({
            icon: 'error',
            title: 'Error del servidor',
            text: 'Ocurrió un error al intentar actualizar el usuario. Por favor, inténtelo de nuevo más tarde.',
            showConfirmButton: false
          });
        }
      }
    };

    if (loading) {
      return (
      <div className='text-center'>
          <div role="status">
              <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
      </div>
      );
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
                  <input type="text" value={user.id || ''} onChange={handleChange} disabled id='id' className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                  <label htmlFor="id" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Número de usuario</label>
              </div>
              <div className="relative col-start-2">
                  <input type="text" value={user.username || ''} onChange={handleChange} disabled id='username' className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                  <label htmlFor="username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre de usuario</label>
              </div>
              <div className="relative ">
                  <input type="text" value={user.nombre || ''} onChange={handleChange} disabled id='nombre' className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                  <label htmlFor="nombre" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre(s)</label>
              </div>
              <div className="relative col-start-2">
                  <input type="text" value={apellidos || ''} onChange={handleChange} disabled id='apellidop' className="block rounded-t-lg px-2.5 pb-3.5 pt-6 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-tlax peer" placeholder=" " />
                  <label htmlFor="apellidop" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-tlax peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Apellidos</label>
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
