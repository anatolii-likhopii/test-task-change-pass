Feature('Login-Logout');

Scenario('login logout positive', async ({ I, customerAccountLogin, customerAccountLogout }) => {
    const mailbox = {emailAddress: 'horugvi@protonmail.com'};
    customerAccountLogin.login(mailbox, 'Test1234', '1234');

    //pause();
    // I see element

    customerAccountLogout.logout();

    //I see element


});