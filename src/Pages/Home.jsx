import Hero from '../Components/Hero';

const Home = () => {
  return(
    <>
      <Hero pagetitle="Welcome to MovieBrowser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            {/* <h3>React 201</h3> */}
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Culpa perferendis unde corrupti numquam alias. 
              Reiciendis, ad illo minima, dicta velit magni, 
              deleniti nisi ab quia rerum dignissimos impedit sequi dolor.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;