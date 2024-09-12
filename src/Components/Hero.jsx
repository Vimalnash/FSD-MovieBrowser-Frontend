
const Hero = ( {pagetitle, backdropurl} ) => {
    return (
      <header className = "bg-dark bg-gradient text-white p-4 hero-container">
        <h1 className="hero-text"> {pagetitle} </h1>
        <div className="titlebackdropimage" style={{backgroundImage: `url(${backdropurl})`}}></div>
      </header>
    )
  }

  export default Hero;