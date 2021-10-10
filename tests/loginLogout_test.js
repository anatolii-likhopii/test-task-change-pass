Feature('Login-Logout');

Scenario('login logout positive', async ({ I, customerAccountLogin, customerAccountLogout }) => {
    const mailbox = {emailAddress: 'horugvi@protonmail.com'};
    customerAccountLogin.login(mailbox, 'Test1235', '1234');

    customerAccountLogout.logout(false);
});