import seafront from '../assets/img/Набережная.jpg'

const News = () => {
    return (
        <section className="news">
            <p className="title">Последние новости</p>
            <article className="news_block">
                <img src={seafront} alt="новость"></img>
                <div className="news_text">
                    <h1>Открытие нового филиала на<br></br>Нижне-Волжской Набережной</h1>
                    <p>В рамках расширения сети кондитерских, было принято решение открыть новую кондитерскую лавку в одном из самых популярных мест в Нижнем Новгороде!<br></br><strong>С нетерпением ждём новых клиентов!</strong></p>
                </div>
            </article>
        </section>
    )
}

export default News