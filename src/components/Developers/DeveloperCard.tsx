import type { Developer } from "@/data/developers";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import type { IconType } from "react-icons";

interface DeveloperCardProps {
  developer: Developer;
}

interface SocialLink {
  label: string;
  url?: string;
  icon: IconType;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const DeveloperCard = ({ developer }: DeveloperCardProps) => {
  const socialLinks: SocialLink[] = [
    { label: "GitHub", url: developer.github, icon: FaGithub },
    { label: "LinkedIn", url: developer.linkedin, icon: FaLinkedinIn },
    { label: "Instagram", url: developer.instagram, icon: FaInstagram },
  ];

  const availableSocialLinks = socialLinks.filter((social) => social.url);

  return (
    <article className="group overflow-hidden rounded-2xl border border-primary2/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-40 overflow-hidden bg-slate-200 sm:h-48">
        {developer.cover ? (
          <img
            src={developer.cover}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-100 via-primary1/20 to-slate-300" />
        )}
      </div>

      <div className="relative px-5 pb-6 pt-16 sm:px-7 sm:pb-7 sm:pt-20">
        <div className="absolute -top-14 left-5 z-10 h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-primary2 shadow-md sm:-top-[70px] sm:left-7 sm:h-[140px] sm:w-[140px]">
          {developer.photo ? (
            <img
              src={developer.photo}
              alt={`Foto profil ${developer.name}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary2 to-primary1 text-3xl font-bold tracking-wide text-white sm:text-4xl"
              aria-label={`Inisial ${developer.name}`}
            >
              {getInitials(developer.name)}
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="break-words text-xl font-bold text-gray-900 md:text-2xl">
            {developer.name}
          </h2>
          {developer.pronouns && (
            <span className="text-sm font-normal text-gray-500">
              {developer.pronouns}
            </span>
          )}
        </div>

        {developer.study && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {developer.study}
          </p>
        )}

        <span className="mt-4 inline-flex rounded-full bg-primary2/10 px-3 py-1 text-xs font-semibold text-primary2">
          {developer.role}
        </span>

        {availableSocialLinks.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-5">
            {availableSocialLinks.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} ${developer.name}`}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary2/10 text-lg text-gray-600 transition duration-300 hover:-translate-y-1 hover:border-primary1 hover:bg-primary1/10 hover:text-primary2"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default DeveloperCard;
