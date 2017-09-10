import { App2Page } from './app.po';

describe('app2 App', function() {
  let page: App2Page;

  beforeEach(() => {
    page = new App2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
