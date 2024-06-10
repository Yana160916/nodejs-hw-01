import fs from 'fs';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';

const dbPath = path.resolve('src/db/db.json');

function readContacts() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    } else {
      console.error('Error reading contacts:', error);
      return [];
    }
  }
}

function writeContacts(contacts) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
}

function addOneContact() {
  const existingContacts = readContacts();
  const newContact = createFakeContact();
  existingContacts.push(newContact);
  writeContacts(existingContacts);
}

addOneContact();
console.log('One new contact added to db.json');
