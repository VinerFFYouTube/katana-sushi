
import OrderDetails from './components/OrderDetails/OrderDetails'
import instagramIcon from './assets/images/logo/instagram.png'
import './App.css'

function App() {

  return (
    <div className='container'>
      <OrderDetails />
      <footer>
        <p>контакты разработчика</p>
        <a href="https://www.instagram.com/ada__zub/">
          <img src={instagramIcon} alt="instagramIcon" />
        </a>
      </footer>
    </div>
  )
}

export default App