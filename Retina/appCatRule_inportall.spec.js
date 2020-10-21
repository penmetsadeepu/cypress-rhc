describe('App Categarization Rules', () => {
    beforeEach('successfully loads', () => {
        cy.visit('https://192.168.70.19/dataken/');
        cy.wait(3000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(15000);
    })

    it('Create Business Unit', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Business Units').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(2000);
        cy.get('[placeholder="BU Name"]').type('Sampletest');
        cy.get('[placeholder="BU Description"]').type('Sampletest');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(3000);
        cy.get('.ui-inputtext').type('Sampletest')
        cy.get('.ui-button-icon-left').click();
        cy.wait(2000)
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 2);
        cy.wait(3000)
        cy.get('.ui-inputtext').clear()
        cy.get('.ui-button-icon-left').click();
        cy.wait(3000)
    });


    it('Import All Application_Profiles to BU other than Global', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Applications').click();
        cy.wait(5000);
        cy.get('.mat-select-value').click({ force: true });
        cy.get('.mat-option-text').contains('Sampletest').click();
        cy.get('span.mat-button-wrapper').contains('Import Global Apps').click();
        cy.wait(2000);
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 1);
        cy.wait(2000)
        cy.get('span.mat-button-wrapper').contains('Cancel').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Import Global Apps').click();
        cy.wait(5000);
        cy.get('span.mat-button-wrapper').contains('Import All').click();
        cy.wait(5000)
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 'be.gr' , 1);
    })
});