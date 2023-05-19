import heading from '../assets/img/Заставка.jpg'

const Header = () => {
    return (
        <header>
            <div className="logo_text">
                <a href="index.html"><p className="logo"></p><strong>Cake & Pie</strong></a>
                <p> Создавая свою продукцию, <br></br> мы заботимся о вашем <br></br> настроении! <br></br> Наш адрес: г. Н. Новгород, <br></br> ул. Любимая, 1</p>
            </div>
            <nav>
                <ul className="menu">
                    <li> <a href="cakes.html">Торты</a></li>
                    <li> <a href="deserts.html">Десерты</a></li>
                </ul>
            </nav>
            <img className="header_banner" src={heading} alt="хлебушек"></img>
        </header>
    )
}

export default Header