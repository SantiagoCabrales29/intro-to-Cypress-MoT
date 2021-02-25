/// <reference types="Cypress" />

describe('Checkboax', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');

        cy.get('h3').invoke('text').as('headingText');
    });

    it('Should assert the heading text correctly',function() {
        cy.get('@headingText').should('equal','Checkboxes');
        expect(this.headingText).to.equal('Checkboxes');
    });
});
