import developer2Cover from "@/assets/developers/developer-2-cover.svg";
import developer2Photo from "@/assets/developers/developer-2.svg";
import vincentCover from "@/assets/developers/vincent-cover.svg";
import vincentPhoto from "@/assets/developers/vincent.jpg";

export interface Developer {
  id: number;
  name: string;
  pronouns?: string;
  study?: string;
  role: string;
  photo: string;
  cover: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export const developers: Developer[] = [
  
  {
    id: 1,
    name: "Vincent Luhulima",
    pronouns: "He/Him",
    study: "Informatics Engineering ",
    role: "Full Stack Developer",
    photo: "https://res.cloudinary.com/dsmdlalkz/image/upload/v1787312095/Vincent_PWTI4_wzycsi.jpg",
    cover: "https://res.cloudinary.com/dsmdlalkz/image/upload/v1787314636/Desain_tanpa_judul_epla7l.png",
    github: "https://github.com/Vincent1920",
    linkedin: "https://www.linkedin.com/in/vincent-luhulima/",
    instagram: "https://www.instagram.com/vincent_6010/",
  },
  {
    id: 2,
    name: "Nama Developer 2",
    pronouns: "He/Him",
    study: "Informatics Engineering Student",
    role: "Frontend Developer",
    photo: developer2Photo,
    cover: developer2Cover,
    github: "",
    linkedin: "",
    instagram: "",
  },

];
