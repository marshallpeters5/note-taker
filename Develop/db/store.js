const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

// Good ol' separation of concerns. //
class Store {
  static readData() {
    try {
      const data = fs.readFileSync(dbPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading data from file:', error);
      return [];
    }
  }

  static writeData(data) {
    try {
      fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
      console.error('Error writing data to file:', error);
    }
  }
}

module.exports = Store;