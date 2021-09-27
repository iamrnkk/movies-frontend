import React from "react";
import Pagination from "./Pagination";

class Table extends React.Component{

    state={
        currPage: 1,
        movies: this.props.moviesData
    };

    selectPage=(page)=>{
        this.setState({currPage:page});
    }
    render(){
        const allMovies= this.props.moviesData;
        const currGenre= this.props.selectedFilter;
        let filteredMovies= allMovies.filter((el)=>{
            if(currGenre==="All Genres" || el.genre.name === currGenre ) return true;
            return false;
        });

        filteredMovies= filteredMovies.filter((el)=>{
            let currMovie= el.title.toLowerCase();
            let match= this.props.search.toLowerCase();
            return currMovie.includes(match);
        });

        const startIdx= (this.state.currPage-1)*4;
        const endIdx= Math.min(filteredMovies.length, this.state.currPage*4);
        const numberOfPages= Math.ceil(filteredMovies.length/4);
        const tableToBeShown= filteredMovies.slice(startIdx,endIdx);

        return <> 
        <div className="row">
            <div className="col-10 table-responsive">
                <table className="table table-striped table-secondary table-hover bg-gradient mt-4">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableToBeShown.map((el)=>{
                            return <tr key={el._id}>
                                <td>{el.title}</td>
                                <td>{el.genre.name}</td>
                                <td>{el.numberInStock}</td>
                                <td>{el.dailyRentalRate}</td>
                                <td><span onClick={()=>{this.props.toggleLike(el._id)}} className="material-icons">{(el.liked)? "favorite" : "favorite_border"}</span></td>
                                <td><button onClick={()=>{this.props.deleteMovie(el._id)}} type="button" className="btn btn-dark bg-gradient">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
                </table>
            </div>
            </div>
            <Pagination selectPage={this.selectPage} currPage={this.state.currPage} numberOfPages= {numberOfPages}/>
        </>
    }
}

export default Table;