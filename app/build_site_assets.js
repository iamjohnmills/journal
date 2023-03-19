const fs = require('fs');
const {root,assets} = require('./config');

const build_site_assets = () => {
  const path_in = `${root}/site/template/assets`;
  const path_out = `${root}/dist/assets`;
  for(const asset of assets){
    const src = `${path_in}/${asset.src}`;
    if(asset.type === 'script'){
      const asset_content = fs.readFileSync(src, 'utf8');
      const asset_content_formatted = `// ${asset.src}\n${asset_content.trim()}\n\n`;
      fs.appendFileSync(`${path_out}/site.js`, asset_content_formatted);
    } else if(asset.type === 'stylesheet') {
      const asset_content = fs.readFileSync(src, 'utf8');
      const asset_content_formatted = `/* ${asset.src} */\n${asset_content.trim()}\n\n`;
      fs.appendFileSync(`${path_out}/site.css`, asset_content_formatted);
    } else if(asset.type === 'static') {
      fs.copyFileSync(src, `${path_out}/${asset.src}`);
    }
  }
}

module.exports = {
  build_site_assets
}
