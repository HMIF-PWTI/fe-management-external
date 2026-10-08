import DeveloperCard from "@/components/Developers/DeveloperCard";
import { developers } from "@/data/developers";
import { Helmet } from "react-helmet-async";

const DevelopersPage = () => {
  return (
    <>
      <Helmet>
        <title>Developers | HMIF UNIKOM</title>
        <meta
          name="description"
          content="Tim pengembang di balik website resmi HMIF UNIKOM."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary1/10 via-white to-white">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-primary1/10 blur-3xl" />
        <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-primary2/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:px-8">
          <header className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex rounded-full bg-primary2/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary2 sm:text-sm">
              Our Team
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-primary2 sm:text-4xl lg:text-5xl">
              Meet The Developers
            </h1>
            <p className="mt-4 text-base font-medium text-gray-600 sm:text-lg">
              Orang-orang di balik pengembangan website HMIF UNIKOM
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Website HMIF UNIKOM dikembangkan sebagai media informasi,
              dokumentasi, dan layanan digital bagi mahasiswa Informatika
              UNIKOM. Berikut adalah orang-orang yang berkontribusi dalam
              pengembangannya.
            </p>
          </header>

          <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {developers.map((developer) => (
              <DeveloperCard key={developer.id} developer={developer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DevelopersPage;
