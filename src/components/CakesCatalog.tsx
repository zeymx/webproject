import medovik from '../assets/img/Медовик.jpg'
import wednesday from '../assets/img/Вэнсдэй.jpg'
import ulibka from '../assets/img/ВесёлаяУлыбка.jpg'

const CakesCatalog = () => {
    return (
        <section className="items_catalog">
            <h1 hidden>Торты</h1>
            <ul>
                <li>
                    <h2>Медовик</h2>
                    <div className="flex_block">
                        <img src={medovik} alt="торт медовик"></img>
                        <p>Самый вкусный и любимый торт "Медовый пух" или "Медовик"! Нежные, тающие во рту медовые коржи, пропитанные воздушным заварным кремом, - незабываемый вкус детства! Медовый торт получается о-очень вкусным, нежным, воздушным и пушистым!</p>
                    </div>
                </li>
                <li>
                    <h2>Вэнсдэй</h2>
                    <div className="flex_block">
                        <img src={wednesday} alt="торт вэнсдэй"></img>
                        <p>Бисквит, пропитанный черничным соком. Вкус: легкий, черничный, похожий на черничное мороженное. Размер торта: Средний. Тип торта: Бисквитный, Черничный. Форма: Круглый.</p>
                    </div>
                </li>
                <li>
                    <h2>Весёлая улыбка</h2>
                    <div className="flex_block">
                        <img src={ulibka} alt="торт весёлая улыбка"></img>
                        <p>Торт Веселая улыбка на заказ. Размер торта: Маленький. Тип торта: Бисквитный, Сливочный. Форма: Круглый, декор выполнен из сливок с добавлением пищевого красителя.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default CakesCatalog