import React from 'react';
import NavBar from './NavBar/NavBar';
import SideDrawer from './SideDrawer/SideDrawer'
import BackDrop from './BackDrop/BackDrop';
import MoviesList from './MoviesList/MoviesList';
import SearchBar from './SearchBar/SearchBar';
import movieDb from '../api/movieDb';
import Pageination from './Pageination/Pageination';
import MovieInfo from './MovieInfo/MovieInfo';




class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sideDrawerOpen: false,
            movies: [],
            totalResults: 0,
            currentPage: 1,
            currentMovie: null
        };
    }

    async componentDidMount() {
        const response= await movieDb.get(
          "/movie/popular"
        );
        this.setState({ movies: response.data.results , totalResults: response.data.total_results});
      }
  
    onTermSubmit = async term => {
      const response = await movieDb.get('/search/movie', {
           params: {
               query: term,   
           }
       });
    
       this.setState({ movies: response.data.results})
    }

    ChoseFilter =  async filter => {
        const response= await movieDb.get(
            `/movie/${filter}`,
          );
          this.setState({ movies: response.data.results , totalResults: response.data.total_results});
    }



    
    NavToggleClick = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backDropClick = () => {
        this.setState({sideDrawerOpen: false})
    };

    nextPage = async (pageNumber) => {
        const response= await movieDb.get("/movie/popular", {
            params: {
                page: pageNumber,    
            }
        }
          );
          this.setState({ movies: response.data.results , currentPage: pageNumber });
    }

    viewMovieInfo = (id) => {
        const filterdMovie = this.state.movies.filter(movie => movie.id === id)

        const newCurrentMovie = filterdMovie.length > 0 ? filterdMovie[0] : null

        this.setState({ currentMovie: newCurrentMovie })
    }
    
closeMovieInfo = () => {
    this.setState({ currentMovie: null})
}
    

    render() {
        let backDrop;
        if (this.state.sideDrawerOpen) {
            backDrop = <BackDrop click={this.backDropClick} />
        }
        const numberPages = Math.floor(this.state.totalResults / 20);
        return (
            <div style={{height: '100%'}}>
               <NavBar drawerClic={this.NavToggleClick} ChoesFilter={this.ChoseFilter} />
               <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
               <main style={{margin: '60px auto', maxWidth:'1200px'}}> 
               {this.state.currentMovie === null ?  <div> <SearchBar onFormsSubmit={this.onTermSubmit}  /> <MoviesList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} /></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}
              
              
                
                 {this.state.totalResults > 20 && this.state.currentMovie === null ? <Pageination pages={numberPages}  nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}
               </main>
              
            </div>
        )
    }
}

export default App;