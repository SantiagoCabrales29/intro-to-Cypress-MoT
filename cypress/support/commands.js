// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username,password) => {
    cy.get('[data-testid=username]').type(username);
    cy.get('[data-testid=password]').type(password);
    cy.get('[data-testid=submit]').click();
});

Cypress.Commands.add('fillBooking', (name, email, phone, subject, message) => {
        cy.get('#name').type(name);
        cy.get('#email').type(email);
        cy.get('#phone').type(phone);
        cy.get('#subject').type(subject);
        cy.get('#description').type(message);
        cy.get('#submitContact').click();
});
