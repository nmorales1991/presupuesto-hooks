import React,{useState} from 'react'
import Error from './Error'
import shortid from 'shortid'

export default function Formulario(props) {

    const {setgasto,setcrearGasto} = props

    const [nombreGasto, setnombreGasto] = useState('')
    const [cantidadGasto, setcantidadGasto] = useState(0)
    const [error, seterror] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        if( cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto==='' ){
            seterror(true)
            return
        }

        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        setgasto(gasto)
        setcrearGasto(true)

        seterror(false)

        setcantidadGasto('')
        setnombreGasto('')
        
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus Gastos Aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o El presupuesto es incorrecto" /> :null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => setnombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
            <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => parseInt(setcantidadGasto(e.target.value))}
                    value={cantidadGasto}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    )
}
