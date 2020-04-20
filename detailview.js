export class DetailView {
  constructor(presenter) {
    this.presenter = presenter;

    // HTML
    const html = `
        <h2>DetailView</h2>
        <fieldset>
          <legend>Name</legend>
            <input id="inputName" type="text"></input>
        </fieldset>
        <fieldset>
          <legend>Birthday</legend>
            <input id="inputBirthday" type="date"></input>
        </fieldset>
        <button id="buttonSave">Save</button>
        <button id="buttonCancel">Cancel</button>
        `;
    const app = document.getElementById('app');
    app.innerHTML = html;

    // Controls
    this.inputName = document.getElementById('inputName');
    this.inputBirthday = document.getElementById('inputBirthday');

    // Events
    this._registerEvents();
  }

  _registerEvents() {
    const buttonSave = document.getElementById('buttonSave');
    buttonSave.addEventListener('click', () => {
      this.presenter.buttonSaveClicked();
    });

    const buttonCancel = document.getElementById('buttonCancel');
    buttonCancel.addEventListener('click', () => {
      this.presenter.buttonCancelClicked();
    });
  }

  // get values from controls
  getName() {
    return this.inputName.value;
  }

  getBirthday() {
    return this.inputBirthday.value;
  }

  // set values to controls
  setName(name) {
    this.inputName.value = name;
  }

  setBirthday(birthday) {
    this.inputBirthday.value = birthday;
  }
}
