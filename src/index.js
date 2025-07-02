import { getRandomGreeting, capitalizeName } from "./utils.js";

/**
 * Get a motivational tech greeting
 * @param {string} [userName] - Optional username to include in greeting
 * @returns {string} Formatted greeting message
 */
export const greetings = (userName) => {
  const message = getRandomGreeting();
  const formattedName = capitalizeName(userName || "");

  return formattedName ? `${message} — ${formattedName}` : message;
};
