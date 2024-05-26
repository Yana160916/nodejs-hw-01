import { getAllContacts } from "./getAllContacts.js";

function countContacts() {
  const contacts = getAllContacts();
  const count = contacts.length;
  return count;
}

console.log("Total number of contacts:", countContacts());

export { countContacts };
