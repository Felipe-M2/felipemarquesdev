import { useState } from 'react';
import { Link } from 'react-router-dom';

import './LoguinAdmin.css';

const LoguinAdmin = (props) => {

    const [texto, setTexto] = useState();
    const [tipo, setTipo] = useState("text");

    const keyPress = (event)=>{
        if(event.key === 'Enter'){

            const textoSenha = ()=>{
                if(tipo == "text"){
                    return(texto)
                }else{
                    return("*******");
                }
            }

            setTipo("password")

            const terminal = document.querySelector('.historico');
            let divTerminal = document.createElement("div");
            divTerminal.classList.add('input');

            divTerminal.innerHTML = `
                <p>C:\\loguin-admin-terminal:${textoSenha()}</p>
            `;

            terminal.appendChild(divTerminal)

            setTexto("");
        }
    }

    return (
        <section className="bodyLoguin">
            <section className="loguinAdmin">
                <div className="barTop">
                    <div className="tituloLoguinCmd">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-terminal" viewBox="0 0 16 16">
                            <path fill='black' d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z" />
                            <path fill='black' d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
                        </svg>

                        <p>Administrator: Command Prompt</p>
                    </div>

                    <div className="menuCmd">
                        <button
                            onClick={props.closeTerminal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" fill='black' d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
                                <path fill='black' d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
                            </svg>
                        </button>
                        <button
                            onClick={props.closeTerminal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill='black' d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="terminal" onKeyDown={keyPress}>
                    <div className='tituloTerminal'>
                        <p>Felipe Marques [versão 0.0.0.1]</p>
                        <p>(C) Todos os direitos reservados - Felipe Marques</p>
                    </div>
                    <div className="historico">

                    </div>
                    <div className="input">
                        <p>C:\loguin-admin-terminal:</p>
                        <input 
                        type={tipo} 
                        onChange={(e)=>setTexto(e.target.value)}
                        value={texto}
                        />
                    </div>

                </div>
            </section>
        </section>
    )
}

export default LoguinAdmin;