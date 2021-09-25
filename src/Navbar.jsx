const Navbar= ()=>{
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Movies Rental</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          <a className="nav-link" href="/">Customers</a>
          <a className="nav-link" href="/">Rental</a>
          <a className="nav-link" href="/">Login</a>
        </div>
      </div>
    </div>
  </nav>);
};

export default Navbar;