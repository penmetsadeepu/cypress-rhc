describe('Platform Login ', () => {
    beforeEach('successfully loads', () => {
      cy.visit('https://192.168.70.21/dataken/');
      cy.wait(3000);
      cy.get('#username').type('admin');
      cy.get('#password').type('admin123');
      cy.get('.submit').click();
      cy.wait(5000);
    })
    it('Plotting Retina Dashboard', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.wait(4000);
        cy.get('span.mat-button-wrapper').contains('Dashboard').click();
        cy.wait(4000);
        cy.get('[placeholder = "Search & enter"]').type('Productivity Dashboard{enter}');
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('span.mat-button-wrapper').contains('Edit').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('TAG FILTERS').click();
        //cy.viewport(1280,800);
        cy.get('.mat-menu-item.ng-star-inserted').contains('Show').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('TAG FILTERS').click();
        cy.get('.mat-menu-item.ng-star-inserted').contains('Hide').click();
        cy.wait(2000);
        cy.get('span.mat-button-wrapper').contains('TAG FILTERS').click();
        cy.get('.mat-menu-item.ng-star-inserted').contains('Create').click();
        cy.viewport(1280,800);
        cy.get('span.mat-content').contains('TOP IDLE-TIMES BY APPLICATION').click(); 
        cy.wait(1000);
        cy.get('.mat-list-item-content').contains('ActualCategory').rightclick();
        cy.wait(2000);
        cy.get('a.ng-star-inserted').contains('Create TagFilter').click();
        cy.get('[placeholder = "value"]').type('QA');
        cy.get('[mattooltip="Apply Filter"]').click();
        cy.wait(2000);
        cy.get('span.mat-button-wrapper').contains('SAVE').click();
        //cy.get('span.mat-button-wrapper').contains('Save').click();
    })
})