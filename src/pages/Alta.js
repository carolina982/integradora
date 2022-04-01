import React from 'react'

class Alta  extends React.Component{
   
    constructor(){
        super();
        this.state={
            name:'',
            contacto:'',
            num1:'',
            salar:0,
            area1:'false',
            area2:'false',
            numero1:0,
            fech:'',
            salario2:0,
            status:'',
            status2:'',
            status3:'',

        }
        this.valoresformularios=this.valoresformularios.bind(this);
        this.salario1=this.salario1.bind(this);
        this.datos=this.datos.bind(this);
    }
    valoresformularios=({name, value,checked,type})=>{
        this.setState(()=>{
            return{[name]:type==="checkbox" ? checked:value};
        });
    };

    salario1(e){
        if(this.state.salar==="A")
{
    this.setState({salario2:parseInt(this.state.numero1) * 250 })
}
else
{
    this.setState({salario2:parseInt(this.state.numero1) * 350 })
}
            switch(this.state.numero1){
             case'7': return this.setState({status:' $500 en Vales'})
             break;
             default: return this.setState({status:'$200 en vales'})
             break;
             }               


    }

    datos(e){
        if(this.state.num1===1)
{
    this.setState({datos1:'Planta Alta'}) 
}
else
{
    this.setState({datos1:'Planta Baja' })
}
            switch(this.state.fech==='A'){
             case'A': return this.setState({status2:'De 7:00 am a 1:pm '},{})
             break;
             default: return this.setState({status2:'De 1:00 pm a 7:pm'})
             break;
             }               

    }
  
    render(){
        return(

            <div >

                        <div align="center">  <a type ="button" href="/" className="btn btn-primary btn-lg btn-block" >
                         Ir a pagina de: Inicio</a></div>

                  <div className='formulario'>
                      <di className='form2'>
                          
                        <div className='text21'>Nombre: 
                            <input type='text' placeholder='Nombre Completo' name='name'
                            onKeyUp={event=>this.valoresformularios(event.target)} /><p/>

                            Dias Trabajados<input type='text' placeholder=' Dias ' name='numero1'
                            onKeyUp={event=>this.valoresformularios(event.target)} />&nbsp;&nbsp;&nbsp;&nbsp;
                                Salario  <select name='salar' onChange={event=>this.valoresformularios(event.target)} >
                                <option value={'A'} >$250</option>
                                <option value={'B'} >$350</option>
                                </select>
                                <input type='submit' value='Ver Monto' className='btn btn-outline-info' onClick={this.salario1}/>
                                &nbsp;&nbsp;&nbsp;Total a Pagar <input type='text' name='salario2' value={this.state.salario2} 
                            onKeyUp={event=>this.calculapago(event.target)}/><br/>
                            Bono de: <input type='text' name='status' value={this.state.status} disabled='disabled'/><p/>

                            <div> Forma de pago<br/><input type='radio' name='formpago' value={"efec"} onChange={event=>this.valoresformularios(event.target)} />Efectivo</div>
                            <div> <input type='radio' name='formpago' value={"cheq"} onChange={event=>this.valoresformularios(event.target)} />Cheque</div>
                            <div> <input type='radio' name='formpago' value={"dep"} onChange={event=>this.valoresformularios(event.target)} />Deposito</div>
                            <div> <input type='radio' name='formpago' value={"tranf"} onChange={event=>this.valoresformularios(event.target)} />Tranferencia</div><br/>
                            
                            Area de Trabajo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Numero de Planta <input type='text' placeholder='   Ejem: 1 o 2' name='num1'
                                onKeyUp={event=>this.valoresformularios(event.target)} />
                            <br/><input type='checkbox' name='area1' value="p" onChange={event=>this.valoresformularios(event.target)} />Paqueteria
                                <br/><input type='checkbox' name='area2' value="m" onChange={event=>this.valoresformularios(event.target)} />Maquinaria
                                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                                Fecha de Cobro a elegir: <select name='fech' onChange={event=>this.valoresformularios(event.target)} >
                                <option value={'A'}>7/03/22</option>
                                <option value={'B'}>8/03/22</option>
                                </select><br/>
                       
                                <br/><div align="center"><input type='submit' value='Datos de Consulta:' className='btn btn-outline-info' onClick={this.datos}/></div></div>
                                <br/><div className='text21'>Empleado de: &nbsp;
                            <input type='text' name='status1' value={this.state.datos1} disabled='disabled'/>
                            <br/>Horario de pago: <input type='text' name='status2' value={this.state.status2} disabled='disabled'/>
                            <br/>Nombre: <input type='text' name='status3' value={this.state.name} disabled='disabled'/>

                    </div>
                                
                </di>
                      
            </div>
                  
         </div>
        )

    }
}

export default Alta