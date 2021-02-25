/// <reference types="Cypress">

describe('Login feature', () => {
    beforeEach(() =>{
        cy.visit('https://automationintesting.online/#'); 
        cy.fixture('login-details').as('data');
        cy.fixture('booking-info').as('booking');
    });

     it('Test using @ to access the alias', function() {

        cy.get('@booking').then((bookingData) => {
           const name = bookingData.name;
           const email = bookingData.email;
           const phone = bookingData.phone;
           const subject = bookingData.subject;
           const message = bookingData.message;

           cy.fillBooking(name,email,phone, subject, message);
        })
        cy.get(':nth-child(2) > div > h2').should("contain",this.booking.name);

        cy.visit('https://automationintesting.online/#/admin'); 
        cy.get('@data').then((newData) => {
           const username = newData.validCredentials.username; 
           const password = newData.validCredentials.password; 

           cy.login(username,password);
        })
        cy.get('#frontPageLink').should('be.visible');
        cy.get("a[href='#/admin/messages']").click();
        cy.visit('https://automationintesting.online/#/admin/messages');
        cy.get('#message0 > .col-sm-2 > p');

        cy.get('.col-sm-2').each(() => {
        }).then(($list) => {
            console.log('El tamaño de la lista es : '+$list.length);
            expect($list).to.contain.text(this.booking.name);
        });
    });

   it('Create Booking refactored', function () {
        const {name,email,phone,subject,message} = this.booking;
        cy.fillBooking(name,email,phone, subject, message);

        cy.get(':nth-child(2) > div > h2').should("contain",this.booking.name);
        cy.visit('https://automationintesting.online/#/admin'); 

        const {username,password} = this.data.validCredentials;    
        cy.login(username,password);
        cy.get('#frontPageLink').should('be.visible');

        cy.get("a[href='#/admin/messages']").click();
        cy.visit('https://automationintesting.online/#/admin/messages');

        cy.get('#message0 > .col-sm-2 > p');  

      //I had to add this due to a problem. If I didn't add this add the list of messages in the /admin/messages didn't showed the right values.
      //It only showed Name and Subject as an empty List.

        cy.get('.col-sm-2').each(() => {
        }).then((list) => {
            expect(list).to.contain.text(this.booking.name);
        });
    });

   after(() => {
      //This will delete all the booking enquiries.
      cy.get('span[class*="fa fa"]').click({multiple:true})
      
      /*
      Try to delete only the enquiries created in this test. PENDING
      cy.get('.col-sm-2').each(($el,index) => {
         if($el.get(index).should('have.text',this.booking.name)){
             cy.get('span[class*="fa fa"]').click({multiple:true})

         }
      }).then(() => {});
      */
   });
    
});
