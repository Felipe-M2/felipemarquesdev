import { useState } from 'react';

import './DesignPortfolio.css';

const DesignPortfolio = ()=>{

    const [status, setStatus] = useState(false);

    const MouseEnter = ()=>{
        setStatus(true);
    }

    const MouseOut = ()=>{
        setStatus(false);
    }

    return(
        <section className="designPortfolio">
            <div className="tituloDesign">
                <div>Data</div>
                <div>Projeto</div>
            </div>

            <div 
                className="listaDesign" 
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseOut}
            >
                <div className="cardDesign">
                    <div className="dataCardDesign">2024</div>

                    <div className="nomeProjetoDesign">Projeto</div>
                </div>

                <div className="cardDesign">
                    <div className="dataCardDesign">2024</div>

                    <div className="nomeProjetoDesign">Projeto</div>
                </div>

                <div className="cardDesign">
                    <div className="dataCardDesign">2024</div>

                    <div className="nomeProjetoDesign">Projeto</div>
                </div>

                <div className="cardDesign">
                    <div className="dataCardDesign">2024</div>

                    <div className="nomeProjetoDesign">Projeto</div>
                </div>

                <div className="cardDesign">
                    <div className="dataCardDesign">2024</div>

                    <div className="nomeProjetoDesign">Projeto</div>
                </div>

                <div className="cardDesign">
                    <div className="dataCardDesign">2024</div>

                    <div className="nomeProjetoDesign">Projeto</div>
                </div>

                <div className="cardDesign">
                    <div className="dataCardDesign">2024</div>

                    <div className="nomeProjetoDesign">Projeto</div>
                </div>
            </div>

            {status != false ?(
                <div className="imgProjetoDesign">

                </div>
            ) : null}
        </section>
    )
}

export default DesignPortfolio;