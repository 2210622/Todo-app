import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

var todo = ''
var url = ''

Given('I open the main page', () => {
 url = Cypress.config().baseUrl;
 cy.visit(url)
})

And('I have todos on the list', () => {
 todo = "todo";
 cy.get('input').type(todo)
 cy.get('#createform').submit()
 cy.wait(1000)
})

When('I click on the edit button', () => {
 cy.get('.edit-button').last().click()
 //cy.visit(`${url}/todo/${todo}/edit`)
})

And('I change the content of the todo', () => {
    todo = "hello";
    cy.get('input').clear()
    cy.get('input').type(todo)
    cy.get('form > button').click()
    cy.wait(1000)
})

Then('I see that the todo has changed', () => {
    cy.wait(1000)
    cy.get('li').contains(todo)
})

And('I remove what was written', () => {
    cy.get('input').clear()
    cy.get('form > button').click()
    cy.wait(1000)
})

Then('I should stay on the same page', () => {
    cy.url().should('eq', `${url}/todo/${todo}/edit`)
})
