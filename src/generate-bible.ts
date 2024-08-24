import { generateBible } from '@/scripts/generate-bible';
import { presets } from '@/src/constant';

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
