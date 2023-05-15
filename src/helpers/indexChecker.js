export const indexChecker = (checkName) => {
  return journeyData.findIndex((i) => i.name === checkName) % 2 === 0;
};
