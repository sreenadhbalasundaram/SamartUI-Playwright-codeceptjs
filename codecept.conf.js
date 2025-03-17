const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const cp = require('child_process');

const capabilities = {
  'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright CodeceptJS Sample Build',
    'name': 'Playwright CodeceptJS Test',
    'user': 'Your_LT_Username',
    'accessKey': 'Your_LT_AccessKey',
    'network': true,
    'video': true,
    'console': true
  }
};

exports.config = {
  tests: './local.js',
  output: './output',
  helpers: {
    Playwright: {
      show: true,
      browser: 'chromium',
      // executablePath: 'C:\\Users\\sreenadhb\\AppData\\Local\\ms-playwright\\chromium-1155\\chrome-win\\chrome.exe'    // This is for local execution, this path is not required only if you need to set the chromium.exe path explicitly we need this 
      // chromium: {
      //   browserWSEndpoint: { wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}` } // This is fpr execution in LT
      // },
    },
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
