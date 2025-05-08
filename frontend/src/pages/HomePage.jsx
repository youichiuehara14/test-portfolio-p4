import Hero from '../components/Hero';
import About from '../components/About';
import RandomCards from '../components/RandomCards';
const HomePage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col   ">
        <div className="">
          <div>
            <Hero />
          </div>
          <div id="aboutSection">
            <About />
          </div>
          <div>
            <RandomCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
