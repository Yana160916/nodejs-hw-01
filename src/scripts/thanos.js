import fs from "fs";
import path from "node:path";

const dbPath = path.resolve("src/db/db.json");

function thanos() {
  try {
    const data = fs.readFileSync(dbPath, "utf8");
    let contacts = JSON.parse(data);

    for (let i = contacts.length - 1; i >= 0; i--) {
      const chance = Math.random();
      if (chance <= 0.5) {
        console.log("Thanos snapped and removed a contact!");
        contacts.splice(i, 1);
      }
    }

    fs.writeFileSync(dbPath, JSON.stringify(contacts, null, 2), "utf8");
  } catch (error) {
    console.error("Error during Thanos snap:", error);
  }
}

thanos();

export { thanos };
