const {root,base_url,pages} = require('./config');
const fs = require('fs');

const task_readme = () => {
  const posts = pages.reduce((string,file) => {
    const date = file.date ? file.date.toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }) : ``;
    return `${string}
${date}
[${file.title}](${base_url}/${file.folder}/)
`},``);
  const markdown = `#John Mills
I mostly post minimal experiments, tips, and tricks. Keep up-to-date with me and subscribe to my [RSS Feed](${base_url}/johnmills.rss).

##Latest Posts
${posts}`;
  fs.writeFileSync(`${root}/README.md`, markdown, 'utf8');
}

module.exports = {
  task_readme
}
