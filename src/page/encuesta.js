import React,{useState, useRef} from "react"
import axios from "../servers/Axios.js"
import "../css/encuesta.css"
import Iman from "../img/Imagen.png" 
import Log from "../img/logo hsopitalario.png"


function Encuesta(){
    const imageCambio = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
            ididentificacion:"",
            nombre:"",
            edad:"",
            nacionalidad:"",
            identificacioncol:"",
            ubicacion:"",
            identificacioncol1:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/saveData', { ...formData });
            console.log('Datos enviados correctamente');
            e.target.reset();
        } catch (error) {
            console.error('Error al enviar los datos', error);
            // Mostrar mensaje de error al usuario si es necesario
        }
    };
    const archivo = () => {
        imageCambio.current.click();
      };
    
      const hadleImagenChage = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
      };


    return(<>
       
        <div>
            <img
            src={Log}
            alt="Log"
            className="imagen"
            />
            <div
             className="h2"
            ><h1>INFORMACION DEL PACIENTE </h1 ></div>
         <div onClick={archivo}  className="perfil-image-container">
        <input
          type="file"
          ref={imageCambio}
          onChange={hadleImagenChage}
          style={{ display: "none" }}
        />
        {selectedImage ? (
          <img alt="avatar" src={URL.createObjectURL(selectedImage)} className="perfil-image" />
        ) : (
          <img alt="Iman" src={Iman} className="perfil-image" />
        )}
      </div>
         <form onSubmit={handleSubmit} >   

            <div style={{position:"absolute",top:"110px",left:"750px",
            background: "rgb(224, 218, 218)",
            borderRadius: "20px",
            border: "1px solid black",
            boxShadow:" 10px 10px 15px rgb(0, 0, 0)",
            width:"30%",
            height:"27%"
            }} className="input">
                <div style={{position:"absolute",top:"20px",left:"25px", width:"100%"}}>
            <label style={{position:"absolute",top:"1px",left:"-120px",width:"100%"}}>Numero de seguro</label>
            <input typeof="text"  name="ididentificacion" required onChange={handleChange} style={{position:"absolute",top:"35px",left:"15px",width:"380px"}}/>
            </div>
            <div style={{position:"absolute",top:"120px",left:"25px",width:"100%"}}>
            <label style={{position:"absolute",top:"-20px",left:"-100px",width:"100%"}}>Fecha de nacimiento</label>
            <input typeof="text"  name="nombre" onChange={handleChange} style={{position:"absolute",top:"15px",left:"15px",width:"380px"}} />
            </div>
            </div>
            <div style={{ position: "absolute",
            width:"57%",
            height:"50%" ,
            top:"46%",
            left: "22%",
            background: "rgb(224, 218, 218)",
            borderRadius: "20px",
            border: "1px solid black",
            boxShadow: "10px 10px 15px rgb(0, 0, 0)"}}>
            <div style={{position:"absolute",top:"45px",left:"40px"}}>
            <label style={{position:"absolute",top:"-15px",left:"20px"}}>Nombre</label>
            <input typeof="text" name="edad" onChange={handleChange} style={{position:"absolute",top:"10px",left:"20px",width:"380px"}}/>
            </div>
            <div style={{position:"absolute",top:"120px",left:"40px"}}>
            <label style={{position:"absolute",top:"-12px",left:"20px"}} >Curp</label>
            <input typeof="text" name="nacionalidad"onChange={handleChange} style={{position:"absolute",top:"12px",left:"20px",width:"380px"}}/> 
            </div>
            <div style={{position:"absolute",top:"150px",left:"20px"}}>
                
                <label style={{position:"absolute",top:"30px",left:"36px"}}>Domicilio</label>
            <input typeof="text" name="nacionalidad"onChange={handleChange}  style={{position:"absolute",top:"60px",left:"40px",width:"380px"}}/> 
            </div>
            <div style={{position:"absolute",top:"280px",left:"60px"}}>
                <label style={{position:"absolute",top:"-26px",left:"10px"}}>Entidad federativa</label>
            <input typeof="text"  name="identificacioncol"  onChange={handleChange} style={{position:"absolute",width:"380px"}} />
            </div>
            <div style={{position:"absolute",top:"45px",left:"515px",width:"50%"}}>
            <label style={{position:"absolute",top:"-15px",left:"20px"}}>Unidad medica</label>
            <input typeof="text" name="edad" onChange={handleChange} style={{position:"absolute",top:"10px",left:"20px",width:"280px"}}/>
            </div>
            <div style={{position:"absolute",top:"120px",left:"515px"}}>
            <label style={{position:"absolute",top:"-12px",left:"20px"}} >Edad</label>
            <input typeof="text" name="nacionalidad"onChange={handleChange} style={{position:"absolute",top:"12px",left:"20px",width:"280px"}}/> 
            </div>
            <div style={{position:"absolute",top:"150px",left:"499px",width:"50%"}}>
                <label style={{position:"absolute",top:"30px",left:"36px"}}>Tipo de sangre</label>
            <input typeof="text" name="nacionalidad"onChange={handleChange}  style={{position:"absolute",top:"60px",left:"38px",width:"280px"}}/> 
            </div>
            <div style={{position:"absolute",top:"280px",left:"542px",width:"20%"}}>
                <label style={{position:"absolute",top:"-26px",left:"10px"}}>Numero telefono</label>
            <input typeof="text"  name="identificacioncol"  onChange={handleChange} style={{position:"absolute",left:"-5px",width:"280px"}} />
            </div>
            <div></div>
                  </div>  
            <button type="primary" htmlType="submit" className="boton2"></button>
            

            </form>
        </div>
        

        </>
    )


}
function Encuesta_Doctor(){
    const imageCambio = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
      const [formData, setFormData] = useState({
              ididentificacion:"",
              nombre:"",
              edad:"",
              nacionalidad:"",
              identificacioncol:"",
              ubicacion:"",
              identificacioncol1:""
      });
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({
              ...prevState,
              [name]: value
          }));
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              await axios.post('/saveData', { ...formData });
              console.log('Datos enviados correctamente');
              e.target.reset();
          } catch (error) {
              console.error('Error al enviar los datos', error);
              // Mostrar mensaje de error al usuario si es necesario
          }
      };
      const archivo = () => {
          imageCambio.current.click();
        };
      
        const hadleImagenChage = (e) => {
          const file = e.target.files[0];
          setSelectedImage(file);
        };
  
  
      return(<>
         
          <div>
              <img
              src={Log}
              alt="Log"
              className="imagen"
              />
              <div
               className="h2"
              ><h1>INFORMACION DEL PACIENTE </h1 ></div>
           <div onClick={archivo}  className="perfil-image-container">
          <input
            type="file"
            ref={imageCambio}
            onChange={hadleImagenChage}
            style={{ display: "none" }}
          />
          {selectedImage ? (
            <img alt="avatar" src={URL.createObjectURL(selectedImage)} className="perfil-image" />
          ) : (
            <img alt="Iman" src={Iman} className="perfil-image" />
          )}
        </div>
           <form onSubmit={handleSubmit} >   
  
              <div style={{position:"absolute",top:"110px",left:"750px",
              background: "rgb(224, 218, 218)",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow:" 10px 10px 15px rgb(0, 0, 0)",
              width:"30%",
              height:"27%"
              }} className="input">
                  <div style={{position:"absolute",top:"20px",left:"25px", width:"100%"}}>
              <label style={{position:"absolute",top:"1px",left:"-120px",width:"100%"}}>Numero de seguro</label>
              <input typeof="text"  name="ididentificacion" required onChange={handleChange} style={{position:"absolute",top:"35px",left:"15px",width:"380px"}}/>
              </div>
              <div style={{position:"absolute",top:"120px",left:"25px",width:"100%"}}>
              <label style={{position:"absolute",top:"-20px",left:"-100px",width:"100%"}}>Fecha de nacimiento</label>
              <input typeof="text"  name="nombre" onChange={handleChange} style={{position:"absolute",top:"15px",left:"15px",width:"380px"}} />
              </div>
              </div>
              <div style={{ position: "absolute",
              width:"57%",
              height:"50%" ,
              top:"46%",
              left: "22%",
              background: "rgb(224, 218, 218)",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow: "10px 10px 15px rgb(0, 0, 0)"}}>
              <div style={{position:"absolute",top:"45px",left:"40px"}}>
              <label style={{position:"absolute",top:"-15px",left:"20px"}}>Nombre</label>
              <input typeof="text" name="edad" onChange={handleChange} style={{position:"absolute",top:"10px",left:"20px",width:"380px"}}/>
              </div>
              <div style={{position:"absolute",top:"120px",left:"40px"}}>
              <label style={{position:"absolute",top:"-12px",left:"20px"}} >Curp</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange} style={{position:"absolute",top:"12px",left:"20px",width:"380px"}}/> 
              </div>
              <div style={{position:"absolute",top:"150px",left:"20px"}}>
                  
                  <label style={{position:"absolute",top:"30px",left:"36px"}}>Domicilio</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange}  style={{position:"absolute",top:"60px",left:"40px",width:"380px"}}/> 
              </div>
              <div style={{position:"absolute",top:"280px",left:"60px"}}>
                  <label style={{position:"absolute",top:"-26px",left:"10px"}}>Entidad federativa</label>
              <input typeof="text"  name="identificacioncol"  onChange={handleChange} style={{position:"absolute",width:"380px"}} />
              </div>
              <div style={{position:"absolute",top:"45px",left:"515px",width:"50%"}}>
              <label style={{position:"absolute",top:"-15px",left:"20px"}}>Unidad medica</label>
              <input typeof="text" name="edad" onChange={handleChange} style={{position:"absolute",top:"10px",left:"20px",width:"280px"}}/>
              </div>
              <div style={{position:"absolute",top:"120px",left:"515px"}}>
              <label style={{position:"absolute",top:"-12px",left:"20px"}} >Edad</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange} style={{position:"absolute",top:"12px",left:"20px",width:"280px"}}/> 
              </div>
              <div style={{position:"absolute",top:"150px",left:"499px",width:"50%"}}>
                  <label style={{position:"absolute",top:"30px",left:"36px"}}>Tipo de sangre</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange}  style={{position:"absolute",top:"60px",left:"38px",width:"280px"}}/> 
              </div>
              <div style={{position:"absolute",top:"280px",left:"542px",width:"20%"}}>
                  <label style={{position:"absolute",top:"-26px",left:"10px"}}>Numero telefono</label>
              <input typeof="text"  name="identificacioncol"  onChange={handleChange} style={{position:"absolute",left:"-5px",width:"280px"}} />
              </div>
              <div></div>
                    </div>  
              <button type="primary" htmlType="submit" className="boton2"></button>
              
  
              </form>
          </div>
          
  
          </>
      )
}


