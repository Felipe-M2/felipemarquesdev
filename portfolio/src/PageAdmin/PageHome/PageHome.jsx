import { Link } from 'react-router-dom';

import './PageHome.css';

import Logo from '../assets/logo.svg';
import Cliente from '../assets/cliente.svg';
import Portfolio from '../assets/portfolio.svg';
import Dashboard from '../assets/dashboard.svg';

const PageHome = () => {
    return (
        <section className="pageHome">
            <section className="navBarLeft">
                <div className="logo">
                    <img src={Logo} alt="" />
                    <h1>ADMIN</h1>
                </div>
            </section>

            <main className="contentPageHome">
                <div className="menuPageHome">
                    <div className='cards'>
                        <div className="novoCliente">
                            <img src={Cliente} alt="" />

                            <h1 className='tituloCard'>Cliente</h1>

                            <Link className='linkCardAdmin'>Cadastrar</Link>
                        </div>

                        <div className="potfolioPageHome">

                            <img src={Portfolio} alt="" />

                            <h1 className='tituloCard'>Portfolio</h1>

                            <Link className='linkCardAdmin'>Editar</Link>
                        </div>

                        <div className="dashboard">

                            <img src={Dashboard} alt="" />

                            <h1 className='tituloCard'>Dashboard</h1>

                            <Link className='linkCardAdmin'>Visualizar</Link>
                        </div>
                    </div>
                </div>

                <div className="utilsPageHome">

                </div>
            </main>
        </section>
    )
}

export default PageHome;