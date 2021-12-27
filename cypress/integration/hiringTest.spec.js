/// <reference types="cypress" />

describe('Test Suite 1', () => {

    it('Test Case 1', () => {
        cy.visit('https://www.smartrecruiters.com/');
    })

    it('Test Case 2', () => {
        cy.get("#main-footer > nav > div > div:nth-child(1) > div:nth-child(1) > a:nth-child(9)").click({force: true});
        cy.contains("Hiring Software Driven by Innovation");
    })

})