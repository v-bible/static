import fsPromise from 'node:fs/promises';
import path from 'node:path';
import Fuse from 'fuse.js';

const generateSearchIndex = async (
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

  const idxList = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const book of books) {
    const chapterData = await Promise.all(
      book.chapters.map(async (chap) => {
        const getBookChapterJson = await fetch(
          `${baseUrl}/v1/book/${book.code}/chapter/${chap.number}?versionCode=${versionCode}&langCode=${langCode}&webOrigin=${webOrigin}`,
        );

        const res = await getBookChapterJson.json();

        if (!res) {
          console.log('Error (json)', book.code, chap.number);
        }

        const verseIdxList = res.verses.map((verse) => {
          return {
            content: verse.content,
            order: verse.order,
            bookCode: book.code,
            bookTitle: book.title,
            bookCanon: book.canon,
            chapNumber: chap.number,
            type: 'verse',
          };
        });

        const footnoteIdxList = res.footnotes.map((fn) => {
          return {
            content: fn.content,
            order: fn.order,
            bookCode: book.code,
            bookTitle: book.title,
            bookCanon: book.canon,
            chapNumber: chap.number,
            type: 'footnote',
          };
        });

        const headingIdxList = res.footnotes.map((heading) => {
          return {
            content: heading.content,
            order: heading.order,
            bookCode: book.code,
            bookTitle: book.title,
            bookCanon: book.canon,
            chapNumber: chap.number,
            type: 'heading',
          };
        });

        const referenceIdxList = res.footnotes.map((ref) => {
          return {
            content: ref.content,
            order: ref.order,
            bookCode: book.code,
            bookTitle: book.title,
            bookCanon: book.canon,
            chapNumber: chap.number,
            type: 'reference',
          };
        });

        return [
          ...verseIdxList,
          ...footnoteIdxList,
          ...headingIdxList,
          ...referenceIdxList,
        ];
      }),
    );

    idxList.push(...chapterData.flat());
  }

  const contentIndex = Fuse.createIndex(['content'], idxList);

  await fsPromise.writeFile(
    path.resolve(rootDirName, versionCode.toLowerCase(), 'search-index.json'),
    JSON.stringify(contentIndex.toJSON()),
  );
};

export { generateSearchIndex };
