const fs = require('fs');
const path = require('path');

const root = path.resolve(`${__dirname}/..`);

const get_base_url = () => {
  return `http://localhost:5000/dist`;
}

const set_page_obj = (folder) => {
  const markdown = fs.readFileSync(`${root}/site/pages/${folder}/markdown.md`, 'utf8');
  const headings = markdown.match(/(#{1}\s)(.*)/gi);
  const dates = markdown.match(/{{#date}}([^*]+){{\/date}}/gi);
  return {
    title: headings ? headings[0].substring(2) : ``,
    date: dates ? new Date(dates[0].substring(9,dates[0].indexOf('{{\/date}}'))) : null,
    src_folder: `${root}/site/pages/${folder}`,
    src: `${root}/site/pages/${folder}/markdown.md`,
    out: `${root}/dist/${folder}/index.html`,
    out_folder: `${root}/dist/${folder}`,
    folder: folder
  }
}

const get_pages = () => {
  const folders = fs.readdirSync(`${root}/site/pages`);
  return folders.filter(folder => folder !== '.DS_Store').map(folder => set_page_obj(folder) ).sort((a,b) => new Date(b.date) - new Date(a.date) );
}

module.exports = {
  base_url: get_base_url(),
  root: root,
  pages: get_pages(),
  template: fs.readFileSync(`${root}/site/template/site.mustache`, 'utf8'),
  assets: [
    { type: 'script', src: `utilities.js` },
    { type: 'script', src: `main.js` },
    { type: 'stylesheet', src: `dracula.min.css` },
    { type: 'stylesheet', src: `main.css` },
    { type: 'static', src: `jm-photo-2023.jpg` },
  ]
}
