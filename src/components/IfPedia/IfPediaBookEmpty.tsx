import React from "react";

interface IfPediaBookEmptyProps {
  title?: string;
  subtitle?: string;
}

const PageLines = () => (
  <div className="ifpedia-page-content" aria-hidden="true">
    <div className="ifpedia-line ifpedia-line-title" />
    <div className="ifpedia-line ifpedia-line-full" />
    <div className="ifpedia-line ifpedia-line-long" />
    <div className="ifpedia-line ifpedia-line-short" />
  </div>
);

const IfPediaBookEmpty: React.FC<IfPediaBookEmptyProps> = ({
  title = "IF-Pedia Belum Tersedia",
  subtitle = "Buku panduan IF-PEDIA saat ini belum tersedia.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* 3D Static Top-Down Open Book */}
      <div className="py-6">
        <div
          className="ifpedia-book-scene mx-auto"
          role="img"
          aria-label="Ilustrasi buku terbuka hitam putih tampak atas"
        >
          {/* Static Book Body (3D Perspective) */}
          <div className="ifpedia-book-static">
            {/* Hardcover Base */}
            <div className="ifpedia-book-cover" aria-hidden="true">
              <div className="ifpedia-book-cover-spine" />
            </div>

            {/* Book Body (Page Stacks & Base Pages) */}
            <div className="ifpedia-book">
              {/* Stack thickness underneath */}
              <div
                className="ifpedia-book-stack ifpedia-book-stack-left"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>
              <div
                className="ifpedia-book-stack ifpedia-book-stack-right"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>

              {/* Base Left Open Page */}
              <div className="ifpedia-book-page ifpedia-book-page-left">
                <PageLines />
              </div>

              {/* Base Right Open Page */}
              <div className="ifpedia-book-page ifpedia-book-page-right">
                <PageLines />
              </div>

              {/* Center spine groove */}
              <div className="ifpedia-book-spine" aria-hidden="true" />
            </div>
          </div>

          {/* Soft Ground Shadow */}
          <div className="ifpedia-book-shadow" aria-hidden="true" />
        </div>
      </div>

      {/* Title & Description */}
      <h2 className="mt-6 text-2xl font-bold tracking-tight text-primary2 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-gray-500 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default IfPediaBookEmpty;
