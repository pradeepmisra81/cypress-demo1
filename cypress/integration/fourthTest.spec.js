/// <reference types="cypress" />

// Test Cases for ngx-admin
describe('Test Suite 1', () => {

    it('Test Case for "Sign in" button with warning status', () => {

        cy.visit('https://akveo.github.io/ngx-admin/?utm_source=akveo_website&utm_medium=hompage&utm_campaign=github_block&__hstc=205619788.db88963c1f1e247ab3f912151e8ec9e2.1640420005059.1640420005059.1640433305997.2&__hssc=205619788.1.1640433305997&__hsfp=254261519');
        cy.wait(7000);

        cy.get('button[class="leadinModal-close"][aria-label="Close"]').then(() => {
            cy.get('button[class="leadinModal-close"][aria-label="Close"]').click();
        }) 

        cy.get('span[class="menu-title ng-tns-c44-2"]').contains('Demo').click();

        cy.contains('Forms').click();

        cy.contains('Form Layouts').click();

        cy.contains('[status="warning"]','Sign in');

        cy.get('#inputEmail3').parents('form').find('button');

    })

})