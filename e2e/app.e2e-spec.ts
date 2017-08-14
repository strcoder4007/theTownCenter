import { TheTownCenterPage } from './app.po';

describe('the-town-center App', () => {
  let page: TheTownCenterPage;

  beforeEach(() => {
    page = new TheTownCenterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
