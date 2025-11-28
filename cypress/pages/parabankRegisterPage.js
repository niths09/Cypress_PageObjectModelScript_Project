class ParabankRegisterPage {

    //Locators (XPath)
    registerButton = '//*[@id="loginPanel"]/p[2]/a'
    firstName = '//*[@id="customer.firstName"]'
    lastName = '//*[@id="customer.lastName"]'
    address = '//*[@id="customer.address.street"]'
    city = '//*[@id="customer.address.city"]'
    state = '//*[@id="customer.address.state"]'
    zip = '//*[@id="customer.address.zipCode"]'
    phone = '//*[@id="customer.phoneNumber"]'
    ssn = '//*[@id="customer.ssn"]'
    username = '//*[@id="customer.username"]'
    password = '//*[@id="customer.password"]'
    confirmPassword = '//*[@id="repeatedPassword"]'
    registerBtn = '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input'

    //Calling methods for each fields
    siteVisit() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.wait(3000)
    }

    clickRegisterButton() {
        cy.xpath(this.registerButton).click()
    }

    enterFirstName(value) {
        cy.xpath(this.firstName).type(value)
        cy.wait(3000)
    }

    enterLastName(value) {
        cy.xpath(this.lastName).type(value)
        cy.wait(3000)
    }

    enterAddress(value) {
        cy.xpath(this.address).type(value)
    }

    enterCity(value) {
        cy.xpath(this.city).type(value)
    }

    enterState(value) {
        cy.xpath(this.state).type(value)
    }

    enterZip(value) {
        cy.xpath(this.zip).type(value)
    }

    enterPhone(value) {
        cy.xpath(this.phone).type(value)
    }

    enterSSN(value) {
        cy.xpath(this.ssn).type(value)
    }

    enterUsername(value) {
        cy.xpath(this.username).type(value)
    }

    enterPassword(value) {
        cy.xpath(this.password).type(value)
    }

    enterConfirmPassword(value) {
        cy.xpath(this.confirmPassword).type(value)
    }

    clickRegister() {
        cy.xpath(this.registerBtn).click()
    }
}
export default ParabankRegisterPage;
