import { Link } from 'react-router-dom';

import './PagePortfolio.css';

const PagePortfolio = () => {

    const data = [
        {
            nomeProjeto: "Nome do Projeto",
            tipoProjeto: "Tipo do projeto",
            descricaoProjeto: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa cumque magni reprehenderit autem quae tempore perferendis hic similique totam!",
            linkProjeto: "https://www.google.com.br"
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

            </section>

            <section className="tecnologiasPageProjeto">
                <div className="imgTecnologia">

                </div>

                <div className="cards">
                    <h1>Tecnologias</h1>

                    <div className="cardsTec">

                    </div>
                </div>
            </section>
        </main>
    )
}

export default PagePortfolio;