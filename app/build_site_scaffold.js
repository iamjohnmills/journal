const {root,pages} = require('./config');
const fs = require('fs');

const build_site_scaffold = async () => {
  fs.rmSync(`${root}/dist`, { recursive: true, force: true });
  fs.mkdirSync(`${root}/dist`);
  fs.mkdirSync(`${root}/dist/assets`);
  for(const page of pages) {
    fs.mkdirSync(page.out_folder);
  }
}

module.exports = {
  build_site_scaffold
}
