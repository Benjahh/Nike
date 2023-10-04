const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">
          Experience top notch quality
        </p>
      </div>
      <div className="mt-61 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1"></div>
    </section>
  );
};

export default PopularProducts;
