const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: 'Demo Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      // require('cypress-mochawesome-reporter/plugin')(on);
      // on('before:run', async (details) => {
      //   console.log('override before:run');
      //   await beforeRunHook(details);
      // });

      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });
      return config;
    },
      "chromeWebSecurity": false ,
      "baseUrl": "https://twig-assessments-staging.zeuslearning.com",
      "defaultCommandTimeout": 10000,
      "failOnStatusCode": false,
      "screenshotOnRunFailure": true
  },
});