function Encuesta_personal(){
    const imageCambio = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
      const [formData, setFormData] = useState({
              ididentificacion:"",
              nombre:"",
              edad:"",
              nacionalidad:"",
              identificacioncol:"",
              ubicacion:"",
              identificacioncol1:""
      });
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({
              ...prevState,
              [name]: value
          }));
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
          try {
              await axios.post('/saveData', { ...formData });
              console.log('Datos enviados correctamente');
              e.target.reset();
          } catch (error) {
              console.error('Error al enviar los datos', error);
              // Mostrar mensaje de error al usuario si es necesario
          }
      };
      const archivo = () => {
          imageCambio.current.click();
        };
      
        const hadleImagenChage = (e) => {
          const file = e.target.files[0];
          setSelectedImage(file);
        };
  
  
      return(<>
         
          <div>
              <img
              src={Log}
              alt="Log"
              className="imagen"
              />
              <div
               className="h2"
              ><h1>INFORMACION DEL PACIENTE </h1 ></div>
           <div onClick={archivo}  className="perfil-image-container">
          <input
            type="file"
            ref={imageCambio}
            onChange={hadleImagenChage}
            style={{ display: "none" }}
          />
          {selectedImage ? (
            <img alt="avatar" src={URL.createObjectURL(selectedImage)} className="perfil-image" />
          ) : (
            <img alt="Iman" src={Iman} className="perfil-image" />
          )}
        </div>
           <form onSubmit={handleSubmit} >   
  
              <div style={{position:"absolute",top:"110px",left:"750px",
              background: "rgb(224, 218, 218)",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow:" 10px 10px 15px rgb(0, 0, 0)",
              width:"30%",
              height:"27%"
              }} className="input">
                  <div style={{position:"absolute",top:"20px",left:"25px", width:"100%"}}>
              <label style={{position:"absolute",top:"1px",left:"-120px",width:"100%"}}>Numero de seguro</label>
              <input typeof="text"  name="ididentificacion" required onChange={handleChange} style={{position:"absolute",top:"35px",left:"15px",width:"380px"}}/>
              </div>
              <div style={{position:"absolute",top:"120px",left:"25px",width:"100%"}}>
              <label style={{position:"absolute",top:"-20px",left:"-100px",width:"100%"}}>Fecha de nacimiento</label>
              <input typeof="text"  name="nombre" onChange={handleChange} style={{position:"absolute",top:"15px",left:"15px",width:"380px"}} />
              </div>
              </div>
              <div style={{ position: "absolute",
              width:"57%",
              height:"50%" ,
              top:"46%",
              left: "22%",
              background: "rgb(224, 218, 218)",
              borderRadius: "20px",
              border: "1px solid black",
              boxShadow: "10px 10px 15px rgb(0, 0, 0)"}}>
              <div style={{position:"absolute",top:"45px",left:"40px"}}>
              <label style={{position:"absolute",top:"-15px",left:"20px"}}>Nombre</label>
              <input typeof="text" name="edad" onChange={handleChange} style={{position:"absolute",top:"10px",left:"20px",width:"380px"}}/>
              </div>
              <div style={{position:"absolute",top:"120px",left:"40px"}}>
              <label style={{position:"absolute",top:"-12px",left:"20px"}} >Curp</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange} style={{position:"absolute",top:"12px",left:"20px",width:"380px"}}/> 
              </div>
              <div style={{position:"absolute",top:"150px",left:"20px"}}>
                  
                  <label style={{position:"absolute",top:"30px",left:"36px"}}>Domicilio</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange}  style={{position:"absolute",top:"60px",left:"40px",width:"380px"}}/> 
              </div>
              <div style={{position:"absolute",top:"280px",left:"60px"}}>
                  <label style={{position:"absolute",top:"-26px",left:"10px"}}>Entidad federativa</label>
              <input typeof="text"  name="identificacioncol"  onChange={handleChange} style={{position:"absolute",width:"380px"}} />
              </div>
              <div style={{position:"absolute",top:"45px",left:"515px",width:"50%"}}>
              <label style={{position:"absolute",top:"-15px",left:"20px"}}>Unidad medica</label>
              <input typeof="text" name="edad" onChange={handleChange} style={{position:"absolute",top:"10px",left:"20px",width:"280px"}}/>
              </div>
              <div style={{position:"absolute",top:"120px",left:"515px"}}>
              <label style={{position:"absolute",top:"-12px",left:"20px"}} >Edad</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange} style={{position:"absolute",top:"12px",left:"20px",width:"280px"}}/> 
              </div>
              <div style={{position:"absolute",top:"150px",left:"499px",width:"50%"}}>
                  <label style={{position:"absolute",top:"30px",left:"36px"}}>Tipo de sangre</label>
              <input typeof="text" name="nacionalidad"onChange={handleChange}  style={{position:"absolute",top:"60px",left:"38px",width:"280px"}}/> 
              </div>
              <div style={{position:"absolute",top:"280px",left:"542px",width:"20%"}}>
                  <label style={{position:"absolute",top:"-26px",left:"10px"}}>Numero telefono</label>
              <input typeof="text"  name="identificacioncol"  onChange={handleChange} style={{position:"absolute",left:"-5px",width:"280px"}} />
              </div>
              <div></div>
                    </div>  
              <button type="primary" htmlType="submit" className="boton2"></button>
              
  
              </form>
          </div>
          
  
          </>
      )
}
export {Encuesta, Encuesta_Doctor,Encuesta_personal}
