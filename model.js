import { Person } from './person.js';
import { DAO } from './dao.js';

export class Model {
  constructor() {
    this.dao = new DAO();
    this.personList = [
      { name: 'Anna Arm', birthday: '2001-12-24' },
      { name: 'Berta Bein', birthday: '1993-07-12' },
      { name: 'Carla Copf', birthday: '1980-03-07' }
    ];
  }

  // CREATE
  addPerson(person) {
    this.personList.push(person);
    this.dao.saveData(this.personList);
  }

  // READ
  getAllPersons() {
    return this.dao.readData();
  }

  getPerson(index) {
    return this.personList[index];
  }

  // UPDATE
  updatePerson(index, newPerson) {
    this.personList[index] = newPerson;
  }

  // DELETE
  deletePerson(index) {
    this.personList.splice(index, 1);
    this.dao.saveData(this.personList);
  }
}
