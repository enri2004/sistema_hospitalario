import React,{useState } from "react";
import "../css/inicion.css"
import Imagen1 from "../img/imagen1.png"
import Imagen2 from "../img/imagen2.png"
import Logo   from  "../img/logo hsopitalario.png"
import { Link, useNavigate} from "react-router-dom";
import axios from "../servers/Axios.js"

function Inicio(){
    const [formData,setFormData]=useState({Contraseña:"",Usuario:""})
    const Navigate = useNavigate();

    const evaluar=(e)=>{
            const {name , value}= e.target;
            setFormData({...formData,[name]:value})
        
        }

        const Login = async (e) => {
            e.preventDefault();
            try {
                const tabla = "login";
                const response = await axios.get(`/obtener?tabla=${tabla}&Usuario=${formData.Usuario}&Contraseña=${formData.Contraseña}`);
                const { roles, perfil_idperfil} = response.data;
                console.log(response.data)
                localStorage.setItem("perfil_idperfil",(perfil_idperfil));
                console.log("Datos del usuario guardados localmente:", response.data);
                if (roles === "Personal") {
                    Navigate("/Home");
                } else if (roles === "farmacia") {
                    Navigate("/Home");
                }else if (roles === "Jefe") {
                    Navigate("/Home");
                }else if (roles === "Doctor") {
                    Navigate("/Home_Doctor");
                }
                else {
                    console.error("Rol no reconocido");
                }
            } catch (error) {
                console.error("Error al enviar los datos", error);
            }
        };
    

const data=()=> {
    console.log(formData)
}

    return(
             <>
            <div className="img" >
            <img   
            src={Imagen1}
            alt="Imagen1"
            style={{width:"400px",height:"350px",position:"absolute",left:"110px", top:"380px"}}
            />
            <img
            src={Imagen2}
            alt="Imagen2"
            style={{width:"300px",height:"250px",position:"absolute",left:"28%", top:"14%"}}
            />
            </div>
            
            <div className="inicio" style={{marginTop:"0px",marginLeft:"42%"}}>
                <img 
                src={Logo}
                alt="Logo"
                style={{width:"180px",height:"180px",position:"absolute",top:"0",left:"45%"}} 
                />
            <h1 className="h1"> ¡Bienvenido de nuevo!</h1>
            <form onSubmit={Login}>
            <input  
            name="Usuario"
            value={formData.Usuario}
            onChange={evaluar}
            style={{width:"500px",height:"60px",border:"solid 3.8px black",position:"absolute",left:"150px", top:"280px" ,fontSize:"25px",textAlign:"center"}} className="input1" type="text" placeholder="Matricula"  />
            <input type="password"  name="Contraseña"
            onChange={evaluar}
            value={formData.Contraseña}
            style={{width:"500px",height:"60px",border:"solid 3.8px black",
            position:"absolute",left:"150px",top:"380px",fontSize:"25px",textAlign:"center"}}
            className="input1" placeholder="Contraseña"/>
            <button  onClick={data} className="boton1">iniciar secion</button>
            </form>
            </div>           
            </>
    )
    
    }
    
    
    
    export {Inicio}