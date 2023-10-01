import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full p-2 flex xl:flex-row flex-col min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collectionn
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 r-10">
            The New Arrival
          </span>
          <br />
          <span>Nike Shoes</span>
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap mt-20 w-full gap-16 ">
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p>{stats.value}</p>
              <p>{stats.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
