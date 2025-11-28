class ParabankLoginPage {

    //Locators (Xpath)
    usernameField = '//*[@id="loginPanel"]/form/div[1]/input'
    passwordField = '//*[@id="loginPanel"]/form/div[2]/input'
    loginBtn = '//*[@id="loginPanel"]/form/div[3]/input'
    errorMsg = '//*[@id="rightPanel"]/p'

    //Calling methods for each fields
    siteVisit() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.wait(3000)
    }

    enterUsername(username) {
        cy.xpath(this.usernameField).type(username)
        cy.wait(3000)
    }

    enterPassword(password) {
        cy.xpath(this.passwordField).type(password)
        cy.wait(3000)
    }

    clickLogin() {
        cy.xpath(this.loginBtn).click()
    }

    getErrorMessage() {
        cy.wait(3000)
        return cy.xpath(this.errorMsg)
    }
}
export default ParabankLoginPage