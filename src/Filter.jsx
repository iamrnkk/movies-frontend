
const Filter= (props)=>{    
    return (
        <div className="col-3">
            <ul className="list-group m-4">
                <li className= {`list-group-item list-group-item-action list-group-item-dark bg-gradient ${props.selectedFilter === "All Genres" ? "active" : "" }`}
                onClick={(e)=>{ props.handleFilter("All Genres");}}>
                All Genres
                </li>
                {
                    props.genreData.map((el) => {
                        return (<li key= {el._id}
                        onClick={(e)=>{ props.handleFilter( el.name );}} 
                        className={`list-group-item list-group-item-action list-group-item-dark bg-gradient ${props.selectedFilter === el.name ? "active" : "" }`}>{el.name}</li>)
                    })
                }
            </ul>
        </div>
    );
    
}

export default Filter;