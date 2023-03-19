const fs = require('fs');

const build_page_assets = (page) => {
  const files = fs.readdirSync(page.src_folder);
  const assets = files.filter(file => file !== '.DS_Store' && !file.endsWith('.md') && !file.endsWith('.html') );
  for(const asset of assets){
    fs.copyFileSync(`${page.src_folder}/${asset}`, `${page.out_folder}/${asset}`);
  }
}

module.exports = {
  build_page_assets
}
