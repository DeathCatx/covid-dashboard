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
        // swSrc is required in InjectManifest mode.
        swSrc: 'service-worker.js',
        // ...other Workbox options...
        exclude: [/_redirects/]
    }
  }
};
