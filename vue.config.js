"use strict";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/covid-dashboard/" : "/",
  pwa: {
    name: "covid-dashboard",
    themeColor: "#15192b",
    msTileColor: "#15192b",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#15192b",
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        swSrc: 'service-worker.js',
        exclude: [/\.map$/,/_redirects/]
    }
  }
};
