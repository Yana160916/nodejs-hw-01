import { faker } from "@faker-js/faker";

export function createFakeContact() {
  return {
    fullName: faker.person.fullName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
  };
}
