import { LtNg4Page } from './app.po';

describe('lt-ng4 App', () => {
  let page: LtNg4Page;

  beforeEach(() => {
    page = new LtNg4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to lt!!');
  });
});
