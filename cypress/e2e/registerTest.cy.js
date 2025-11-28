import ParabankRegisterPage from '../pages/parabankRegisterPage';

describe('Parabank Registration', () => {
  
  it('Should register a new user successfully', () => {
    const reg = new ParabankRegisterPage()
    reg.siteVisit()
    reg.clickRegisterButton()
    reg.enterFirstName('Nithu')
    reg.enterLastName('QA')
    reg.enterAddress('123 Test Street')
    reg.enterCity('Chennai')
    reg.enterState('TN')
    reg.enterZip('600001')
    reg.enterPhone('9876543210')
    reg.enterSSN('12345')
    reg.enterUsername('nithu56789')
    reg.enterPassword('password123')
    reg.enterConfirmPassword('password123')
    reg.clickRegister()
    cy.contains('Your account was created successfully. You are now logged in').should('be.visible')
    })
})