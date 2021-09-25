import Pagination from "./Pagination";

const Table= (props)=>{

    const allMovies= props.moviesData;
    const currGenre= props.selectedFilter;
    const filtereMovies= allMovies.filter((el)=>{
        if(currGenre==="All Genres") return el;
        else if(el.genre.name === currGenre) return el;
    });
    return <> 
    <div class="row">
          <div class="col-10 table-responsive">
            <table class="table table-striped table-secondary table-hover bg-gradient mt-4">
              <thead class="table-dark">
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
                    filtereMovies.map((el)=>{
                        return <tr key={el._id}>
                            <td>{el.title}</td>
                            <td>{el.genre.name}</td>
                            <td>{el.numberInStock}</td>
                            <td>{el.dailyRentalRate}</td>
                            <td>❤</td>
                            <td><button type="button" class="btn btn-dark bg-gradient">Delete</button></td>
                        </tr>
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
        <Pagination/>
    </>
}

export default Table;