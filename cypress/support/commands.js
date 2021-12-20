

Cypress.Commands.add("signIn", (email, password,) => {
    cy.visit('/', {failOnStatusCode: false})
    cy.intercept('https://lnkd.demdex.net/**').as('loadPage')
    cy.wait('@loadPage')
    cy.get('#session_key').type(email)
    cy.get('#session_password').type(password, {log: false})
    cy.get('button[class="sign-in-form__submit-button"]').click()
})

