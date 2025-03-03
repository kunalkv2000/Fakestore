import { Link, NavLink, useNavigate } from 'react-router-dom'
import CartModal from '../cart/CartModal'

const Header = () => {
  const token = localStorage.getItem('token')
  const router = useNavigate()

  return (
    <header className="flex justify-between items-center px-14 md-auto py-3 sticky top-0 z-10 bg-black-5 dark:bg-white-10  ">
      <div>
        <img src='https://github.com/kunalkv2000/Fakestore/blob/main/src/assets/logo.png' className='w-auto h-10'/>
      </div>
      <div className="space-x-4">
        <CartModal />
      </div>
    </header>
  )
}

export default Header
