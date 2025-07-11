import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RiHomeSmileLine } from "react-icons/ri";
import { IoDocumentsOutline } from "react-icons/io5";
import { TiFolderOpen } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import {Link} from "react-router-dom";
const Sidebar = () => {
  return (
    <>
    {/* Contenedor Principal */}
      <div className="mainContainer">
        <div className="itemOne">
          {/*Items de la primera parte del sidebar*/}
          <div className="subItemOne">
            {/*Personaje Animado de Yop*/}
            <img src="" alt="AvatarYeniTa" />
          </div>
          <div className="subItemTwo">
            {/*Nombre y apellido*/}
            <h3>Yenifer Tamayo Villa</h3>
            <h5> ~ YeniTa </h5>
          </div>
        </div>
        <div className="itemTwo">
          {/*Items de la segunda parte del sidebar, la lista de enlaces*/}
          <ul className="menu">
            <li><Link to="/"><RiHomeSmileLine /> Inicio</Link></li>
            <li><Link to="/about"><FaRegUser /> Acerca De</Link></li>
            <li><Link to="/certifications"><IoDocumentsOutline /> Certificaciones</Link></li>
            <li><Link to="/proyects"><TiFolderOpen /> Proyectos</Link></li>
            <li><Link to="/contact"><HiOutlineMail /> Contacto</Link></li>
          </ul>
        </div>  
        <div className="itemThree">
          <h5>DERECHOS DE AUTOR © 2025</h5>
          <p>Yenifer Tamayo. Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
