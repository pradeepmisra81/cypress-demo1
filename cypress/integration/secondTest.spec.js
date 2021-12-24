/// <reference types="cypress" />

describe('Test Suite 1', () => {

    it('Test Case 1', () => {
        cy.visit('https://pradeepmisra81.github.io/profile-website/');
    })

    it('Test Case 2', () => {
        cy.get('body > table:nth-child(1) > tbody > tr > td:nth-child(2) > h1').contains('Pradeep Misra');
    })

    it('Test Case 3', () => {
        cy.get('body > a').click();
    })

    it('Test Case 4', () => {
        cy.get('body > h1').contains('My Contact Details');
    })

})