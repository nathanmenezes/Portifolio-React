import React from 'react';
import "./Nav.css"
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from "../../images/Nav-Logo.png"

function Nav() {

    function resposiveActive(){
        document.getElementById("itens").classList.toggle("active");
        document.getElementById("bars").style.display = "none";
    }

    function resposiveDesactive(){
        document.getElementById("itens").classList.toggle("active");
        document.getElementById("bars").style.display = "block";
    }


    return (
        <nav>
            <img src={Logo} alt="Logo Nathan" />
            <i id='bars' onClick={resposiveActive}><FaBars /></i>
            <div className="nav-itens" id='itens'>
            <i id='close' onClick={resposiveDesactive}><AiOutlineClose /></i>
                <a href="">inicio</a>
                <a href="">projetos</a>
                <a href="">sobre mim</a>
                <a href="">contatos</a>
                <a>PT-BR</a>
            </div>
        </nav>
    );
}

export default Nav;