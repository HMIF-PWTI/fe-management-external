const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-8 sm:px-12 lg:px-36">
      <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-primary2/10 blur-3xl" />
      <div className="absolute right-20 top-20 h-40 w-40 rounded-full bg-primary2/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 inline-block rounded-full bg-primary2/10 px-5 py-2 text-sm font-semibold text-primary2">
          Merchandise Resmi HMIF
        </p>

        <h1 className="text-4xl font-extrabold italic tracking-wide text-primary2 sm:text-5xl lg:text-6xl">
          LAPAK KWU
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
          Temukan produk dan merchandise HMIF UNIKOM 
        </p>
      </div>
    </section>
  );
};

export default HeroSection;