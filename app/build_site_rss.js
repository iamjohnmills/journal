const {root,base_url,pages} = require('./config');
const fs = require('fs');
const mustache = require('mustache');
const formatHTML = require('js-beautify').html;

const build_site_rss = () => {
  const items = pages.reduce((string,file) => {
    const date = file.date ? file.date.toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' }) : ``;
    return `${string}
    <item>
    <title>${file.title}</title>
    <link href="${base_url}/${file.folder}/" />
    <pubDate>${date}</pubDate>
    </item>`
  },``);
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
    <channel>
      <title>John Mills</title>
      <link>https://iamjohnmills.github.io/journal/</link>
      ${items}
    </channel>
    </rss>`;
  const formatted_html = formatHTML(rss, { indent_size: 1, preserve_newlines: false });
  fs.writeFileSync(`${root}/dist/johnmills.rss`, formatted_html, 'utf8');
}

module.exports = {
  build_site_rss
}
