import { CustomPropertiesPage } from './app.po';

describe('custom-properties App', () => {
  let page: CustomPropertiesPage;

  beforeEach(() => {
    page = new CustomPropertiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
