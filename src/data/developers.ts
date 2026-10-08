export interface Developer {
  id: number;
  name: string;
  pronouns?: string;
  study?: string;
  role: string;
  photo: string;
  cover?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export const developers: Developer[] = [
  {
    id: 1,
    name: "Vincent Luhulima",
    pronouns: "He/Him",
    study: "Informatics Engineering",
    role: "Full Stack Developer",
    photo: "https://res.cloudinary.com/dsmdlalkz/image/upload/v1787312095/Vincent_PWTI4_wzycsi.jpg",
    cover: "https://res.cloudinary.com/dsmdlalkz/image/upload/v1787314636/Desain_tanpa_judul_epla7l.png",
    github: "https://github.com/Vincent1920",
    linkedin: "https://www.linkedin.com/in/vincent-luhulima/",
    instagram: "https://www.instagram.com/vincent_6010/",
  },
  {
    id: 2,
    name: "Muhammad Irsyaad Fatahillah",
    pronouns: "He/Him",
    study: "Informatics Engineering",
    role: "Project Manager",
    photo: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746457145/Icad_fbjvwn.jpg",
    cover: "",
    github: "https://github.com/irsyaad06",
  },
  {
    id: 3,
    name: "Rifqi Muhammad Hamzah",
    pronouns: "He/Him",
    study: "Informatics Engineering",
    role: "Frontend Developer",
    photo: "https://res.cloudinary.com/dalqxae3w/image/upload/v1746457344/Rifqi_exyrc5.jpg",
    cover: "",
    github: "https://github.com/Rifqi1012",
  },
  {
    id: 4,
    name: "Muhamad Rizki Fadilah",
    pronouns: "He/Him",
    study: "Informatics Engineering",
    role: "Backend Developer",
    photo: "https://res.cloudinary.com/dsmdlalkz/image/upload/v1777124106/Muhamad_Rizki_Fadilah_hxexlh.png",
    cover: "",
    github: "https://github.com/rizkiiiiii",
  },
  {
    id: 5,
    name: "Jorge Fielnero Sauman",
    pronouns: "He/Him",
    study: "Informatics Engineering",
    role: "Frontend Developer",
    photo: "https://res.cloudinary.com/dsmdlalkz/image/upload/v1777124106/Jorge_Fielnero_Sauman_dmjxcr.png",
    cover: "",
    github: "https://github.com/nasipadangjorgefiel",
  },
];
