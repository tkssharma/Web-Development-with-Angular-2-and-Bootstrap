import { StickyNotesPage } from './app.po';

describe('sticky-notes App', function() {
  let page: StickyNotesPage;

  beforeEach(() => {
    page = new StickyNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
