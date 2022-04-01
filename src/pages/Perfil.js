
import React  from 'react'
import carol2 from '../componentes/imagenes/carol2.jpg'
import 'bootstrap/dist/css/bootstrap.css'
class Perfil extends React.Component{
    render (){
        
        return (<div>
             <div align="center">  <a type ="button" href="/" className="btn btn-primary btn-lg btn-block" >
                         Ir a pagina de: Inicio</a></div>
            <div id='perfil'>Quien soy </div>

                           <div className="divfoto">
                           <img src={carol2} class="center" alt="..."/>
                            </div>
                            
                             <div className="infoalu"   >
                                <div className="detalle">
                        Nombre:Carolina Patricio Rendon 
                                     Edad:21 años 
                        Fecha De Nacimiento:09/Marzo/2001
                        
                                </div>
                              
                            </div>
            
                            
                            <div className="info"   >
                                <div className="detalle">
                            Gustos: Me gusta salir en familia jugar futbool
                            conoser amigos,mi cansion favorita es la montaña 
                            de caligaris y me gusta mucho estar en la naturaleza y 
                            disfrutar los paisajes  

                                </div>
                            </div>
                            <div className="in"   >
                                <div className="detalle">
                            Que me gusta de UTVT:es una buena escuela 
                            que los maestros explican bien hacen el exfuerzo
                            para darnos la  clases apesar de estos dos anos de pandemia 
                            nos demostraon que si seguri adelnate y seguir aprendiendode nuestros 
                            errores 

                                </div>
                            </div>
                            
         </div>
           
        )
    }
}
export default Perfil 