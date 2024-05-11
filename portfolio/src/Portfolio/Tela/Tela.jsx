import { useRef } from 'react';

import './Tela.css';

import VdBack from './vdBack.mp4';

const Tela = () => {

    const videoRef = useRef(null);

    const handleEnded = () => {
        // Quando o vídeo terminar, reinicie-o
        videoRef.current.play();
    };

    return (
        <section className="tela">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                controls={false}
                onEnded={handleEnded}
                src={VdBack}></video>
        </section>
    )
}

export default Tela;