import React from 'react';
import './style.css';
import { IoLogoGithub } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";


export const Redes = () => {
    return (
        <footer id='pe'>
            <br />
            <h3 id='foottexto'>CLIQUE PARA ACESSAR MINHAS REDES!!!</h3>
            <br />
            <div className='icons'>

                <h3>
                    <a href="https://www.instagram.com/j.l.ucas/?next=%2F"><IoLogoInstagram/></a>
                </h3>
                <h3>
                    <a href="https://github.com/JLProdutor"><IoLogoGithub/></a>
                </h3>
                <h3>
                    <a href="https://twitter.com/JlproducoesY"><IoLogoTwitter/></a>
                </h3>
                <h3>
                    <a href="https://youtube.com/channel/UCnOuOxeO2utH_m8MTlpnTSg"><IoLogoYoutube/></a>
                </h3>
            </div>
        </footer>
    )
}

