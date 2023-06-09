// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  
  
testDir: './tests',
timeout:30*1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  //Retires should be in config file obj level since its for overall proj/dnt put in use
  //retries:2,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  //workers:2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  // reporter:[['list'],['dot'],
  // ['json',{outputFile:"jsonReport/jsonFile.json"}],
  // ['html',{open:"on-failure"}]
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //headless:false,
    //browserName:'chromium',
    //screenshot:'on',
   // trace:'retain-on-failure',
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: "on",
    //...devices['BlackBerry Z30']
    //permissions:['geolocation'],
    //video:'retain-on-failure'
     //viewport:{ width: 1536, height: 864 },
   // launchOptions:{slowMo:500}
   launchOptions:{slowMo:500}

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      //use: { ...devices['Moto G4'] ,
      headless:true,
      
    //viewport:{ width: 1536, height: 864 },
    //viewport:{ width: 1000, height: 864 },
    // screenshot:'on',
    // video:'on',
    // trace:'on',
   // ignoreHTTPSErrors:true,  //SSL certificates acceptance
  
    },      
    },
  //Edge
  //  {
  //     name: 'Microsoft Edge',
  //     use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   },
//FF
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'],
  //  // headless:true,
  //   },
  //   },

    // {
    //   name: 'webkit',
    //   use: 
    //   //{ ...devices['Desktop Safari'],
    //   { ...devices['iPhone 11'],
    //   headless:false, },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  
  // expect:
  // {
  //  // timeout:5000,  //5seconds
  // }
});

