import { inspirationalGreetings } from "./greetings.js";

export const getRandomGreeting = () => {
  const keys = Object.keys(inspirationalGreetings);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return inspirationalGreetings[randomKey];
};

export const capitalizeName = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
