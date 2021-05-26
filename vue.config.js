"use strict";

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/covid19-dashboard/" : "/",
  pwa: {
    name: "COVID-19 Dashboard",
    themeColor: "#15192b",
    msTileColor: "#15192b",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#15192b"
  }
};
