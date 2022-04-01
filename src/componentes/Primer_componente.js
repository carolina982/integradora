
import React from 'react'
import imagen  from  './imagenes/cos.jpg'
import al from './imagenes/al.jpg'
import './estilos/elementos.css'

class Primer_componente extends React.Component{
  
    render (){
        const {foto,colorfondo,nombreempresa,sucursal,fondoboton} = this.props
        return (<div className="ficha"> 
                 <div className="bordeazul" style={{
                                 backgroundColor: `${colorfondo}`
                              }}>  

                        <div className="divfoto">
                       <img src ={foto} className= "fotito"/>
                    
                       </div> 
                           
                             
                             <div className="infoalu"   style={{
                                 backgroundColor: `${colorfondo}`
                              }}>
                                <div className="detalle">
                                 Nombre empresa: {nombreempresa}
                                 Sucursal:{sucursal}
                                </div>
                             
                            </div>

                                 <div>
                                   <button tyde ="button " className ={fondoboton}>Ver detalle</button>
                                </div>
                              
                    </div>       
                </div>)
    }
}
 export default  Primer_componente