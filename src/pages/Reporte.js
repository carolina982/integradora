import React  from 'react'
import Titulo from '../componentes/Titulo'
import  Lista from '../componentes/Lista'
class Reporte extends React.Component{
    constructor (props){
        super (props)
        this.state={
            datos:[{
            "foto":"fotos/img2.PNG",
            "nombreempresa":"coca cola ",
            "sucursal":"toluca",
            "colorfonodo":"Red",
           
            },
            {
                "foto":"fotos/img1.PNG",
                "nombreempresa":"coca cola ",
                "sucursal":"Torreon",
                "colorfonodo":"Red",
                "borde":"yellow"},
                {
                    "foto":"fotos/img3.PNG",
                    "nombreempresa":"coca cola ",
                    "sucursal":"Pilares",
                    "colorfonodo":"Red",
                    "borde":"aroon",
      
                } ]
           

         }

    }
    render (){
        return (<div>  
             <div align="center">  <a type ="button" href="/" className="btn btn-primary btn-lg btn-block" >
                         Ir a pagina de: Inicio</a></div>
        <div><Titulo
        empresa="barzel "/>
       
      
       <Lista
       detalle ={this.state.datos}
       />
        </div>

        </div>
        )
}
}
export default Reporte