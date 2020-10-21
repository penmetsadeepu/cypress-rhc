describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.19/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(7000);
    });

    it('Creating the BU users', () => {
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
    cy.get('[placeholder = "BU Name"]').type('CypressBU1');
    cy.get('[placeholder = "BU Description"]').type('Automation');
    cy.viewport(1280, 800);
    cy.get('[placeholder = "Enable Vision"]').contains('Yes',{timeout: 2000}).dblclick({force: true});
    cy.wait(3000);
    //cy.get('[placeholder = "Enable Vision"]').contains('No').click({force: true});
    //cy.viewport(1280, 800);
    cy.get('[placeholder = "Screenshot Frequency"]').clear({force: true}).type('15',{force: true});
    cy.wait(2000);
    cy.get('[placeholder = "Screenshot Difference Percentage"]').clear({force: true}).type('97',{force: true});
    cy.viewport(1280, 800);
    cy.get('[placeholder = "Override Vision Config"]').contains('No').click({force: true});
    //cy.get('[placeholder = "Override Vision Config"]').contains('Yes').click({force: true});
    cy.get('[placeholder = "Grab Screenshot Mode"]').contains('FREQUENCY').click({force: true});
    //cy.get('[placeholder = "Grab Screenshot Mode"]').contains('WINDOW_CHANGE').click();
    cy.get('[placeholder = "Image Retain Disk Size(Mb`s)"]').clear({force: true}).type(100,{force: true});
    cy.get('span.mat-button-wrapper').contains('Save').click({force: true});
    cy.wait(2000)
    cy.get('[placeholder = "Search & enter"]').type('CypressBU1').type('{enter}');
    cy.wait(1000);
    cy.get('td.mat-cell').should('include.text', 'CypressBU1');
    cy.get('span.mat-button-wrapper').contains('Settings').click();
    cy.wait(1000);
    cy.get('button.mat-menu-item').contains('Retina').click();
    cy.wait(2000);
    cy.get('button.mat-menu-item').contains('Applications').click();
    cy.wait(2000);
    cy.get('.mat-select-arrow').click();
    cy.wait(1000);
    cy.get('.mat-option-text').contains('CypressBU1').click();


     /*//Edit the BU user
      cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin:eq(0)').click();
      cy.wait(1000);
      cy.get('span.mat-button-wrapper').contains('Edit').click();
      cy.wait(3000);
      cy.get('[placeholder = "BU Name"]').clear().type('Cypress10');
      cy.get('[placeholder = "BU Description"]').clear().type('Automation');
      cy.get('span.mat-button-wrapper').contains('Save').click();
      cy.wait(2000);
      cy.get('[placeholder = "Search & enter"]').type('cypress10').type('{enter}');
      cy.wait(1000);
      cy.get('td.mat-cell').should('include.text', 'Cypress10')

     //Delete the BU user
    cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin:eq(0)').click();
    cy.wait(1000);
    cy.get('span.mat-button-wrapper').contains('Delete').click();
    cy.get('span.mat-button-wrapper').contains('Yes').click();
    cy.get('[placeholder = "Search & enter"]').type('cypress10').type('{enter}');
    cy.wait(1000);*/

})
})