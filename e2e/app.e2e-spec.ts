import { AngularMovieManagerPage } from './app.po';

describe('angular-movie-manager App', () => {
  let page: AngularMovieManagerPage;

  beforeEach(() => {
    page = new AngularMovieManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
