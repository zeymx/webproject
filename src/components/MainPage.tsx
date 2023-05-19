import Header from './Header.tsx'
import Content from './Content.tsx'
import Benefits from './Benefits.tsx'
import News from './News.tsx'
import Order from './Order.tsx'

const MainPage = () => {
    return (
        <body>
            <div className="container">
                <h1 hidden>Магазин кондитерской продукции Cake&Pie</h1>
                <Header />
                <Content />
                <Benefits />
                <News />
                <Order />
            </div>
        </body>
    )
}

export default MainPage