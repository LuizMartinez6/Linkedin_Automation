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
        // cy.get('a[href="/mynetwork/"]').first().click()
        // cy.get('div[class="mn-community-summary__entity-info"]',{timeout: 30000}).first().click()
        // cy.get('#mn-connections-search-input').clear().type(nome)
        // cy.get('.mn-connection-card__name').contains(nome)
        // cy.get('.message-anywhere-button').first().click({force:true})
        // cy.get('div[aria-label="Escreva a mensagem…"]').type(mensagem,{delay:500})
        // cy.get('button[class="msg-form__send-button artdeco-button artdeco-button--1"]').click()
        // cy.get('.artdeco-toast-item__message > span').should('be.visible')
    })
    

})