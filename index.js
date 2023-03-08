(async () => {

  const {task_erase} = require('./app/erase');
  const {task_assets} = require('./app/assets');
  const {task_pages} = require('./app/pages');
  const {task_readme} = require('./app/readme');
  const {task_rss} = require('./app/rss');

  console.log('Rebuilding current build files...');
  await task_erase();

  console.log('Bundling and copying site assets...');
  await task_assets();

  console.log('Building pages...');
  await task_pages();

  console.log('Building README...');
  await task_readme();

  console.log('Building RSS feed...');
  await task_rss();

  console.log('Finished.')


})();
