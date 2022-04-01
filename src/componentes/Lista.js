import React from 'react'
import Primer_componente from "./Primer_componente"

function Lista (props){
    return (
        <div>
        {props.detalle.map((reporte)=>{
                return (
         <Primer_componente
            nombreempresa= {reporte.nombreempresa}
            sucursal={reporte.sucursal}
            foto={reporte.foto}
            colorfonodo={reporte.colorfonodo}
            borde={reporte.borde}
            fondoboton="alert alert-success "/>
                )})}
                </div>
       
    )

}

export default Lista