const Search= (props)=>{
    return <>
        
        <div className="row">
        <p className="">Showing {props.total} movies from the database</p>
          <div className="col-4">
            <div className="input-group flex-nowrap">
              <input
                onChange= {(e)=>{props.updateSearch(e.currentTarget.value)}}
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              
            </div>
            <button type="button" className="btn btn-dark bg-gradient mt-4">New</button>
          </div>
        </div>
    </>
}

export default Search;