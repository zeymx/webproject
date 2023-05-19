import equipment from '../assets/img/Оборудование.jpg'
import product_range from '../assets/img/Макаронсы.jpg'

const Content = () => {
    return (
        <section className="content">
            <p className="title">Самые сладкие десерты!</p>
            <div className="new_level">
                <h2 hidden>Мы используем самое новое оборудование</h2>
                <div className="content_text">
                    <p>
                        Кондитерская <strong>"Cake & Pie"</strong>,<br></br>вышла на новый уровень.
                    </p>
                    <p>
                        На наших кухнях постоянно обновляется<br></br> материально-техническая база<br></br>и улучшаются условия труда.  
                    </p>
                </div>
                <img src={equipment} alt="новое оборудование"></img>
            </div>
            <div className="catalog">
                <h2 hidden>У нас богатый ассортимент продукции</h2>
                <img src={product_range} alt="продаем хлебушек"></img>
                <div className="content_text">
                    <p>
                        Ассортимент нашей продукции включает в себя самые разные и интересные изделия. Они изготавливаются из натуральных продуктов с приминением современных технологии.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Content