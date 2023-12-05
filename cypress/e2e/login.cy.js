import {login} from "../fixtures/selectors.js";
describe("Given I am on the login  page", () => {
    beforeEach ( () => {
        cy.visit('/')
    });
it('my second cypress test usuing selectors commands', () => {
    cy.wait(3000)
    cy.get(login.emailorphoneField).click ()
    cy.get(login.emailorphoneField).type ('oadelua@gmail.com')
    cy.get(login.passwordField).click ()
    cy.get(login.passwordField).type (login.passwordText)
    cy.get(login.signinField).click ()
    cy.get(login.bubblesearchIcon).click
    cy.get(login.bubblesearchIcon).type ('Adeyiga Ogunsi')

})
})

