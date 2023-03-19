const {root,base_url,pages} = require('./config');
const fs = require('fs');

const build_site_readme = () => {
  const posts = pages.reduce((string,file) => {
    const date = file.date ? file.date.toLocaleString('en-US', { month: 'short', year: 'numeric' }) : ``;
    return `${string}
* [${file.title}](${base_url}/${file.folder}/) ${date}
`},``);
  const markdown = `# John Mills
I mostly post minimal experiments, tips, and tricks. Keep up-to-date with me and subscribe to my [RSS Feed](${base_url}/johnmills.rss).
${posts}`;
  fs.writeFileSync(`${root}/README.md`, markdown, 'utf8');
}

module.exports = {
  build_site_readme
}