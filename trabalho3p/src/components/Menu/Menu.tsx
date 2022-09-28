import { Link } from "react-router-dom";
import './style.css';
import img from "../../img/s.png"
export const Menu = () => {
    return (
        <header id="cabeca">
            <div className="logo">
                <img src={img} alt="" />
                <h1 className="title">MAGGOTS</h1>
            </div>
            <nav className="Menu">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/sobre'>Sobre</Link>
                        <Link to='/contatos'>Contatos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
