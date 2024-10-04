import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Modal, ModalBody, FormGroup, ModalHeader } from 'reactstrap';
import "../css/Doctor.css"
import Img from "../img/imagen3.png";
import Logo from "../img/logo hsopitalario.png";
import "../css/Home.css";
import { FaHospitalUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {Link} from "react-router-dom"
import axios  from "../servers/Axios.js"


function  Personal(){

    const [busqueda, setBusqueda]=useState("")
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
     const itemsPerPage = 15; // Definir cuántos elementos mostrar por página
    const [personaldata,setPersonaldata]=useState([])
    const [data,setData]=useState({
      Nombre:""
  })
  const busque = (e) => {
    setBusqueda(e.target.value);
    setCurrentPage(1); // Resetear la página a 1 al hacer una nueva búsqueda
  };

// Función para obtener los datos de perfil desde el servidor usando el ID almacenado en localStorage
const obtenerDatosPerfil = async (tabla) => {
    try {
        const idperfil = localStorage.getItem("perfil_idperfil"); // Obtén el ID del perfil almacenado
        if (!idperfil) {
            console.error("No se encontró ningún ID de perfil en localStorage");
            return;
        }

        const response = await axios.get(`/obtener?tabla=${tabla}&idperfil=${idperfil}`);
        const { data } = response;  // Obtén la respuesta
        localStorage.setItem("info", JSON.stringify(data));  // Guarda la información completa en localStorage
        console.log("Datos del usuario guardados localmente:", data);
        setData(data);  // Actualiza el estado con los datos obtenidos
    } catch (error) {
        console.error("Error al obtener los datos de perfil", error);
    }
};

// useEffect para obtener los datos después del login
useEffect(() => {
    obtenerDatosPerfil("perfil"); // Llama a la función para obtener los datos cuando el componente se monta
}, []);

let result=personaldata

   if(busqueda){
        result = personaldata.filter((dato) =>
          /*dato.Nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          dato.Apellidos.toLowerCase().includes(busqueda.toLowerCase()) ||
          dato.Matricula.toLowerCase().includes(busqueda.toLowerCase()) ||
          dato.Consultorio.toLowerCase().includes(busqueda.toLowerCase())
        */
        dato.ididentificacion.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato. edad.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.nacionalidad.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato. identificacioncol.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato. ubicacion.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.identificacioncol1.toLowerCase().includes(busqueda.toLowerCase())
        );
   }

// Calcular los elementos que deben mostrarse según la página actual
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

// Calcular el número total de páginas
const totalPages = Math.ceil(result.length / itemsPerPage);

// Funciones para cambiar de página
// Funciones para cambiar de página
const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  const goToFirstPage = () => paginate(1);
  const goToLastPage = () => paginate(totalPages);


    return(
       
    <div className="fondo">
            <div className="Linea"></div>
            <img 
                src={Img}
                alt="Img"
                style={{ position: "absolute", width: "90%", height: "230px", top: "10%", left: "5%" }}
            />
            <img
                src={Logo}
                alt="Logo"
                style={{ position: "absolute", width: "80px", height: "80px", top: "-1%", left: "94%" }}
            />
            <div>
               <Link to="/Perfil"  style={{textDecoration:"none", color:"inherit"}}> <FaHospitalUser className="Perfil" />
                <input type="text" className="dato" value={data.Nombre} readOnly />
                </Link>
            </div>
            <div>
            <input type="text"
            placeholder="Busqueda"
            className="busqueda"
            name="busqueda"
            value={busqueda}
            onChange={busque}
            />
            <button 
            style={{
                border:"none",
                outline:"none",
                background:"transparent"
            }}
            >
            <FiSearch className="icono"  />
            </button>    
            </div>           



        <div style={{marginTop:"27%"}}>
           
           <Container>
           <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Matricula</th>
                    <th scope="col">nombre</th>
                    <th scope="col">edad</th>
                    <th scope="col">nacionalidad</th>
                    <th scope="col">ubicacion</th>
                    
                </tr>
            </thead>
            <tbody class="table-group-divider">
           {currentItems.length > 0 ? (
            currentItems.map((Personal,index)=> (
            <tr>
            <th scope="row">{indexOfFirstItem + index + 1}</th>
            <td>{Personal.ididentificacion}</td>
            <td>{Personal.nombre}</td>
            <td>{Personal.edad}</td>
            <td>{Personal.nacionalidad}</td>
            <td>{Personal.ubicacion}</td>
            </tr>
           )) ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No se encontraron resultados.
              </td>
            </tr>)} </tbody>
           </table> 
           <div className="pagination">
            <button onClick={goToFirstPage} className={currentPage === 1 ? 'disabled' : ''}>
              {"<<"}
            </button>
            <button onClick={() => paginate(currentPage - 1)} className={currentPage === 1 ? 'disabled' : ''}>
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} className={currentPage === totalPages ? 'disabled' : ''}>
              {">"}
            </button>
            <button onClick={goToLastPage} className={currentPage === totalPages ? 'disabled' : ''}>
              {">>"}
            </button>
          </div>
           </Container></div> </div>
    )

}





