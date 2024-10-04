import React from "react";
import {Route,Routes} from "react-router-dom"
import { Inicio } from '../page/inicio';
import { Home, Home_Doctor } from '../page/home'
import { Paciente, Inventario, Personal } from '../page/Doctor.js'
import {Perfil} from '../page/perfil.js'
import {Encuesta} from '../page/encuesta.js'

export default function Ruta(){

    return(
        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Home_Doctor" element={<Home_Doctor/>}/>
            <Route exact path="/List/Paciente" element={<Paciente/>}/>
            <Route exact path="/List/Personal" element={<Personal/>}/>
            <Route exact path="/List/Inventario" element={<Inventario/>}/>
            <Route exact path="/Perfil" element={<Perfil/>}/>    
            <Route exact path="/Identificacion_Paciente" element={<Encuesta/>}/>    
        </Routes>
    )
        

    
}