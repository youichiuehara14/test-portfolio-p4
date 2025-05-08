import heroDrinkGraphic from '../assets/hero-drink-graphic.png';

const Hero = () => {
  return (
    <section className="flex h-3/4 w-screen items-start justify-center pt-15 text-white ">
      <div className="flex flex-col md:flex-row max-w-8/9 items-center ">
        <figure className=" flex-1 justify-center md:block pb-5">
          <img
            src={heroDrinkGraphic}
            alt="Cocktail"
            className="mx-auto h-auto object-contain w-[300px] sm:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
          />
        </figure>
        <article className="flex-1 self-start ">
          <header>
            <h1 className="justify-self-center font-tertiary text-4xl sm:text-4xl md:justify-self-start md:text-4xl lg:text-5xl xl:text-6xl">
              MAKE YOUR
            </h1>
            <h2 className="p-[0px] text-center font-secondary text-7xl bg-gradient-to-r  from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br  bg-clip-text text-transparent  sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl ">
              own drink
            </h2>
          </header>
          <p className="mt-4 text-center font-primary lg:text-lg md:text-right md:text-md">
            Discover and explore a vast collection of cocktails, each with a unique recipe and
            ingredient list. Whether you're a seasoned mixologist or just starting to experiment
            with DIY cocktails, our search feature makes it easy to find the perfect drink for any
            occasion.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
