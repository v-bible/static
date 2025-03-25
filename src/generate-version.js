// eslint-disable-next-line import/extensions
import { generateVersionList } from '../scripts/generate-version.js';

(async () => {
  await generateVersionList('./books/bible/versions');
})();
