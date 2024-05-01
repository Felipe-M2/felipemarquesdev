import './Portfolio.css';
import Logo from '../assets/logo.svg';
import Foto from '../assets/foto.svg';
import Pred from '../assets/pred.svg';
import Car from '../assets/car.svg';
import CardFront from '../assets/cardFrente.svg';
import CardBack from '../assets/cardVerso.svg';

import ChatBot from './ChatBot/ChatBot';
import BannerPortfolio from './ListaPortfolio/ListaPortfolio';

const Portfolio = () => {


    return (
        <>
            <header className="topo">
                <div className="topoFlex">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>

                    <nav className="navBarTopo">
                        <ul>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">GitHub</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Contato</a></li>
                        </ul>
                    </nav>
                </div>

                <h1 className="nomeTopo">FELIPE MARQUES</h1>

                <div className="tituloEnd">
                    <h1 className="tituloEnd1">
                        WEB DEVELOPER
                    </h1>
                </div>
            </header>

            <main className="conteudo">

                <div className="tituloStart">
                    <h1 className="tituloEnd2">
                        FULL-STACK
                    </h1>
                </div>

                <div className="lineConteudo">
                    <div></div>
                    <p>{'//////////'}</p>
                </div>

                <section className="apresentacao">
                    <div className="imgApresentacao">
                        <img src={Foto} alt="" />
                    </div>

                    <div className="sobreApresentacao">
                        <p>Olá, meu nome é Felipe Marques, eu tenho 23 anos, meu foco é desenvolvimento web, estou disponível para novos desafios, garantindo a satisfação do cliente que confiar em meu trabalho!</p>

                        <p>Tenho experiência tanto na criação de designers focados no cliente quanto no código focado no usuário.</p>

                        <p>Dá uma olhada no meu <span>PORTFÓLIO</span>, vai valer a pena!</p>

                        <a href=''>Conhecer</a>
                    </div>
                </section>

                <section className="apresentacao2">
                    <div>
                        <img src={Pred} alt="" />

                        <p>Meu foco como desenvolvedor é repassar as minhas habilidades para os meus clientes e consequentemente ajudá-los em seus negócios.</p>

                        <h1>DESENVOLVEDOR</h1>
                    </div>

                    <div className='div2apresentacao'>

                        <p>Desde o design, passando pelo código e chegando à publicação do projeto, o objetivo é o mesmo: a satisfação do usuário!</p>

                        <img src={Car} alt="" />

                        <h1>WEB</h1>
                    </div>

                    <div className="linearApresentacao2"></div>
                </section>

                <section className="portfolio">
                    <div className="div1Portfolio">
                        <div className="topoApresPortfolio">
                            <div className="numPortfolio">
                                <h1>1/3</h1>

                                <p>Desenvolvimento de sites e sistemas!</p>
                            </div>

                            <div className="tituloPortfolio">
                                <h1>DESENVOLVEDOR</h1>
                            </div>
                        </div>
                    </div>

                    <div className="div2Portfolio">
                        <div className="topoApresPortfolio">
                            <div className="numPortfolio">
                                <h1>2/3</h1>

                                <p>Criação de designes de sites, sistemas e aplicativos!</p>
                            </div>

                            <div className="tituloPortfolio">
                                <h1>WEBDESIGNER/SYSTEMDESIGNER</h1>
                            </div>
                        </div>
                    </div>

                    <div className="div3Portfolio">
                        <div className="topoApresPortfolio">
                            <div className="numPortfolio">
                                <h1>3/3</h1>

                                <p>Analise e manutenção de sites e sistemas!</p>
                            </div>

                            <div className="tituloPortfolio">
                                <h1>ANALISE/MANUTENÇÃO</h1>
                            </div>
                        </div>
                    </div>
                </section>

                < BannerPortfolio />

                <section className="contato">
                    <div className="cardContato">
                        <div className="flipper">
                            <div className="card-front">
                                <img src={CardFront} alt="" />
                            </div>

                            <div className="card-back">
                                <img src={CardBack} alt="" />
                            </div>
                        </div>
                    </div>

                    < ChatBot />
                </section>
            </main>

            <footer className="rodape">
                <div>
                    <p className="infoDireitos">
                        © 2024 - Desenvolvido por Felipe Marques
                    </p>

                    <p className="infoCarreira">
                    Estou aberto a novos desafios como programador, garanto que consigo fazer a diferença nos seus objetivos, assim como o meu objetivo é garantir a sua satisfação e do seu público!
                    </p>

                    <h1 className='nomeTopo'>FELIPE MARQUES</h1>
                </div>

                <nav className="navBarTopo">
                    <ul>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contato</a></li>
                        <li><a href="">Sobre</a></li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Portfolio;