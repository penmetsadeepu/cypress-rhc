

describe('login page', () => {
    beforeEach('successfully loads', () => {
    
    cy.visit('https://192.168.70.21/dataken');
    cy.wait(1000);
    cy.get('#username').type('admin');
    cy.get('#password').type('admin123');
    cy.get('.submit').click();
    cy.wait(3000);
    })
    
  it('create a Simple chart of dynamic type', () => {
            cy.get('[mattooltip="Visualize"]').click();
            cy.get('span.mat-button-wrapper').contains('Report').click();
            cy.get('span.mat-button-wrapper').contains('Create').click();
            cy.wait(1000);
            cy.get('button.mat-menu-item').contains('Simple').click({ force: true });
            cy.get('span.mat-button-wrapper').contains('Add Content').click();
            cy.wait(2000);
            cy.get('span.mat-select-placeholder').contains('Table').click();
            cy.get('span.mat-option-text').contains('Activitymetrics').click();
            cy.get('.ui-dropdown-label').contains('Column').click({ force: true });
            cy.wait(1000);
            cy.get('li').contains('UserDomainNAme').click({ force: true });
            cy.wait(2000);
            cy.get('[style="flex-direction: column; box-sizing: border-box; display: flex; flex: 1 1 0%;"] > :nth-child(3) > .mat-primary > .mat-button-wrapper').click();
            cy.get('span.mat-button-wrapper').contains('Render').click({force: true});
            cy.wait(3000);
            cy.get('span.mat-button-wrapper').contains('Save').click({force:true});
            cy.wait(2000);
            cy.get('[placeholder = "Report Name"]').type('simpl_tf');
            cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
            cy.wait(3000);
            cy.get('input[placeholder="Search & enter"]').type('simpl_tf').type('{enter}');
            cy.wait(2000);
            cy.get('td').should('include.text','simpl_tf')
            cy.wait(2000);
        })
        it('add Simple report to DB', () => {
            cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
            cy.get('span.mat-button-wrapper').contains('Dashboard').click();
            cy.get('span.mat-button-wrapper').contains('Create').click();
            cy.wait(3000);
            cy.get('.fa.fa-filter').click(); 
            cy.get('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget.ng-star-inserted').eq(0).type('simpl_tf').click();
            cy.wait(1000);
            cy.get('.ui-resizable-column.ng-star-inserted').contains('simpl_tf').dblclick();
            cy.wait(4000);

            //show TagFilters:
            //cy.get('.mat-slide-toggle-thumb').click();
            //cy.wait(1000);  
            cy.get('span.mat-button-wrapper').contains('CREATE TAGFILTER').click();
            cy.get('span.mat-content').contains('SIMPL_TF').click();
            cy.get('div').contains('ProductName').rightclick();
            cy.get('a.ng-star-inserted').contains(' Create TagFilter ').click();
            cy.get('[placeholder="value"]').clear().type('Zoom64289754');
            cy.get('span.mat-button-wrapper').contains('play_arrow').click();
            cy.get('span.mat-button-wrapper').contains('SAVE').click();
            cy.get('[placeholder="Name"]').type('simple_tf_DB');
            cy.get('.mat-stroked-button.mat-primary').contains('Save').click();
            cy.get('input[placeholder="Search & enter"]').type('simple_tf_DB').type('{enter}');
            cy.wait(2000);
            cy.get('td').should('include.text','simple_tf_DB')
            cy.wait(2000);
        })
    
})
