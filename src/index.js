import React    from 'react'
import ReactDOM from 'react-dom'

import Principal from './componentes/Principal'


import 'bootstrap/dist/css/bootstrap.css'



const elemento = (<div> <Principal/>
    </div>)

const container = document.getElementById('root')



ReactDOM.render (elemento,container)

