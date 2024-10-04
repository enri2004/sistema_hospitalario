import React, { useState, useRef, useEffect } from "react";
import "../css/Perfil.css";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "../servers/Axios.js";
function Perfil() {
  const imageCambio = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [data,setData]=useState({
    Nombre:"",
    Email:"",
    Direccion:"",
    Telefono:"",
    cuidad:""
  })


const obtener =async (tabla)=>{
try{
  const idperfil = localStorage.getItem("perfil_idperfil");
  if (!idperfil) {
    console.error(
      "No se encontró ningún token de acceso en el almacenamiento local"
    );
    return;
  }
 const dato = await axios.get(`/obtener?tabla=${tabla}&idperfil=${idperfil}`);
 const { data } = dato;
      localStorage.setItem("info", JSON.stringify(data));
      console.log("Datos del usuario guardados localmente:", data);
  setData(data)
}catch(error){
console.error("no se obtuvieron los datos",error);
}
}

useEffect(()=>{
  obtener("perfil")
},[])



  const archivo = () => {
    imageCambio.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <><form onChange={obtener}>
      <div onClick={archivo} className="imgen">
        <input
          type="file"
          ref={imageCambio}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        {selectedImage ? (
          <img
            alt="avatar"
            src={URL.createObjectURL(selectedImage)}
          />
        ) : (
          <FaRegUserCircle  style={{position:"absolute",width:"250px",height:"250px"}}/>
        )}
      </div>
      <div><h1 className="h3">Bienvenidos</h1></div>
                <div className="input">
                <div>
                <input type="text" name="Nombre" placeholder="Nombre/apellido" value={data.Nombre} className="input2" readOnly />
                </div>
                <div>
                <input type="text" placeholder="Email"className="input2" value={data.Email} readOnly />
                </div>
                <div>
                <input type="text" placeholder="Teléfono" className="input2" value={data.Telefono} readOnly />
                </div>
                <div>
                <input type="text" placeholder="Dirección" className="input2" value={data.Direccion} readOnly />
                </div><div >
                <input type="text" placeholder="Ciudad/codigo postal/pais" className="input2" value={data.cuidad} readOnly/>
                </div>
                
      </div>
      </form>
    </>
  );
}

export { Perfil };
