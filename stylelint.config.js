module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      customSyntax: ['postcss-html'],
      extends: ["stylelint-config-recommended-scss"],
    },
  ],
};
