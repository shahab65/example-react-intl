// translationRunner.js
const manageTranslations = require('react-intl-translations-manager').default;

// es2015 import
// import manageTranslations from 'react-intl-translations-manager';

manageTranslations({
  messagesDirectory: 'lang',
  translationsDirectory: 'src/translations/',
  languages: ['en','fa'] // any language you need
});
