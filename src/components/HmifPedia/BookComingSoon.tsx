const PageLines = ({ muted = false }: { muted?: boolean }) => (
  <div
    className={`hmif-book-lines${muted ? " hmif-book-lines-muted" : ""}`}
    aria-hidden="true"
  >
    <span />
    <span />
    <span />
    <span />
  </div>
);

const BookComingSoon = () => {
  return (
    <div className="text-center">
      <div
        className="hmif-book-scene mx-auto"
        role="img"
        aria-label="Ilustrasi buku terbuka"
      >
        <div className="hmif-book-static">
          <div className="hmif-book-cover" aria-hidden="true" />
          <div className="hmif-book">
            <div className="hmif-book-stack hmif-book-stack-left" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hmif-book-stack hmif-book-stack-right" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hmif-book-page hmif-book-page-left">
              <PageLines />
            </div>
            <div className="hmif-book-page hmif-book-page-right">
              <PageLines />
            </div>
            <div className="hmif-book-spine" aria-hidden="true" />
          </div>
        </div>
        <div className="hmif-book-shadow" aria-hidden="true" />
      </div>

      <h1 className="mt-8 text-2xl font-bold tracking-wide text-primary2 sm:text-3xl">
        HMIF-PEDIA
      </h1>
      <p className="mt-3 text-sm text-gray-500 sm:text-base">
        Konten HMIF-PEDIA akan segera hadir.
      </p>
    </div>
  );
};

export default BookComingSoon;
