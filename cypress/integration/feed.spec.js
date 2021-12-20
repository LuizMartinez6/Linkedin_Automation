/// <reference types="cypress" />

import {
    email,
    password
} from '../fixtures/credentials.json'

describe('Tests on the screen before the login', () => {
    beforeEach(() => {
        cy.signIn(email,password)
    })

    it("It searches for a user", () => {
        const user = 'Emerson Valentim'
        cy.get('#global-nav-search').type(user, {delay: 50})
        cy.get('div[role="option"]').first().click()
        cy.contains('span', user)
    })
})