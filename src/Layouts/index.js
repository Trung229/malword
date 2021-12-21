import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const data = []

function Layout() {
    for(var i = 0; i < 50; i++) {
        data.push(i)
    }
    return (
        <div>
            <Header />
            {data.map((item,index) =>{
                return <div key={index}>{item}</div>
            })}
            <Footer />
        </div>
    )
}

export default Layout;