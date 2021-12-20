/// <reference types="cypress" />

import {
    email,
    name,
    password
} from '../fixtures/credentials.json'

describe('Sing In page', () => {

    it('Sing In with the wrong password', () => {
        cy.signIn(email, 12345678)
        cy.get('#error-for-password').should('be.visible')
    })
    
    it('Sing In with the wrong credentials and go to human verificantion', () => {
        cy.signIn(123456789, 12345678)
        cy.get('h1').should('be.visible')
    })

    it('Sing in the page', () => {
        cy.signIn(email, password)
        cy.contains('div', name)
    })
    

})