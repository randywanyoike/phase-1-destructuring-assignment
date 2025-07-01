const farmAnimals = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};
const { moo, neigh, baa, oink, cluck } = farmAnimals;

const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};
const { bessie, dolly, babe, little } = animalNames;

const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
const { blackAndWhite, black, pink } = animalColors;

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, i, v] = colors;
const [, , , , , indg] = colors;

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};
const { muppetName, color, song, job, partner } = muppet;

const kermit = {
  song1: "The Rainbow Connection",
  song2: "Moving Right Along",
  song3: "Bein' Green",
  song4: "I Hope That Something Better Comes Along",
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};
const { song2, song4, job: kJob, partner: kPartner } = kermit;
const { job: nestedJob, partner: nestedPartner } = kermit;
