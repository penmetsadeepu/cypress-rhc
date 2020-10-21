describe('login page', () => {

    beforeEach('successfully loads', () => {
    
    cy.visit('https://192.168.70.21/dataken');
    cy.wait(1000);
    cy.get('#username').type('admin');
    cy.get('#password').type('admin123');
    cy.get('.submit').click();
    cy.wait(3000);
    })
    it('View report & export(csv or excel)', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Report').click();
        cy.get('input[placeholder="Search & enter"]').type('7689tablereport16').type('{enter}');
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('span.mat-button-wrapper').contains('View').click();
        cy.wait(8000);

        //ToPdf
        //cy.get('span.mat-button-wrapper').contains('ToPdf').click();
        //cy.wait(2000);

        cy.get('span.mat-button-wrapper').contains('Chart Data').click();
        cy.wait(2000);

        //Export CSV
        //cy.get('span.mat-button-wrapper').contains('CSV').click();
        //cy.get('.mat-stroked-button').contains('No (Sample 5 rows)').click();
        //Export all Rows(max:500)
        //cy.get('.mat-stroked-button').contains('Yes').click();
        //cy.get('.mat-stroked-button').contains('Cancel').click();

        //Excel Import
        cy.get('span.mat-button-wrapper').contains('Excel').click();
        //cy.get('.mat-stroked-button').contains('No (Sample 5 rows)').click();
        //Export all Rows(max:500)
        cy.get('.mat-stroked-button').contains('Yes').click();
        //cy.get('.mat-stroked-button').contains('Cancel').click();     
    })

   it('View Dashboard & export(csv or excel)', () => {
        cy.get('[mattooltip="Visualize"]').click();
        cy.get('span.mat-button-wrapper').contains('Dashboard').click();
        cy.get('input[placeholder="Search & enter"]').type('7740_DB').type('{enter}');
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin').click();
        cy.get('span.mat-button-wrapper').contains('View').click();
        cy.wait(1000);

        //To PDF
        //cy.get('span.mat-button-wrapper').contains('TO PDF').click();
        

       ///csv Import
        //cy.get('.mat-button-ripple.mat-ripple').click({force: true});
        cy.get('i.fa.fa-cog').click({multiple: true});
        cy.get('.mat-menu-item').contains('Maximize').click();
        cy.get('i.fa.fa-table').click();
        cy.wait(2000);
        //cy.get('span.mat-button-wrapper').contains('CSV').click();
        
        //Export all Rows(max:500)
        //cy.get('button.mat-stroked-button').contains('Yes').click();
        //cy.get('.mat-stroked-button').contains('Cancel').click();

        //Excel Import
        cy.get('span.mat-button-wrapper').contains('Excel').click();
        
        //Export all Rows(max:500)
        cy.get('.mat-stroked-button').contains('Yes').click();
        //cy.get('.mat-stroked-button').contains('Cancel').click(); 
           
    })

})