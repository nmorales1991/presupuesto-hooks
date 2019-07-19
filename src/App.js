import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
    const [presupuesto, setpresupuesto] = useState(0);
    const [restante, setrestante] = useState(0)
	const [pregunta, setpregunta] = useState(true);
	const [gasto, setgasto] = useState({})
	const [gastos, setgastos] = useState([])
	const [crearGasto, setcrearGasto] = useState(false)

	useEffect(() => {
		if(crearGasto){
			const listadoGastos = [...gastos, gasto]
            setgastos(listadoGastos)
            
            const presupuestoRestante = restante - gasto.cantidadGasto

            setrestante(presupuestoRestante)

			setcrearGasto(false)
		}
	},[crearGasto])

    return (
        <div className="App container">
            <header>
                <h1>Gasto Semanal</h1>
                <div className="contenido-principal contenido">
                    {pregunta ? (
                        <Pregunta
                            setpresupuesto={setpresupuesto}
                            setpregunta={setpregunta}
                            setrestante={setrestante}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Formulario
									setgasto={setgasto}
									setcrearGasto={setcrearGasto}
								/>
                            </div>
                            <div className="one-half column">
								<Listado gastos={gastos} />
                                <ControlPresupuesto presupuesto={presupuesto}
                                restante={restante}/>
							</div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
