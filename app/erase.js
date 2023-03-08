const {root,pages} = require('./config');
const fs = require('fs');

const task_erase = async () => {
  fs.rmSync(`${root}/dist`, { recursive: true, force: true });
  fs.mkdirSync(`${root}/dist`);
  fs.mkdirSync(`${root}/dist/assets`);
  for(const page of pages) {
    fs.mkdirSync(page.out_folder);
  }
}

module.exports = {
  task_erase
}
