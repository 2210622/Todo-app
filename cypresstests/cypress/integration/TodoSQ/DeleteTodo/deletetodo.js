import { Console } from "console";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

var todo = ''
var todosBefore = 0

Given('I open the main page', () => {
 let url = Cypress.config().baseUrl;
 cy.visit(url)
})

And('I have a todo on the list', () => {
 todo = "todo";
 cy.get('input').type(todo)
 cy.get('#createform').submit()
 cy.wait(1000)
})

When('I click on the todo item thas was added to the list', () => {
 cy.get('.todo').then(elm => todosBefore = elm.length)
 cy.wait(500)
 cy.get('.todo:last-child()').click()
 cy.wait(1000)
})

Then('I see that it was deleted from the list', () => {
    if(todosBefore < 2){
        cy.get('.todo').should('not.exist')
    } else {
        cy.get('.todo').then(elm => expect(todosBefore).to.not.equal(elm.length))
    }
})
