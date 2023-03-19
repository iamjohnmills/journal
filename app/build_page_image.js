const fs = require('fs')
const {createCanvas,loadImage} = require('canvas')
const {share_url,avatar_path} = require('./config');

const build_page_image = async (page) => {
  const width = 1200
  const height = 630

  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  context.fillStyle = '#fff'
  context.fillRect(0, 0, width, height)

  context.font = 'bold 70pt system-ui'
  context.textAlign = 'center'
  context.textBaseline = 'top'
  context.fillStyle = '#000'

  // const textWidth = context.measureText(text).width
  // context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
  // context.fillStyle = '#fff'
  context.fillText(page.title, 600, 170)

  context.fillStyle = '#000'
  context.font = 'bold 30pt system-ui'
  context.fillText(share_url, 600, 530)

  // const buffer = canvas.toBuffer('image/png');
  // const out_file = `${page.out_folder}/share.png`;
  // fs.writeFileSync(out_file, buffer)

  const avatar = await loadImage(avatar_path);

  context.drawImage(avatar, 340, 515, 70, 70)
  const buffer = canvas.toBuffer('image/png')
  const out_file = `${page.out_folder}/share.png`;
  fs.writeFileSync(out_file, buffer)

  // loadImage(avatar_path).then(image => {
  //   context.drawImage(image, 340, 515, 70, 70)
  //   const buffer = canvas.toBuffer('image/png')
  //   const out_file = `${page.out_folder}/share.png`;
  //   fs.writeFileSync(out_file, buffer)
  // })
}

module.exports = {
  build_page_image
}
