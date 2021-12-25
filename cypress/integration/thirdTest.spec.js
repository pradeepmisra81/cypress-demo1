/// <reference types="cypress" />

describe('Test Suite 1', () => {

    it('Test Case 1', () => {
        cy.visit('https://akveo.github.io/ngx-admin/?utm_source=akveo_website&utm_medium=hompage&utm_campaign=github_block&__hstc=205619788.db88963c1f1e247ab3f912151e8ec9e2.1640420005059.1640420005059.1640433305997.2&__hssc=205619788.1.1640433305997&__hsfp=254261519');
    })

    it('Test Case 2', () => {
        cy.get('body > ngx-landing-app > ngx-landing-pages > ngx-landing-home > nb-layout > div.scrollable-container > div > nb-layout-header > nav > ngx-landing-header > div.section.middle > div > nb-menu > ul > li.menu-item.ng-tns-c44-2.ng-star-inserted > a > span').click();
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    })

})