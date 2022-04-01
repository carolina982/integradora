import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Reporte from '../pages/Reporte'
import Alta from '../pages/Alta'
import Noexiste from '../pages/Noexiste'
import Perfil from '../pages/Perfil'
function Principal (){
    return (
    <BrowserRouter>
     <Switch>
        
         <Route exact  path="/Reportea" component={Reporte}/>
         <Route exact  path="/Altaa" component={Alta}/>
         <Route exacr  path="/Quieen" component={Perfil}/>
         <Route component={Noexiste}/>
    </Switch>
     </BrowserRouter>

    )
}

export default Principal