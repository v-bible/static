import { generateSearchIndex } from '@/scripts/generate-search-index';
import { presets } from '@/src/constant';

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
