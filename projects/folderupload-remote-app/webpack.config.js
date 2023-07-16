const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "folderupload-remote-app",

  exposes: {
    "./FolderUploadModule":
      "./projects/folderupload-remote-app/src/app/folder-upload/folder-upload.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
