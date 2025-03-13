
import OrderDetails from './components/OrderDetails/OrderDetails'
import instagramIcon from './assets/images/logo/instagram.png'
import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='container'>
      <Header/>
      <OrderDetails />
      <footer id='footer'>
        <p>контакты разработчика</p>
        <a href="https://www.instagram.com/ada__zub/">
          <img src={instagramIcon} alt="instagramIcon" />
        </a>
      </footer>
      <a href="#footer" id='scrollDown'>перейти к заказу</a>
    </div>
  )
}

export default App