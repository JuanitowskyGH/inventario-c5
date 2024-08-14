import { useState } from 'react'
import axios from 'axios'
import endpoints from '../services/endpoints'

const baseURL = "http://localhost:4000/api/inventario/";

export const Pruebas = () => {

  const [numero, setNumero] = useState(0);
  const [tipo, setTipo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(endpoints.pruebas, {
      numero: numero,
      tipo: tipo,
      descripcion: descripcion
    });
  }

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit}>
        <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


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
