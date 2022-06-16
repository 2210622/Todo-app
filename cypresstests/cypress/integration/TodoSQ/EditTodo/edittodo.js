import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

var todo = ''

Given('I open the main page', () => {
 let url = Cypress.config().baseUrl;
 cy.visit(url)
})

And('I have todos on the list', () => {
 todo = "todo";
 cy.get('input').type(todo)
 cy.get('form > button').click()
 cy.wait(1000)
})
/*
When('I click on the edit button', () => {
 cy.get('li:last-child()').contains(todo).click()
})
*/
When('I click on the edit button', () => {
 cy.get('.edit-button:last-child()')
 cy.wait(1000)
 cy.visit(`http://localhost:8080/todo/${todo}/edit`)
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
/*
Then('I see that it was deleted from the list', () => {
 cy.get('li:last-child()').not().contains(todo)
})
*/