function Paciente(){
  const [pacientedata,setPacientedata]=useState([])
 const [busqueda, setBusqueda]=useState("")
 const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
 const itemsPerPage = 10; // Definir cuántos elementos mostrar por página
 const [data,setData]=useState({
  Nombre:""
})

const dat =(e)=>{
    setBusqueda(e.target.value)
    setCurrentPage(1)
}

// Función para obtener los datos de perfil desde el servidor usando el ID almacenado en localStorage
const obtenerDatosPerfil = async (tabla) => {
  try {
      const idperfil = localStorage.getItem("perfil_idperfil"); // Obtén el ID del perfil almacenado
      if (!idperfil) {
          console.error("No se encontró ningún ID de perfil en localStorage");
          return;
      }

      const response = await axios.get(`/obtener?tabla=${tabla}&idperfil=${idperfil}`);
      const { data } = response;  // Obtén la respuesta
      localStorage.setItem("info", JSON.stringify(data));  // Guarda la información completa en localStorage
      console.log("Datos del usuario guardados localmente:", data);
      setData(data);  // Actualiza el estado con los datos obtenidos
  } catch (error) {
      console.error("Error al obtener los datos de perfil", error);
  }
};

// useEffect para obtener los datos después del login
useEffect(() => {
  obtenerDatosPerfil("perfil"); // Llama a la función para obtener los datos cuando el componente se monta
}, []);


let Results = pacientedata

if(busqueda){
    Results= pacientedata.filter((dato)=>
        dato.Matricula.toLowerCase().includes(busqueda.toLowerCase())||
        dato.Nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
        dato.Apellidos.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.Edad.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.Telefono.toLowerCase().includes(busqueda.toLowerCase())
    )
}
// Calcular los elementos que deben mostrarse según la página actual
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = Results.slice(indexOfFirstItem, indexOfLastItem);

// Calcular el número total de páginas
const totalPages = Math.ceil(Results.length / itemsPerPage);

// Funciones para cambiar de página
// Funciones para cambiar de página
const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  const goToFirstPage = () => paginate(1);
  const goToLastPage = () => paginate(totalPages);



    return(

        
             <div className="fondo">
            <div className="Linea"></div>
             <img 
                src={Img}
                alt="Img"
                style={{ position: "absolute", width: "90%", height: "230px", top: "10%", left: "5%" }}
                
            />
            <img
                src={Logo}
                alt="Logo"
                style={{ position: "absolute", width: "80px", height: "80px", top: "-1%", left: "94%" }}
            />
            <div>
                <Link to="/Perfil" style={{
                    color:"inherit",
                    textDecoration:"none"
                }}><FaHospitalUser className="Perfil" />
                <input type="text" className="dato" value={data.Nombre} readOnly />
                </Link>
            </div>

            <div>
                <input
                type="text"
                placeholder="Busqueda"
                className="busqueda"
                value={busqueda}
                onChange={dat}
                name="busqueda"
                />
                <FiSearch className="icono"/>
            </div>
            <div style={{
                marginTop:"27%"
            }}>
            <Container>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                        <th>Matricula</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                        <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {currentItems.length > 0 ? (
                            currentItems.map((Paciente, index)=>(<tr>
                        <th scope="row">{indexOfFirstItem + index + 1}</th>
                        <td>{Paciente.Matricula}</td>
                        <td>{Paciente.Nombre}</td>
                        <td>{Paciente.Apellidos}</td>
                        <td>{Paciente.Edad}</td>
                        <td>{Paciente.Telefono}</td>
                        </tr>
                        ))):(
                            <tr>
                               <td colSpan="6" style={{textAlign:"center"}}>
                                no se encontraron los datos
                                </td> 
                            </tr>
                        )}
                        
                    </tbody>
                </table>
                <div className="pagination">
            <button onClick={goToFirstPage} className={currentPage === 1 ? 'disabled' : ''}>
              {"<<"}
            </button>
            <button onClick={() => paginate(currentPage - 1)} className={currentPage === 1 ? 'disabled' : ''}>
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} className={currentPage === totalPages ? 'disabled' : ''}>
              {">"}
            </button>
            <button onClick={goToLastPage} className={currentPage === totalPages ? 'disabled' : ''}>
              {">>"}
            </button>
          </div>
            </Container>
            </div>
        </div>
    )
}




