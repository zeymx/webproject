import cheesecake from '../assets/img/Чизкейк.jpg'
import tiramisu from '../assets/img/Тирамису.jpg'
import macarones from '../assets/img/Макаронсы2.jpg'
import ekler from '../assets/img/Эклеры.jpg'

const DesertsCatalog = () => {
    return (
        <section className="items_catalog">
            <h1 hidden>Десерты</h1>
            <ul>
                <li>
                    <h2>Чизкейк</h2>
                    <div className="flex_block">
                        <img src={cheesecake} alt="чизкейк"></img>
                        <p>Нежнейший чизкейк из творожного сыра на сливочно-песочном корже, усыпанный ягодами свежей вишни.</p>
                    </div>
                </li>
                <li>
                    <h2>Тирамису</h2>
                    <div className="flex_block">
                        <img src={tiramisu} alt="тирамису"></img>
                        <p>Знаменитый итальянский десерт «Тирамису» - это мягкий темный бисквит, пропитанный кофейными нюансами и покрытый нежнейшим кремом из творожного сыра.</p>
                    </div>
                </li>
                <li>
                    <h2>Макаронсы</h2>
                    <div className="flex_block">
                        <img src={macarones} alt="макаронсы"></img>
                        <p>Французское миндальное малиновое печенье с начинкой.</p>
                    </div>
                </li>
                <li>
                    <h2>Эклеры</h2>
                    <div className="flex_block">
                        <img src={ekler} alt="эклеры"></img>
                        <p>Пирожное в виде трубочки из заварного теста, покрытой помадкой, с начинкой из сливочно-масляного или заварного крема.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default DesertsCatalog