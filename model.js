import { Person } from './person.js';

import { DAO } from './dao.js';

export class Model {
  constructor() {
    this.personList = [
      { name: 'Anna Arm', birthday: '2001-12-24', freund: true },
      { name: 'Berta Bein', birthday: '1993-07-12', freund: true },
      { name: 'Carla Copf', birthday: '1980-03-07', freund: false }
    ];
  }

  // CREATE
  addPerson(person) {
    this.personList.push(person);
  }

  // READ
  getAllPersons() {
    return this.personList;
  }

  getPerson(index) {
    return this.personList[index];
  }

  getPersonAge(index) {
    return this.personList[index];
  }

  // UPDATE
  updatePerson(index, newPerson) {
    this.personList[index] = newPerson;
  }

  // DELETE
  deletePerson(index) {
    this.personList.splice(index, 1);
  }

  //Get personen as friends
  getFreunde(){
    this.result = 0;
    for (let index = 0; index < this.personList.length; index++) {
      if (this.personList[index].freund == true) {
        console.log("Hit");
        this.result += 1;
      }
    }
    //console.log(this.result);
    return this.result;
  }
}
