import { Link } from "react-router-dom";
import heading from '../assets/img/Заставка.jpg'

const Header = () => {
    return (
        <header>
            <div className="logo_text">
                <Link to='/'><p className="logo"></p><strong>Cake & Pie</strong></Link>
                <p> Создавая свою продукцию, <br></br> мы заботимся о вашем <br></br> настроении! <br></br> Наш адрес: г. Н. Новгород, <br></br> ул. Любимая, 1</p>
            </div>
            <nav>
                <ul className="menu">
                    <li><Link to='/cakes/'>Торты</Link></li>
                    <li><Link to='/deserts/'>Десерты</Link></li>
                </ul>
            </nav>
            <img className="header_banner" src={heading} alt="хлебушек"></img>
        </header>
    )
}

export default Header