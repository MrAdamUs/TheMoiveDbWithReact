import React from 'react';
import './SideDrawer.css';


class SideDrawer extends React.Component {
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
        <nav className={`${this.props.show ? 'sideDrawer open' : 'sideDrawer ' }`}>
            <ul>
                 <li onClick={this.ChoesFilter}>Now Playing</li>
                 <li onClick={this.ChoesFilter}>Top Rated</li>
                 <li onClick={this.ChoesFilter}>Popular</li>
            </ul>
        </nav>
     )
   }
  
  
}

export default SideDrawer;