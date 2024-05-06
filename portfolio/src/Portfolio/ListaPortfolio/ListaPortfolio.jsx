import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ListaPortfolio.css';

import Banner from '../../assets/banner.svg';
import Fincontrol from '../../assets/fincontrol.svg';

const ListaPortfolio = () => {

    const [posicao, setPosicao] = useState(0);

    const bannerLista = [
        {
            nomeProjeto: "FinControl",
            imgProjeto: Fincontrol,
            linkProjeto: "/felipemarquesdev/projeto"
        },
        {
            nomeProjeto: "Em breve",
            imgProjeto: Banner,
            linkProjeto: "/felipemarquesdev"
        }
    ]

    const position = (fun)=>{
        if(fun == "prox"){
            if(posicao == bannerLista.length -1){
                setPosicao(0);
            }else{
                setPosicao(posicao + 1);
            }
        }else{
            if(posicao == 0){
                setPosicao(bannerLista.length -1);
            }else{
                setPosicao(posicao - 1);
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            position("prox");
        }, 8000);
    }, []);

    return (
        <section className="bannerProjeto">
            <div className="infoBannerProjeto">
                <h1>Criatividade e paixão por tecnologia</h1>

                <p>Resultado:</p>

                <Link 
                    className='linkBannerProjeto' 
                    to={bannerLista[posicao].linkProjeto}
                >
                        {bannerLista[posicao].nomeProjeto}
                </Link>
            </div>

            <img className='bannerImg' src={bannerLista[posicao].imgProjeto} alt="" />

            <div className="btnProjeto">
                <button onClick={()=>position("ant")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                        <path d="M67.3 28.22H16.48L30.23 6.21999L20.44 0.389997L0.2 33.94L20.55 67.6L30.23 61.77L16.48 39.33H67.3V28.22Z" fill="white" />
                    </svg>
                </button>
                <button onClick={()=>position("prox")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                        <path d="M0.0500004 39.33H50.87L37.12 61.77L46.8 67.6L67.15 33.94L46.91 0.389997L37.12 6.21999L50.87 28.22H0.0500004V39.33Z" fill="white" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default ListaPortfolio;