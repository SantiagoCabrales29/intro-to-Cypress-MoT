/// <reference types="Cypress">

describe('Login feature', () => {
    beforeEach(() =>{
        cy.visit('https://automationintesting.online/#/admin'); 
        cy.fixture('login-details').as('data')
    });
    it('should login successfully if credentials are valid', function () {
        const {username,password} = this.data.validCredentials;    // We are using destructuring
        cy.login(username,password);
        cy.get('#frontPageLink').should('be.visible');
    });

    it('should not login successfully if credentials are incorrect', function() {
        const {username,password} = this.data.invalidCredentials;    // We are using destructuring
        cy.login(username,password);
        cy.get('#frontPageLink').should('not.exist')
    });

});
