//
it('my first cypress test', () => {
    cy.wait (3000)
cy.visit('/')
cy.get(':nth-child(1) > .flex-col > .text-input'). click()
cy.get(':nth-child(1) > .flex-col > .text-input'). type('oadelua@gmail.com')
cy.get('#session_password'). click()
cy.get('#session_password'). type ('Bamidele01')
cy.get('.justify-between > .btn-md'). click()
cy.wait(3000)
cy.get('#msg-overlay-list-bubble-search__search-typeahead-input').click()
cy.get('#msg-overlay-list-bubble-search__search-typeahead-input').type('Adeyiga Ogunsi {enter}')
})