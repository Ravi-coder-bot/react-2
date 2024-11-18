import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>Nidar-Nari</div>
        <ul  className='nav-menu'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Testimonials</li>
            <li className='nav-item'>Organisation</li>
            <li className='nav-item'>About us</li>
            <li className='nav-contact'>Contact us</li>
        </ul>
    </div>
  )
}

export default  Navbar;
