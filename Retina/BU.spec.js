describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(7000);
    });

    /*it('Creating the BU users', () => {
    cy.get('button').contains('menu').click();
    cy.get('button').contains('Monitor').click();
    cy.get('span.mat-button-wrapper').contains('Settings').click();
    cy.wait(1000);
    cy.get('button.mat-menu-item').contains('Retina').click();
    cy.wait(2000);
    cy.get('button.mat-menu-item').contains('Business Units').click();
    cy.wait(2000);
    cy.get('span.mat-button-wrapper').contains('Create').click();
    cy.wait(1000);
    cy.get('[placeholder = "BU Name"]').type('Cypress1');
    cy.get('[placeholder = "BU Description"]').type('Automation');
    cy.get('span.mat-button-wrapper').contains('Save').click();
    cy.get('[placeholder = "Search & enter"]').type('cypress1').type('{enter}');
    cy.wait(1000);
    cy.get('td.mat-cell').should('include.text', 'Cypress1')
    })*/


     //Edit the BU user
    it('Creating the BU users', () => {
      cy.get('button').contains('menu').click();
      cy.get('button').contains('Monitor').click();
      cy.get('span.mat-button-wrapper').contains('Settings').click();
      cy.wait(1000);
      cy.get('button.mat-menu-item').contains('Retina').click();
      cy.wait(2000);
      cy.get('button.mat-menu-item').contains('Business Units').click();
      cy.wait(2000);
      cy.get('[placeholder = "Search & enter"]').type('cypress').type('{enter}');
      cy.wait(3000);
      cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
      cy.wait(1000);
      cy.get('span.mat-button-wrapper').contains('Edit').click();
      cy.wait(1000);
      cy.get('[placeholder = "BU Name"]').clear().type('Cypress1');
      cy.get('[placeholder = "BU Description"]').clear().type('Automation');
      cy.get('span.mat-button-wrapper').contains('Save').click();
      cy.get('[placeholder = "Search & enter"]').type('cypress1').type('{enter}');
      cy.wait(1000);
      cy.get('td.mat-cell').should('include.text', 'Cypress1')
      })

     //Delete the BU user
    it('Delete the BU user', () => {
      cy.get('button').contains('menu').click();
    cy.get('button').contains('Monitor').click();
    cy.get('span.mat-button-wrapper').contains('Settings').click();
    cy.wait(1000);
    cy.get('button.mat-menu-item').contains('Retina').click();
    cy.wait(2000);
    cy.get('button.mat-menu-item').contains('Business Units').click();
    cy.wait(2000);
    cy.get('[placeholder = "Search & enter"]').type('cypress1').type('{enter}');
    cy.wait(3000);
    cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
    cy.wait(1000);
    cy.get('span.mat-button-wrapper').contains('Delete').click();
   cy.get('span.mat-button-wrapper').contains('Yes').click();
})
})