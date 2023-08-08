import { copyFileSync, readFileSync } from 'node:fs';
import { load } from 'cheerio';

const $ = load(
  readFileSync('./scripts/webpage-complete/awesome-speakers.html', 'utf8'),
);

const avatarFileTransforms = $(
  'img[data-canonical-src^="https://res.cloudinary.com/dsscw65fc/image/twitter_name"]',
)
  .toArray()
  .map((img) => {
    const $img = $(img);
    return {
      filenameBefore: $img.attr('src')!.split('/').pop(),
      filenameAfter: $img.attr('data-canonical-src')!.split('/').pop(),
    };
  });

for (const { filenameBefore, filenameAfter } of avatarFileTransforms) {
  copyFileSync(
    `./scripts/webpage-complete/awesome-speakers_files/${filenameBefore}`,
    `./avatars/${filenameAfter}`,
  );

  console.log(`Copied ${filenameBefore} to ${filenameAfter}`);
}

console.log('Done copying avatars to ./avatars');