function Inventario(){
  const [data,setData]= useState([])
    const [busqueda, setBusqueda]=useState("")
    const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
    const itemsPerPage = 15; // Definir cuántos elementos mostrar por página
    const [data1,setData1]=useState({
      Nombre:""
  })
    const dat =(e)=>{
       setBusqueda(e.target.value)
       setCurrentPage(1)
   }
   
    const busque=(e)=>{
        setBusqueda(e.target.value)
    }


// Función para obtener los datos de perfil desde el servidor usando el ID almacenado en localStorage
const obtenerDatosPerfil = async (tabla) => {
  try {
      const idperfil = localStorage.getItem("perfil_idperfil"); // Obtén el ID del perfil almacenado
      if (!idperfil) {
          console.error("No se encontró ningún ID de perfil en localStorage");
          return;
      }

      const response = await axios.get(`/obtener?tabla=${tabla}&idperfil=${idperfil}`);
      const { data } = response;  // Obtén la respuesta
      localStorage.setItem("info", JSON.stringify(data));  // Guarda la información completa en localStorage
      console.log("Datos del usuario guardados localmente:", data);
      setData1(data);  // Actualiza el estado con los datos obtenidos
  } catch (error) {
      console.error("Error al obtener los datos de perfil", error);
  }
};

// useEffect para obtener los datos después del login
useEffect(() => {
  obtenerDatosPerfil("perfil"); // Llama a la función para obtener los datos cuando el componente se monta
}, []);


let resultado= data

if(busqueda){
    resultado=data.filter((dato)=>
        dato.Nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        dato.cantidad.toLowerCase().includes(busqueda.toLowerCase())
    )
}

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = resultado.slice(indexOfFirstItem, indexOfLastItem);

// Calcular el número total de páginas
const totalPages = Math.ceil(resultado.length / itemsPerPage);

// Funciones para cambiar de página
// Funciones para cambiar de página
const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  
  const goToFirstPage = () => paginate(1);
  const goToLastPage = () => paginate(totalPages);

    
    return(
            <div className="fondo">
            <div className="Linea"></div>
            <img 
                src={Img}
                alt="Img"
                style={{ position: "absolute", width: "90%", height: "230px", top: "10%", left: "5%" }}
            />
            <img
                src={Logo}
                alt="Logo"
                style={{ position: "absolute", width: "80px", height: "80px", top: "-1%", left: "94%" }}
            />
            <div>
                <Link to="/Perfil" style={{textDecoration:"none", color:"inherit"}}><FaHospitalUser className="Perfil" />
                <input type="text" className="dato" value={data1.Nombre} readOnly />
                </Link>
            </div>
            <div>
            <input type="text"
            placeholder="Busqueda"
            className="busqueda"
            name="busqueda"
            value={busqueda}
            onChange={busque}
            />
            <button 
            style={{
                border:"none",
                outline:"none",
                background:"transparent"
            }}
            >
            <FiSearch className="icono"  />
            </button>    
            </div>  


            <div>
                <input
                type="text"
                placeholder="Busqueda"
                className="busqueda"
                name="busqueda"
                value={busqueda}
                onChange={busque}
                />
                <FiSearch className="icono"/>
            </div>
            <div style={{marginTop:"27%"}}>
            <Container>
                <table class="table">
                    <thead>
                        <tr>
                            <th>nº</th>
                            <th>Nombre</th>
                            <th>cantidad</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                   { currentItems.length > 0 ? (
                            currentItems.map((Inventario , index)=>( 
                    <tr><th  scope="row">{indexOfFirstItem + index + 1}</th>
                            <td>{Inventario.Nombre}</td>
                            <td>{Inventario.cantidad}</td>
                            </tr>))):( <tr>
                                    <td colSpan="6"style={{textAlign:"center"}}>no se encontraron los resultados</td>
                                  
                            </tr>)}    
                    </tbody>
                </table>
                <div className="pagination">
            <button onClick={goToFirstPage} className={currentPage === 1 ? 'disabled' : ''}>
              {"<<"}
            </button>
            <button onClick={() => paginate(currentPage - 1)} className={currentPage === 1 ? 'disabled' : ''}>
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} className={currentPage === totalPages ? 'disabled' : ''}>
              {">"}
            </button>
            <button onClick={goToLastPage} className={currentPage === totalPages ? 'disabled' : ''}>
              {">>"}
            </button>
          </div>
            </Container>
            </div>
        </div>
    )

}



export {Personal,Paciente,Inventario}