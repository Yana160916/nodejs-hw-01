import fs from 'fs';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

function removeAllContacts() {
  try {
    fs.writeFileSync(dbPath, '[]', 'utf8');
    console.log('All contacts removed from db.json');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
}

removeAllContacts();

export { removeAllContacts };
