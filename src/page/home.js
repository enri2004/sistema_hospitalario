import React, { useState ,useEffect} from "react";
import Img from "../img/imagen3.png";
import Logo from "../img/logo hsopitalario.png";
import "../css/Home.css";
import { FaHospitalUser, FaHospitalAlt } from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import axios from '../servers/Axios.js'


function Home() {
    const [data,setData]=useState({
        Nombre:""
    })
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

    return (
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
                </Link>
                <input type="text" className="dato" value={data.Nombre} readOnly />
            </div>

            <div className="paciente">
                <Link to="/List/Paciente" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FaHospitalUser
                        style={{
                            position: "relative",
                            width: "30%",
                            height: "30%",
                            margin: "20px 10px 15px 20px",
                            cursor: "pointer"
                        }}
                    />
                    <h1 style={{ cursor: "pointer" }}><i>Paciente</i></h1>
                    <p style={{ cursor: "pointer" }}><i>Permite acceder al historial clínico de los pacientes atendidos en el hospital.</i></p>
                </Link>
            </div>

            <div className="inventario">
                <Link to="/List/Inventario" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <LiaClipboardListSolid
                        style={{
                            position: "relative",
                            width: "40%",
                            height: "38%",
                            margin: "10px 10px 10px 10px",
                            cursor: "pointer"
                        }}
                    />
                    <h1 style={{ cursor: "pointer" }}><i>Inventario</i></h1>
                    <p style={{ cursor: "pointer" }}><i>Proporciona información sobre los medicamentos disponibles.</i></p>
                </Link>
            </div>

            <div className="personal">
                <Link to="/List/Personal" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FaHospitalAlt
                        style={{
                            position: "relative",
                            width: "40%",
                            height: "35%",
                            margin: "10px 10px 10px 10px",
                            cursor: "pointer"
                        }}
                    />
                    <h1 style={{ cursor: "pointer" }}><i>Personal</i></h1>
                    <p style={{ cursor: "pointer" }}><i>Detalla los datos del personal que labora en el hospital.</i></p>
                </Link>
            </div>
        </div>
    );
}



function Home_Doctor() {
    const [data,setData]=useState({
        Nombre:""
    })
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

    return (
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
                </Link>
                <input type="text" className="dato" value={data.Nombre} readOnly />
            </div>

            <div className="paciente">
                <Link to="/List/Paciente" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FaHospitalUser
                        style={{
                            position: "relative",
                            width: "30%",
                            height: "30%",
                            margin: "20px 10px 15px 20px",
                            cursor: "pointer"
                        }}
                    />
                    <h1 style={{ cursor: "pointer" }}><i>Paciente</i></h1>
                    <p style={{ cursor: "pointer" }}><i>Permite acceder al historial clínico de los pacientes atendidos en el hospital.</i></p>
                </Link>
            </div>

            <div className="inventario">
                <Link to="/List/Inventario" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <LiaClipboardListSolid
                        style={{
                            position: "relative",
                            width: "40%",
                            height: "38%",
                            margin: "10px 10px 10px 10px",
                            cursor: "pointer"
                        }}
                    />
                    <h1 style={{ cursor: "pointer" }}><i>Inventario</i></h1>
                    <p style={{ cursor: "pointer" }}><i>Proporciona información sobre los medicamentos disponibles.</i></p>
                </Link>
            </div>

            <div className="personal">
                <Link to="/List/Personal" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <FaHospitalAlt
                        style={{
                            position: "relative",
                            width: "40%",
                            height: "35%",
                            margin: "10px 10px 10px 10px",
                            cursor: "pointer"
                        }}
                    />
                    <h1 style={{ cursor: "pointer" }}><i>Personal</i></h1>
                    <p style={{ cursor: "pointer" }}><i>Detalla los datos del personal que labora en el hospital.</i></p>
                </Link>
            </div>
        </div>
    );
}



export { Home,Home_Doctor};
