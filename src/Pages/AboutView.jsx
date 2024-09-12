import Hero from '../Components/Hero';

const AboutView = () => {
    return (
        <>
            <Hero pagetitle="Know About Us" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. 
                            Adipisci, cupiditate assumenda! Aliquid, doloremque? 
                            Eum a magni perferendis deserunt suscipit? 
                            Repellendus harum, 
                            in laudantium reprehenderit cum rerum officiis voluptates animi iste!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutView;