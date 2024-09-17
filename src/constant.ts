export const baseUrl = 'http://localhost:8081/api';

export const presets = {
  biblegateway: {
    baseUrl,
    versionCode: 'BD2011',
    langCode: 'vi',
    webOrigin: 'https://www.biblegateway.com',
    rootDirName: 'biblegateway',
  },
  bibledotcom: {
    baseUrl,
    versionCode: 'BD2011',
    langCode: 'vie',
    webOrigin: 'https://www.bible.com',
    rootDirName: 'bibledotcom',
  },
  ktcgkpv: {
    baseUrl,
    versionCode: 'KT2011',
    langCode: 'vi',
    webOrigin: 'https://ktcgkpv.org/',
    rootDirName: 'ktcgkpv',
  },
};
