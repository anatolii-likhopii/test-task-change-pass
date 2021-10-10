const { I } = inject();

module.exports = {

    logoutPageUrl: 'https://connect.inventorum.com/',
    accountButton:'button.ant-btn.ant-btn-primary',
    accountMenuDropdown: 'div.menu.visible',
    logoutButton: 'span.anticon.anticon-logout',
    closeHelperButton: '.userlane-element-helper.userlane-guide-step-btn-back',
    logout (firstLogout) {
      I.amOnPage(this.logoutPageUrl);
      I.wait(2);
      if (firstLogout) {
        I.click(this.closeHelperButton);
      }
      I.click(this.accountButton);
      I.waitForElement(this.accountMenuDropdown);
      I.wait(5);
      I.click(this.logoutButton);
      I.wait(2);
      I.see('Einloggen')
    }

  }