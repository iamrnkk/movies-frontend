import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Login from "./Login";
import Rentals from "./Rentals";
import Customers from "./Customers";

class App extends React.Component {

  state= {
    movies:[],
    genre:[],
    selectedFilter: "All Genres",
    search: "",
    total: 9
  };

  setFilter= (filter)=>{
    this.setState({selectedFilter:filter});
    let t=0;
    for(let movie of this.state.movies)
    {
      if(movie.genre.name === filter) t+=1;
    }
    if(filter=== "All Genres") t= this.state.movies.length;
    
    this.setState({total: t});
  };

  changeText= (moviesData)=>{
    this.setState({movies: moviesData});
  };

  toggleLike=(id)=>{
    const currMoviesArr= this.state.movies;
    const idx= currMoviesArr.findIndex((e)=>e._id === id);
    currMoviesArr[idx].liked=(currMoviesArr[idx].liked)? false:true;

    this.setState({movies: currMoviesArr});
  };

  deleteMovie= (id)=>{
    const newMovies= this.state.movies.filter((el)=>el._id!==id);
    this.setState({movies: newMovies});
    this.setFilter(this.state.selectedFilter);
  };
  
  updateSearch= (s)=>{
    this.setState({search: s});
  }
  componentDidMount(){
    const f= async ()=>{
      let responseGenre = await fetch("http://localhost:4000/genre");
      let responseMovies = await fetch("http://localhost:4000/movies");
      let moviesJson = await responseMovies.json();
      let genreJson = await responseGenre.json();

      this.setState({
        movies: moviesJson,
        genre: genreJson,
      });
    }

    f();
  }

  render (){
    return (
      <Router>
        <div>
            <Navbar />
            <Switch>
              <Route path="/rentals"> <Rentals/> </Route>
              <Route path="/customers"> <Customers/></Route>
              <Route path="/login"> <Login /> </Route>
              <Route path="/">
                <div className="row">
                  <Filter handleFilter= {this.setFilter}  selectedFilter={this.state.selectedFilter} genreData= {this.state.genre}/>
                  <div className="col-9 p-4">
                    <Search updateSearch={this.updateSearch} total= {this.state.total}/>
                    <Table changeText= {this.changeText}search={this.state.search} deleteMovie= {this.deleteMovie} toggleLike={this.toggleLike} moviesData= {this.state.movies} selectedFilter={this.state.selectedFilter} />
                  </div>
                </div>
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
