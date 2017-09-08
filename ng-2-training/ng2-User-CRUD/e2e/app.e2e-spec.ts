import { StudentCurdPage } from './app.po';

describe('student-curd App', () => {
  let page: StudentCurdPage;

  beforeEach(() => {
    page = new StudentCurdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
