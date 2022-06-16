import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

var todo = ''

Given('I open the main page', () => {
 let url = Cypress.config().baseUrl;
 cy.visit(url)
})

And('I have todos on the list', () => {
 for (let i = 0; i < 2; i++) {
    todo = "todo" + i;
    cy.get('input').type(todo)
    cy.get('#createform').submit()
    cy.wait(1000)
 }
})

When('I click on the delete all button', () => {
 cy.get('#deleteallform').submit()
})

Then('I see that all todos were deleted from the list', () => {
 cy.get('li').should('not.exist')
})
