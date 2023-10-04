import { useState } from 'react';
import { arrowRight } from '../assets/icons';

import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { statistics, shoes } from '../constants';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState();
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
          <span className="text-coral-red inline-block mt-3">Nike </span>
        </h1>
        Shoes
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap mt-20 w-full gap-16 ">
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-hero bg-center bg-cover xl:min-h-screen ">
        <img
          src={bigShoeImg}
          className="object-contain relative z-10 "
          width={610}
          height={500}
          alt="shoe colection"
        />
        <div className="flex flex-row sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
