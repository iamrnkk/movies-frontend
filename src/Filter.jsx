const Filter= (props)=>{
    return (
        <div className="col-3">
            <ul className="list-group m-4">
                <li className="list-group-item list-group-item-action list-group-item-dark bg-gradient">All Genres</li>
                {
                    props.genreData.map((el) => {
                        return (<li key= {el._id} className="list-group-item list-group-item-action list-group-item-dark bg-gradient">{el.name}</li>)
                        })
                }
            </ul>
        </div>
    );
}

export default Filter;