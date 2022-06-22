import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

var url = ''

Given('I open the main page', () => {
    url = Cypress.config().baseUrl;
    cy.visit(url)
})

When('I click on the About button', () => {
    cy.get('.about-button').click()
    cy.wait(1000)
    //cy.visit(`${url}/todo/${todo}/edit`)
})

Then('I see that I am on the about page', () => {
    cy.url().should('eq', `${url}/todo/about`)
})