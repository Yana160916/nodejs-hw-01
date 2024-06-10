import fs from 'fs';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

function getAllContacts() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File not found:', dbPath);
      return [];
    } else {
      console.error('Error reading contacts:', error);
      return [];
    }
  }
}

console.log(getAllContacts());

export { getAllContacts };
