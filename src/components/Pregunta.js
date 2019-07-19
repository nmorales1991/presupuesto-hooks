import React, {Fragment, useState} from 'react'
import Error from './Error'

export default function Pregunta(props) {

    const {setpresupuesto,setpregunta,setrestante} = props

    const [cantidad, setcantidad] = useState(0)
    const [error, seterror] = useState(false)

    const agregarPresupuesto = e => {
        e.preventDefault()

        if( cantidad <= 0 || isNaN(cantidad) ){
            seterror(true)
            return
        }
        seterror(false)
        setpresupuesto(cantidad)
        setrestante(cantidad)
        setpregunta(false)

    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> :null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => setcantidad(parseInt(e.target.value))}    
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
        
    )
}