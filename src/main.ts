import { generateBible } from '@/scripts/generate-bible';

const baseUrl = 'http://localhost:8081/api';

(async () => {
  // NOTE: Get Bible from biblegateway.com
  await generateBible(
    baseUrl,
    'BD2011',
    'vi',
    'https://www.biblegateway.com',
    'biblegateway',
  );

  // NOTE: Get Bible from bible.com
  await generateBible(
    baseUrl,
    'BD2011',
    'vie',
    'https://www.bible.com',
    'bibledotcom',
  );
})();
