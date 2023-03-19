
// docker exec -it journal /bin/bash

// new builds:
// for npm canvas to work:
// apt-get update
// apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
// npm install

// on master branch:
// npm run dev for localhost urls
// npm run build for github.io urls
// git commit -am 'changes that were made'
// git push origin master'

// on public branch
// git merge master
// git subtree push --prefix dist origin public

(async () => {

  console.log('Rebuilding current build files...');
  const {build_site_scaffold} = require('./app/build_site_scaffold');
  await build_site_scaffold();

  console.log('Bundling and copying site assets...');
  const {build_site_assets} = require('./app/build_site_assets');
  await build_site_assets();

  console.log('Building pages...');
  const {pages} = require('./app/config');
  const {build_page_assets} = require('./app/build_page_assets');
  const {build_page_image} = require('./app/build_page_image');
  const {build_page_html} = require('./app/build_page_html');
  for(const page of pages){
    await build_page_assets(page);
    // await build_page_image(page);
    await build_page_html(page);
  }

  console.log('Building RSS feed...');
  const {build_site_rss} = require('./app/build_site_rss');
  await build_site_rss();

  console.log('Building README...');
  const {build_site_readme} = require('./app/build_site_readme');
  await build_site_readme();

  console.log('Finished.')

})();
