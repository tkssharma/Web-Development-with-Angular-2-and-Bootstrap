import { NgCliAppPage } from './app.po';

describe('ng-cli-app App', function() {
  let page: NgCliAppPage;

  beforeEach(() => {
    page = new NgCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
