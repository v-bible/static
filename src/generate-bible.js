// eslint-disable-next-line import/extensions
import { generateBible } from '../scripts/generate-bible.js';
import { presets } from './constant.js';

(async () => {
  const preset = presets.ktcgkpv;

  await generateBible(
    preset.baseUrl,
    preset.versionCode,
    preset.langCode,
    preset.webOrigin,
    preset.rootDirName,
  );
})();
