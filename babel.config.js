module.exports = function(api) {
  api.cache(true);
  return {
    presets: [["module:metro-react-native-babel-preset"], ["react-app"]],
    ignore: ["node_modules/art/core/color.js"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"]
      }
    },
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "^react-native$": "react-native-web"
          }
        }
      ]
    ]
  };
};
