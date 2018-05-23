import { browser, by, element } from 'protractor';

export class LtNg4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lt-root h1')).getText();
  }
}
