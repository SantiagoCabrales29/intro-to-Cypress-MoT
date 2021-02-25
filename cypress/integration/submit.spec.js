/// <reference types="Cypress">

describe('Login feature', () => {
    beforeEach(() =>{
        cy.visit('https://automationintesting.online/#/admin'); 
        cy.fixture('login-details').as('data')
    });
    

  /*  it('should create a booking successfully', function () {
        cy.visit('https://automationintesting.online/#');
        cy.get('#name').type('Pedro Pascal');
        cy.get('#email').type('pedropascal@mail.com');
        cy.get('#phone').type(3123123123123123);
        cy.get('#subject').type('Our first test');
        cy.get('#description').type('This is the message of my new booking enquiry');
        cy.get('#submitContact').click();

        cy.get(':nth-child(2) > div > h2').should("contain",'Pedro Pascal');

        cy.visit('https://automationintesting.online/#/admin'); 
        cy.fixture('login-details').as('data');
       // const {username,password} = this.data;    // We are using destructuring
        cy.login("username","password");
        cy.get('#frontPageLink').should('be.visible');
    });
    */
    it('Test using @ to access the alias', () => {

 cy.visit('https://automationintesting.online/#');
        cy.get('#name').type('Pedro Pascal');
        cy.get('#email').type('pedropascal@mail.com');
        cy.get('#phone').type(3123123123123123);
        cy.get('#subject').type('Our first test');
        cy.get('#description').type('This is the message of my new booking enquiry');
        cy.get('#submitContact').click();

        cy.get(':nth-child(2) > div > h2').should("contain",'Pedro Pascal');

        cy.visit('https://automationintesting.online/#/admin'); 
        cy.get('@data').then((newData) => {
           const username = newData.validCredentials.username; 
           const password = newData.validCredentials.password; 

           cy.login(username,password);
        })
        cy.get('#frontPageLink').should('be.visible');
        cy.get("a[href='#/admin/messages']").click();
        cy.visit('https://automationintesting.online/#/admin/messages'); 
    });

   it('should login successfully if credentials are valid', function () {

        const {username,password} = this.data.validCredentials;    // We are using destructuring
        cy.login(username,password);
        cy.get('#frontPageLink').should('be.visible');
    });
    
});
