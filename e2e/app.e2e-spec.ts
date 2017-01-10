import { TeztProjectPage } from './app.po';

describe('tezt-project App', function() {
  let page: TeztProjectPage;

  beforeEach(() => {
    page = new TeztProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
