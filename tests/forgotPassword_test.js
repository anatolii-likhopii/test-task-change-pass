Feature('Forgot Password');

Scenario('forgot password success', async ({ I, customerAccountCreate, customerAccountLogin, customerAccountLogout }) => {
   const mailbox = await I.haveNewMailbox();
    await customerAccountCreate.sendFormRegistrationFirstStep(mailbox, 'Rogaikopita', 'Ostap', 'Bender', 
    '33322211');
    
    const emailRegistation = await I.waitForLatestEmail(200);
    let registrationUrl = emailRegistation.body.match(customerAccountCreate.emailRegex)[0];
    await customerAccountCreate.sendFormRegistrationSecondStep(registrationUrl, 'Test123!', '1', '2', '3', '4',);

    I.wait(5);
    // I.amOnPage(customerAccountLogout.logoutPageUrl);
    await customerAccountLogout.logout();
    I.amOnPage(customerAccountLogin.loginPageUrl);
    I.click('a[href="/forgot-password"]');
    I.fillField('E-Mail', mailbox.emailAddress);
    I.click('button[type="submit"]');
    const emailRestore = await I.waitForNthEmail(2, 100);
    const restoreUrl = emailRestore.body.match(customerAccountCreate.emailRegex)[0];
    I.amOnPage(restoreUrl);
    I.see('Passwort zurücksetzen');
    I.fillField(customerAccountCreate.fields.password, 'Test123$');
    I.fillField('#passwordConfirmation', 'Test123$');
    I.click('button[type="submit"]');
    I.see('Einloggen');

    customerAccountLogin.login(mailbox, 'Test123$', '1234');
});