const Pagination= (props)=>{

    let arr=[]
    for(let i=1; i<=props.numberOfPages; i++) arr.push(i);
    return <nav>
    <ul className="pagination mt-4">
      {
         arr.map((e)=>{ return <li key= {e} className="page-item" ><a onClick={()=>{props.selectPage(e)}} className={`page-link list-group-item list-group-item-dark ${props.currPage===e? "bg-light":""}`} href="/#">{e}</a></li>})
      }
    </ul>
  </nav>
}

export default Pagination;