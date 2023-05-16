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
    id: 1,
    image:
      "https://media.licdn.com/dms/image/D4D03AQHporvnMNWd2A/profile-displayphoto-shrink_100_100/0/1671054533515?e=1689811200&v=beta&t=9rOCaawYF3TiN1ukOIiv34k1j776rlAG3WiksxYl6mA",
    title: "Vitalii Kablukov",
    description:
      "In the team, Yaroslav showed very cool skills as a Team-leader and incredible work in the team. this man have a good potential.",
  },
  {
    id: 2,
    image:
      "https://media.licdn.com/dms/image/D4E03AQE5jJa0cc8nrQ/profile-displayphoto-shrink_100_100/0/1674112151213?e=1689811200&v=beta&t=zAyO2ofwV9w23Nlv87vtGD4Lvo4lCvs2h6FxOeIsDoQ",
    title: "Kateryna Kononenko",
    description:
      "With Yaroslav we have worked together on a project, and I found him a highly skilled and dedicated professional. As team leader he was very responsible and orginized. His expertise in the field of IT developing and his leadership has helped our team to get a great result. I highly recommend him to anyone looking for help on their team or project.",
  },
  {
    id: 3,
    image:
      "https://media.licdn.com/dms/image/D4D03AQGXA2-dWKh9gw/profile-displayphoto-shrink_100_100/0/1673722147830?e=1689811200&v=beta&t=Bu6_zwvFMs6UW0HdoNfN7KKxpNkIvxUD_-DXYAGsEv8",
    title: "Anna Zauholnikov",
    description:
      "Yaroslav Oliinyk works well in a team, communicates easily with colleagues. Also during the Fullstack Developer course he showed himself in the best way as a team leader on team projects. Actively helped the team with solving any problem in the application code or technical problems on the project. Yaroslav is responsible, attentive to details and proactive.",
  },
  {
    id: 4,
    image:
      "https://media.licdn.com/dms/image/C4D03AQGMIwJv00NR2g/profile-displayphoto-shrink_100_100/0/1651482629087?e=1689811200&v=beta&t=GP5dIWFYo7gsPoZmfehygspcchJukRU_KdbvRGX5Bd0",
    title: "Oleksandr Pavlov",
    description:
      "We worked with Yaroslav on few team projects during studying at GoIT. Yaroslav is a strong team player, responsible person and effective developer. You can always be sure that if some task was given to him — it will be done. Only positive impressions from cooperation. Good luck!",
  },
];

export const getSkills = (type) => {
  return skillsList.filter((i) => i.type === type);
};
