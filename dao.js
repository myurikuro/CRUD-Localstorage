export class DAO {
    constructor() {}
  
    readData() {
      let dataArray = [];
      if (localStorage.getItem('data')) {
        let dataString = localStorage.getItem('data');
        dataArray = JSON.parse(dataString);
      }
      return dataArray;
    }
  
    saveData(dataArray) {
      let dataString = JSON.stringify(dataArray);
      localStorage.setItem('data', dataString);
    }
  }
  