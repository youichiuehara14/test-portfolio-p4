import AboutButtons from './AboutButtons';
import aboutDrinkGraphic from '../assets/about-drink-graphic.png';

const About = () => {
  return (
    <section className="flex h-3/4 w-screen items-start justify-center pt-20  text-white ">
      <div className=" flex md:flex-row-reverse flex-col max-w-8/9 items-center gap-10">
        <figure className="flex-1 justify-center md:block">
          <img
            src={aboutDrinkGraphic}
            alt="Cocktail"
            className="mx-auto h-auto object-contain sm:w-[500px]  md:w-[400px] xl:w-[500px]"
          />
        </figure>

        <article className="flex  flex-col gap-4 flex-1 self-start text-center md:text-left">
          <header>
            <h1 className="justify-self-center font-secondary text-4xl sm:text-5xl md:justify-self-start md:text-4xl lg:text-5xl xl:text-7xl">
              About
            </h1>
            <span className="bg-orange-400 inline-block px-5 py-1 ">Y'own Drink</span>
          </header>
          <div>
            <p className=" text-center font-primary lg:text-lg md:text-left md:text-sm">
              Yown Drink is a simple and user-friendly app designed to help you discover and explore
              drink recipes with ease. Whether you're searching for cocktails or non-alcoholic
              beverages, Yown Drink connects you to a vast collection of recipes through a an API.
              it offers a seamless experience for finding and enjoying the perfect drink.Y'own Drink
              reflects a commitment to clean design, efficiency, and user-friendly functionality.
              Want to see more of my work
            </p>
          </div>
          <div>
            <AboutButtons />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
