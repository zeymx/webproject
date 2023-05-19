import Header from './Header.tsx'
import CakesCatalog from './CakesCatalog.tsx'

const MainPage = () => {
    return (
        <body>
            <div className="container">
                <h1 hidden>Магазин кондитерской продукции Cake&Pie</h1>
                <Header />
                <CakesCatalog />
            </div>
        </body>
    )
}

export default MainPage