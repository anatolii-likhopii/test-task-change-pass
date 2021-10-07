const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      urlGuest:'https://shorepos.shore.com',
      urlClient: 'https://connect.inventorum.com',
      show: true,
      windowSize: '1280x900',
      chrome: {
        args: ['--no-sandbox', '--window-size=1280,900'],
      },
    },
    MailSlurp: {
      apiKey: '18419c5661b6aa8a93aa510a51c31d8ba57545440b3d4302d86c375cbd83c1b7',
      require: '@codeceptjs/mailslurp-helper'    
    },
  },
  include: {
    I: './steps_file.js',

    // Pages
    homepage: './pages/homepage.js',
    customerAccountCreate: './pages/customer_account_create.js',
    customerAccountIndex: './pages/customer_account_index.js',
    customerAccountLogout: './pages/customer_account_logout.js',
    customerAccountLogin: './pages/customer_account_login.js',
    // loginPage: './pages/login.js',
    // logoutPage: './pages/logout.js',
    // registrationPage: './pages/registration.js',
    // forgotPasswordPage: './pages/forgotPassword.js',
    
    // signinFragment: "./fragments/Signin.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'create-codeceptjs',
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