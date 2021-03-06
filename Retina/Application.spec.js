describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(10000);
    })

    it('Creating the Application users', () => {
    cy.get('button').contains('menu').click();
    cy.get('button').contains('Monitor').click();
    cy.get('span.mat-button-wrapper').contains('Settings').click();
    cy.wait(1000);
    cy.get('button.mat-menu-item').contains('Retina').click();
    cy.wait(2000);
    cy.get('button.mat-menu-item').contains('Applications').click();
    cy.wait(20000);
    cy.get('span.mat-button-wrapper').contains('Create').click();
    cy.wait(2000);
    cy.get('[placeholder = "Tool"]').type('Cypress2');
    cy.get('[placeholder = "Title"]').type('Cypress1');
    cy.get('[placeholder = "Category"]').type('Cypress1');
    cy.get('[placeholder = "Sub-Category"]').type('Cypress1');
    cy.get('[placeholder = "Game grouping"]').type('Cypress1');
    cy.get('[placeholder = "Game Points"]').type('1');
    cy.get('[placeholder = "Productivity"]').click();
    cy.get('.mat-option-text').contains('Yes').click();
   // cy.get('.mat-option-text').contains('No').click();
    cy.get('[placeholder = "Application Name"]').type('Cypress1');
    cy.get('span.mat-button-wrapper').contains('Save').click();
    cy.wait(20000);
    //cy.get('span.mat-button-wrapper').contains('Cancel').click();
    cy.get('input[placeholder="Search & enter"]').type('Cypress2').type('{enter}');
    cy.wait(1000);
    cy.get('td.mat-cell').should('include.text', 'Cypress2');
    cy.wait(8000);

    //Edit the user
      cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin:eq(0)').click(); 
      cy.get('span.mat-button-wrapper').contains('Edit').click();
      cy.wait(2000);
      cy.get('[placeholder = "Category"]').clear().type('Cypress10');
      cy.get('[placeholder = "Sub-Category"]').clear().type('Cypress1');
      cy.get('[placeholder = "Game grouping"]').clear().type('Cypress10');
      cy.get('[placeholder = "Game Points"]').clear().type('10');
      cy.get('[placeholder = "Productivity"]').click();
      //cy.get('.mat-option-text').contains('Yes').click();
      cy.get('.mat-option-text').contains('No').click();
      cy.get('[placeholder = "Application Name"]').clear().type('Cypress_Aytomation');
      cy.get('span.mat-button-wrapper').contains('Save').click();
      cy.wait(20000);
      //cy.get('span.mat-button-wrapper').contains('Cancel').click();
      cy.get('input[placeholder="Search & enter"]').type('Cypress_Aytomation').type('{enter}');
      cy.wait(4000);
      cy.get('td.mat-cell').should('include.text', 'Cypress_Aytomation');
      cy.wait(3000);

    //Delete the User
      cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin:eq(0)').click(); 
      cy.get('span.mat-button-wrapper').contains('Delete').click();
      cy.get('input[placeholder="Search & enter"]').type('Cypress10').type('{enter}');
      cy.wait(2000);
    })

})



