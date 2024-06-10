import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    contacts.push(contact);
  }
  await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
};

await generateContacts(5);
