describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(15000);
    });
it('Creating the users', () => {
    cy.get('button').contains('menu').click();
    cy.get('button').contains('Monitor').click();
    cy.get('span.mat-button-wrapper').contains('Settings').click();
    cy.wait(1000);
    cy.get('button.mat-menu-item').contains('Retina').click();
    cy.wait(3000);
    cy.get('button.mat-menu-item').contains('Employees').click();
    cy.wait(3000);
    cy.get('span.mat-button-wrapper').contains('Create').click();
    cy.wait(1000);
    cy.get('[placeholder = "EmployeeID"]').type('Cypress21');
    cy.get('[placeholder = "CompanyName / Domain Name"]').type('Automation');
    cy.get('[placeholder = "Username"]').type('Cypress00');
    cy.get('[placeholder = "FirstName"]').type('Cypress00');
    cy.get('[placeholder = "LastName"]').type('Auto');
    cy.get('[placeholder = "Role"]').type('Testing');
    cy.get('[placeholder = "Vertical"]').type('Script');
    cy.get('[placeholder = "BU"]').type('QA');
    cy.get('[placeholder = "DeviceModel / Machine Name"]').type('123/Sample');
    cy.get('span.mat-button-wrapper').contains('Save').click();
    //cy.get('span.mat-button-wrapper').contains('Cancel').click();
    cy.wait(2000);
    cy.get('input[placeholder="Search & enter"]').type('Cypress21').type('{enter}');
    cy.wait(2000);
    cy.get('td.mat-cell').should('include.text', 'Cypress21');
    cy.wait(5000);

    //Edit the user
      cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click(); 
      cy.get('span.mat-button-wrapper').contains('Edit').click();
      cy.wait(1500);
      cy.get('[placeholder = "CompanyName / Domain Name"]').clear().type('Automation1');
      cy.get('[placeholder = "Username"]').clear().type('Cypress_0');
      cy.get('[placeholder = "FirstName"]').clear().type('Cypress');
      cy.get('[placeholder = "LastName"]').clear().type('Auto');
      cy.get('[placeholder = "Role"]').clear().type('Testing');
      cy.get('[placeholder = "Vertical"]').clear().type('Script');
      cy.get('[placeholder = "BU"]').clear().type('QA');
      cy.get('[placeholder = "DeviceModel / Machine Name"]').clear().type('123/Sample');
      cy.get('span.mat-button-wrapper').contains('Save').click();
      cy.wait(2000);
      cy.get('input[placeholder="Search & enter"]').type('Cypress21').type('{enter}');
      cy.wait(2000);
      cy.get('td.mat-cell').should('include.text', 'Cypress21');
      cy.wait(5000);

    //Delete the user
      cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click(); 
      cy.get('span.mat-button-wrapper').contains('Delete').click();  
      cy.get('input[placeholder="Search & enter"]').type('Cypress21').type('{enter}');
      cy.wait(2000);

    })
    
})

