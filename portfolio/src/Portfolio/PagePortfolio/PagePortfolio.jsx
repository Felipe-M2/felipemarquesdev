import { Link } from 'react-router-dom';

import './PagePortfolio.css';

import FinTela from '../../assets/fintela1.svg'; 

const PagePortfolio = () => {

    const data = [
        {
            nomeProjeto: "FinControl",
            tipoProjeto: "Financeiro",
            descricaoProjeto: "FinControl é um projeto pessoal que tem o objetivo de me ajudar a reorganizar a minha vida financeira, o sistema seria responsável por registrar meus gastos e entradas de dinheiro e gerar relatórios para um controle maior, além disso, ele enviaria mensagens sobre as análises e geraria um relatório anual de gastos!",
            linkProjeto: "https://fincontrol-5h34nv7ti-felipe-m2.vercel.app/"
        }
    ]

    return (
        <main className="pagePortfolio">
            <section className="infoPageProjeto">
                <div className="topoProjeto">
                    <h1>FM</h1>

                    <Link className='linkHome' to="/felipemarquesdev">HOME</Link>
                </div>

                <div className="divInfoProjeto">
                    <div>
                        <h4>{data[0].tipoProjeto}</h4>
                        <h1>{data[0].nomeProjeto}</h1>
                    </div>

                    <p>{data[0].descricaoProjeto}</p>

                    <Link className='linkProjeto' to={data[0].linkProjeto}>
                        Conhecer
                        <div>↦</div>
                    </Link>
                </div>

                <div className="circulo">

                </div>
            </section>

            <section className="imgPageProjeto">
                <img src={FinTela} alt="" />
            </section>

            <section className="tecnologiasPageProjeto">
                <div className="imgTecnologia">

                </div>

                <div className="cards">
                    <h1>Tecnologias</h1>

                    <div className="cardsTec">
                        <div>ReactJS</div>
                        <div>NodeJS</div>
                        <div>MySQL</div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PagePortfolio;