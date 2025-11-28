import ParabankLoginPage from '../pages/parabankLoginPage';

describe('Parabank Login Test', () => {
  it('Should fail login with invalid credentials', () => {
    const login = new ParabankLoginPage()
    login.siteVisit()
    login.enterUsername('invalidUser');
    login.enterPassword('wrongPassword');
    login.clickLogin();
    login.getErrorMessage().should('contain', 'The username and password could not be verified');
    });
});
