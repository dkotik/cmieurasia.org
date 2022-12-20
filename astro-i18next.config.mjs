/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: "ua",
  supportedLanguages: ["ua", "en", "ru"],
  i18next: {
    // debug is convenient during development to check for missing keys
    // debug: true,
    initImmediate: false,
    backend: {
      loadPath: "./src/locales/{{lng}}.json"
    },

    // ns: ["common", "forms"],
    defaultNS: "common"
    // translation keys will be retrieved in the common.json file by default
    // supportedLngs: ["en"],
    // resourcesPath: "src/locales" // resourcesPath 	?string (src/resources/locales/) 	The path to your translation files
  }
  // i18nextPlugins: { fsBackend: "i18next-fs-backend" },
};
