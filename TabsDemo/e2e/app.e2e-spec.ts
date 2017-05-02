import { TabsDemoPage } from './app.po';

describe('tabs-demo App', () => {
  let page: TabsDemoPage;

  beforeEach(() => {
    page = new TabsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
