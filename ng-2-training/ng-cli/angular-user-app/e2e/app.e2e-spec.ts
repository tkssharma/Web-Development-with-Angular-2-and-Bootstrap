import { AngularUserAppPage } from './app.po';

describe('angular-user-app App', function() {
  let page: AngularUserAppPage;

  beforeEach(() => {
    page = new AngularUserAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
