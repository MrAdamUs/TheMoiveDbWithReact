import React from 'react';
import './NavBar.css';
import NavToggleButton from '../NavToggleButton/NavToggleButton';




class NavBar extends React.Component {
    state = {
        filter: ''
    }

    ChoesFilter = (e) => {
        let status = ''
      if (e.target.innerHTML === 'Now Playing') {
          this.setState({ filter: 'now_playing' })
          status = 'now_playing' 
      }
      if (e.target.innerHTML === 'Top Rated') {
        this.setState({ filter: 'top_rated' })
        status = 'top_rated'
      }
      if (e.target.innerHTML === 'Popular') {
        this.setState({ filter: 'popular' })
        status = 'popular'
      }

      this.props.ChoesFilter(status)
   }


 render() {
    return (
        <header className="navBar">
            <nav className="navBar__nav">
                <div className="navBar__toggleButton"><NavToggleButton  click={this.props.drawerClic}/></div>
                <div className="navBar__logo"><a href="/">Logo</a></div>
                <div className="speacer"></div>
                <div className="navBar__navItems">
                    <ul>
                        <li onClick={this.ChoesFilter}>Now Playing</li>
                        <li onClick={this.ChoesFilter}>Top Rated</li>
                        <li onClick={this.ChoesFilter}>Popular</li>
                    </ul>
                  
                </div>
            </nav>
        </header>
    )
 }
   
}

export default NavBar;