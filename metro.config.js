const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  "@components": path.resolve(__dirname, "components"),
  "@lib": path.resolve(__dirname, "lib"),
  "@screens": path.resolve(__dirname, "screens"),
  "@services": path.resolve(__dirname, "services"),
  "@constants": path.resolve(__dirname, "constants"),
  "@assets": path.resolve(__dirname, "assets"),
  "@models": path.resolve(__dirname, "models"),
};

module.exports = config;
