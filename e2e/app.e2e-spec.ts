import { PROTOTYPEB02Page } from './app.po';

describe('prototype-b02 App', () => {
  let page: PROTOTYPEB02Page;

  beforeEach(() => {
    page = new PROTOTYPEB02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
