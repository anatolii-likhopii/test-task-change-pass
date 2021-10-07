const { I } = inject();

module.exports = {


    // insert your locators and methods here
    logoutPageUrl: 'https://connect.inventorum.com/',
    // accountButton: 'div:nth-child(3) div[class^="Dropdown"]>button.ant-btn[type="button"]',
    accountButton:'button.ant-btn.ant-btn-primary',
    accountMenuDropdown: 'div.menu.visible',
    // logoutButton: '.menu div.ant-divider.ant-divider-horizontal + button[type="button"]',
    logoutButton: 'span.anticon.anticon-logout',
    logout () {
      I.amOnPage(this.logoutPageUrl);
      I.wait(2);
      I.click(this.accountButton);
      I.waitForElement(this.accountMenuDropdown);
      I.wait(5);
      I.click(this.logoutButton);
      I.wait(2);
      //I.see('Startseite');    
    }

  }