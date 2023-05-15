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

export const getSkills = (type) => {
  return skillsList.filter((i) => i.type === type);
};
