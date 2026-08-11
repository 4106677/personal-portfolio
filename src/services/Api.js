import axios from "axios";
import { projectsData } from "./buckupData";
import Vitalii_Kablukov from '../assets/photos/Vitalii_Kablukov.jpeg'
import Kateryna_Ostrynska from '../assets/photos/Kateryna_Ostrynska.jpeg'
import Anna_Zauholnikova from '../assets/photos/Anna_Zauholnikova.png'
import Oleksandr_Pavlov from '../assets/photos/Oleksandr_Pavlov.png'
import Den_Belo from '../assets/photos/Den_Belo.jpeg'
import Tanya_Yatsukhnenko from '../assets/photos/Tanya_Yatsukhnenko.jpeg'
import Tymur_Arabadzhy from '../assets/photos/Tymur_Arabadzhy.jpeg'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getProjects = () =>
  axios
    .get()
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e.message);
      return projectsData;
    });

const skillsList = [
  { type: "front", name: "HTML", level: "Intermediate" },
  { type: "front", name: "CSS", level: "Intermediate" },
  { type: "front", name: "JavaScript", level: "Intermediate" },
  { type: "front", name: "React", level: "Intermediate" },
  { type: "front", name: "TypeScript", level: "Beginner" },
  { type: "front", name: "ReactNative", level: "Basic" },

  { type: "back", name: "Node Js", level: "Basic" },
  { type: "back", name: "Firebase", level: "Basic" },
  { type: "back", name: "MongoDB", level: "Intermediate" },
  { type: "back", name: "Docker", level: "Beginner" },

  { type: "added", name: "Next Js", level: "Basic" },
  { type: "added", name: "Postman", level: "Basic" },
];

export const reviews = [
  {
    id: 2,
    image: Oleksandr_Pavlov,
    title: "Oleksandr Pavlov",
    description:
      "We worked with Yaroslav on few team projects during studying at GoIT. Yaroslav is a strong team player, responsible person and effective developer. You can always be sure that if some task was given to him — it will be done. Only positive impressions from cooperation. Good luck!",
  }, {
    id: 3,
    image: Tanya_Yatsukhnenko,
    title: "Tanya Yatsukhnenko",
    description:
      "Yaroslav is a highly skilled JavaScript developer with extensive experience in building robust web applications. Their proficiency in JavaScript and related frameworks has been instrumental in the success of multiple projects. Yaroslav consistently delivers high-quality code, meets deadlines, and effectively collaborates with team members. Their problem-solving abilities and attention to detail make them a valuable asset to any development team. I highly recommend Yaroslav for any project requiring exceptional JavaScript development skills."  }, {
    id: 4,
    image: Tymur_Arabadzhy,
    title: "Tymur Arabadzhy",
    description:
      "Профессионал!!!" },
  {
    id: 5,
    image: Den_Belo,
    title: "Денис Белостоцкий",
    description:
      "Yaroslav is an exceptional JavaScript developer with extensive experience in building high-quality web applications. They deliver clean, efficient code and consistently meet deadlines. Their strong problem-solving skills and ability to collaborate effectively with team members make them a valuable asset to any project. Highly recommended for their expertise and professionalism."  },
  {
    id: 5,
    image: Vitalii_Kablukov,
    title: "Vitalii Kablukov",
    description:
        "In the team, Yaroslav showed very cool skills as a Team-leader and incredible work in the team. this man have a good potential.",
  },
  {
    id: 6,
    image: Kateryna_Ostrynska,
    title: "Kateryna Ostrynska",
    description:
        "With Yaroslav we have worked together on a project, and I found him a highly skilled and dedicated professional. As team leader he was very responsible and orginized. His expertise in the field of IT developing and his leadership has helped our team to get a great result. I highly recommend him to anyone looking for help on their team or project.",
  },
  {
    id: 7,
    image: Anna_Zauholnikova,
    title: "Anna Zauholnikova",
    description:
        "Yaroslav Oliinyk works well in a team, communicates easily with colleagues. Also during the Fullstack Developer course he showed himself in the best way as a team leader on team projects. Actively helped the team with solving any problem in the application code or technical problems on the project. Yaroslav is responsible, attentive to details and proactive.",
  },
];

export const getSkills = (type) => {
  return skillsList.filter((i) => i.type === type);
};
