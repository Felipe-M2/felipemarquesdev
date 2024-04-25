import { useState } from 'react';
import EnvCont from '../../assets/send.svg';
import './ChatBot.css';

const ChatBot = () => {
    const divChat = document.querySelector('.menssagen');
    const scrollToBotom = () => divChat.scrollTop = divChat.scrollHeight;

    const [textChat, setTextChat] = useState('');
    const [menssagens, setMenssagens] = useState([]);

    const textosProntos = [
        'Qual o seu telefone?',
        'Qual o seu E-Mail?',
        'Me fale mais sobre a sua ideia de projeto, como eu posso te ajudar?',
        'Atribua uma nota de 1 a 5 para esse chatBot, isso vais nos ajudar a melhorar!'
    ];

    const [posicao, setPosicao] = useState(0);

    const chatText = () => {
        setMenssagens([textChat, ...menssagens]);
        setTextChat('');

        if (posicao != textosProntos.length) {
            setPosicao(posicao + 1);

            let divCliente = document.createElement("div");
            divCliente.innerHTML = textChat;
            divCliente.classList.add('menssagemClient');
            divChat.appendChild(divCliente);
            scrollToBotom();

            setTimeout(() => {
                let divSistema = document.createElement("div");
                divSistema.innerHTML = textosProntos[posicao];
                divSistema.classList.add('menssagemSistema');
                divChat.appendChild(divSistema);
                scrollToBotom();
            }, 1500)

        } else {
            setPosicao(0);
            divChat.innerHTML = '';
            divChat.innerHTML = `
                <div class="CadConf">
                    <h1>    
                        Cadastro confirmado, agora é só aguardar o nosso contato!
                    </h1>
                </div>
            `;
        }

        console.log(menssagens);
    }

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            chatText();
        }
    }

    return (
        <div className="formContato">

            <div className="menssagen">
                <div className="menssagemSistema">
                    Olá, qual o seu nome?
                </div>
            </div>

            <div className="inputForm">
                <input
                    onChange={(event) => setTextChat(event.target.value)}
                    type="text"
                    name=""
                    id=""
                    value={textChat}
                    onKeyDown={keyPress}
                />
                <button
                    onClick={chatText}
                ><img src={EnvCont} alt="" /></button>
            </div>

        </div>
    )
}

export default ChatBot;