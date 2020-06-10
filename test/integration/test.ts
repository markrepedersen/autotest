import {should} from "chai";
import {Browser} from "../../src/lib/utils/browsers/browser";
import {Chrome} from "../../src/lib/utils/browsers/chrome";
import {config} from "../../main";
import {FacebookLoginPage} from "../../src/pages/FacebookLoginPage";

describe("Browser Tests", function () {
  let browser: Browser;

  this.timeout(config.timeout);

  before(async function () {
    browser = new Chrome();
    should();
  });

  it.only("Facebook", async function () {
    const loginPage: FacebookLoginPage = new FacebookLoginPage(browser);
    await browser.navigate(FacebookLoginPage.URL);
    await browser.waitUntilPageHasLoaded(FacebookLoginPage);
    await loginPage.login("username", "pw");
  });

  after(async () => {
    await browser.quit();
  });
});
