// eslint-disable-next-line import/extensions
import { generateSearchIndex } from '../scripts/generate-search-index.js';
import { presets } from './constant.js';

(async () => {
  const preset = presets.ktcgkpv;

  await generateSearchIndex(
    preset.baseUrl,
    preset.versionCode,
    preset.langCode,
    preset.webOrigin,
    preset.rootDirName,
  );
})();
