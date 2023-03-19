const {root,base_url,pages,template} = require('./config');
const fs = require('fs');
const mustache = require('mustache');
const formatHTML = require('js-beautify').html;
const hljs = require('highlight.js');
const md = require('markdown-it')({
  html: true,
  highlight: (str, lang) => `<pre><code class="hljs">${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
});

const build_page_html = async (page) => {
  const markdown = fs.readFileSync(page.src, 'utf8');
  const markdown_mustache = mustache.render(markdown, {
    preview: () => { return (text, render) => {
      const html = fs.readFileSync(`${root}/site/pages/${page.folder}/${text}`, 'utf8');
      return `<pre data-code="${encodeURIComponent(html)}"><code class="hljs">${hljs.highlight(html, { language: 'html', ignoreIllegals: true }).value}</code></pre>`;
    }},
    date: () => { return (text, render) => {
      const date = new Date(text);
      const formatted_date = date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
      return formatted_date;
    }},
  });
  const markdown_html = md.render(markdown_mustache);
  const page_mustache = mustache.render(template, {
    base_url: base_url,
    content: markdown_html,
    articles: pages.map(file => {
      return {
        title: file.title,
        link: `${base_url}/${file.folder}/`,
      }
    }),
  })
  const page_formatted_html = formatHTML(page_mustache, { indent_size: 1, preserve_newlines: false });
  fs.writeFileSync(page.out, page_formatted_html, 'utf8');
}

module.exports = {
  build_page_html
}
