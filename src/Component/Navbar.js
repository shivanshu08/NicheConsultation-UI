//Import 
import { Component } from 'react'
import logo from './logo.png';
import './NavbarStyles.css'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

//Navbar
class Navbar extends Component {
  state = { clicked: false}
  handleClick  = () =>{
    this.setState({clicked : !this.state.clicked})
  }
  render() {
    return (
      <nav className='NavbarItems'>
        <img src={logo} alt="Logo" className='navbar-logo' />
        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}
                </Link>
              </li>)
          })}
          <button className="button">
            <i className="fas fa-user"></i>LogIn
          </button>
        </ul>
      </nav>
    )
  }
}
export default Navbar
