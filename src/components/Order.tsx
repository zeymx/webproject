import cake from '../assets/img/cake.jpg'

const News = () => {
    return (
        <section className="order"> 
            <p className="order_title">Вы можете заказать у нас <br></br> продукцию для дома и <br></br> для праздников </p>
            <img src={cake} alt="большой торт"></img>
            <p className="order_number">
                <a>Телефон для заказа <br></br> +7(999) 999-99-99</a>
            </p>
        </section>
    )
}

export default News