import { Person } from './person.js';
import { ListView } from './listview.js';
import { Model } from './model.js';
import { DetailView } from './detailview.js';

export class Presenter {
  //------ S T A R T -------------
  constructor() {
    this.model = new Model();
    this._showListView();
  }

  _showListView() {
    const personList = this.model.getAllPersons();
    this.view = new ListView(this, personList);
  }

  //------ from ListView ----------
  buttonUpdateClicked(index) {
    const person = this.model.getPerson(index);

    this.actualIndex = index; // read, when buttonSaveClicked is called
    this.view = new DetailView(this);

    this.view.setName(person.name);
    this.view.setBirthday(person.birthday);
  }

  buttonNewClicked() {
    const person = new Person('Please insert name', '1999-12-24');

    this.actualIndex = -1; // read, when buttonSaveClicked is called
    this.view = new DetailView(this);

    this.view.setName(person.name);
    this.view.setBirthday(person.birthday);
  }

  buttonDeleteClicked(index) {
    this.model.deletePerson(index);
    this._showListView();
  }

  //------ from DetailView ------------
  buttonSaveClicked() {
    // read data from DetailView
    const newName = this.view.getName();
    const newBirthday = this.view.getBirthday();
    const newPerson = new Person(newName, newBirthday);

    // actualIndex is set in buttonNewClicked / buttonUpdateClicked
    if (this.actualIndex < 0) {
      // create new person
      this.model.addPerson(newPerson);
    } else {
      // update existing person
      this.model.updatePerson(this.actualIndex, newPerson);
    }

    this._showListView();
  }

  buttonCancelClicked() {
    this._showListView();
  }
}
