import Header from './Header.tsx'
import DesertsCatalog from './DesertsCatalog.tsx'

const Deserts = () => {
    return (
        <body>
            <div className="container">
                <h1 hidden>Магазин кондитерской продукции Cake&Pie</h1>
                <Header />
                <DesertsCatalog />
            </div>
        </body>
    )
}

export default Deserts