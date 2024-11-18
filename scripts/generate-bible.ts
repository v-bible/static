import fs from 'node:fs';
import fsPromise from 'node:fs/promises';
import path from 'node:path';

const generateBible = async (
  baseUrl = 'http://localhost:8081/api',
  versionCode = 'BD2011',
  langCode = 'vi',
  webOrigin = 'https://www.biblegateway.com',
  rootDirName = 'biblegateway',
) => {
  const getAllBooks = await fetch(
    `${baseUrl}/v1/book?versionCode=${versionCode}&langCode=${langCode}&webOrigin=${webOrigin}`,
  );

  const { books } = await getAllBooks.json();

  const baseFolder = path.join(
    import.meta.dirname,
    '../versions',
    rootDirName,
    versionCode.toLocaleLowerCase(),
  );
  if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder, {
      recursive: true,
    });
  }

  await fsPromise.writeFile(
    path.join(baseFolder, 'metadata.json'),
    JSON.stringify(books, null, 2),
  );

  // eslint-disable-next-line no-restricted-syntax
  for await (const book of books) {
    await fsPromise.mkdir(path.join(baseFolder, book.code), {
      recursive: true,
    });

    await fsPromise.mkdir(path.join(baseFolder, book.code, 'json'), {
      recursive: true,
    });

    await Promise.all(
      book.chapters.map(async (chap) => {
        const getBookChapterText = await fetch(
          `${baseUrl}/v1/book/${book.code}/chapter/${chap.number}/text?versionCode=${versionCode}&langCode=${langCode}&webOrigin=${webOrigin}`,
        );

        const { text } = await getBookChapterText.json();

        if (!text) {
          console.log('Error', book.code, chap.number);

          return;
        }

        await fsPromise.writeFile(
          path.join(baseFolder, book.code, `${chap.number}.md`),
          text,
        );

        const getBookChapterJson = await fetch(
          `${baseUrl}/v1/book/${book.code}/chapter/${chap.number}?versionCode=${versionCode}&langCode=${langCode}&webOrigin=${webOrigin}`,
        );

        const res = await getBookChapterJson.json();

        if (!res) {
          console.log('Error (json)', book.code, chap.number);

          return;
        }

        await fsPromise.writeFile(
          path.join(baseFolder, book.code, 'json', `${chap.number}.json`),
          JSON.stringify(res, null, 2),
        );
      }),
    );
  }
};

export { generateBible };
