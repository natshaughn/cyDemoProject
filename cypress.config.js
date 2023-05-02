const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Max wait time
    defaultCommandTimeout: 20000,

    // Needed to allow the page to load
    chromeWebSecurity: false,

    // Do not create videos
    video: false,

    baseUrl: "https://www.saucedemo.com/",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
