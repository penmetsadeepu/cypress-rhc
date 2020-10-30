describe('login page', () => {
    beforeEach('successfully loads', () => {
    
    cy.visit('https://192.168.70.21/dataken');
    cy.wait(1000);
    cy.get('#username').type('admin');
    cy.get('#password').type('admin123');
    cy.get('.submit').click();
    cy.wait(3000);
    })
    
  it('create a bar chart', () => {
            cy.get('[mattooltip="Visualize"]').click();
            cy.get('span.mat-button-wrapper').contains('Report').click();
            cy.get('span.mat-button-wrapper').contains('Create').click();
            cy.wait(1000);
            cy.get('div.mat-menu-content').contains('Charts').click();
            cy.get('button.mat-menu-item').contains('Bar').click({ force: true });
            cy.wait(1000);
            cy.get('span.mat-content').contains('ACTIVITYMETRICS').click();
            cy.get('div').contains('BeginTimeUtc').trigger('dragstart');
            cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
            cy.get('div').contains('UserDomainNAme').trigger('dragstart');
            cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
            cy.get('span.mat-button-wrapper').contains('Render').click();
            cy.wait(3000);
            cy.get('span.mat-button-wrapper').contains('Save').click();
            cy.wait(1000);
            cy.get('[placeholder = "Report Name"]').type('bar_mtf');
            cy.wait(1000);
            cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
            cy.wait(1000);
            cy.get('input[placeholder="Search & enter"]').type('bar_mtf').type('{enter}');
            cy.wait(3000);
            cy.get('td').should('include.text','bar_mtf');
            cy.wait(4000);   
  })
  
            
            //line chart
            it('create a line chart', () => {
                cy.get('[mattooltip="Visualize"]').click();
                cy.get('span.mat-button-wrapper').contains('Report').click();
                cy.get('span.mat-button-wrapper').contains('Create').click();
                cy.wait(1000);
                cy.get('div.mat-menu-content').contains('Charts').click();
                cy.get('button.mat-menu-item').contains('Line').click({ force: true });
                cy.wait(1000);
                cy.get('span.mat-content').contains('ACTIVITYMETRICS').click();
                cy.get('div').contains('BeginTimeUtc').trigger('dragstart');
                cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
                cy.get('div').contains(' TotalTime ').trigger('dragstart');
                cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
                cy.get('span.mat-button-wrapper').contains('Render').click();
                cy.wait(3000);
                cy.get('span.mat-button-wrapper').contains('Save').click();
                cy.wait(1000);
                cy.get('[placeholder = "Report Name"]').type('line_mtf');
                cy.wait(1000);
                cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
                cy.wait(1000);
                cy.get('input[placeholder="Search & enter"]').type('line_mtf').type('{enter}');
                cy.wait(3000);
                cy.get('td').should('include.text','line_mtf');
                cy.wait(4000);   
             }) 
            
                
                //pie chart
                it('create a pie chart', () => {
                    cy.get('[mattooltip="Visualize"]').click();
                    cy.get('span.mat-button-wrapper').contains('Report').click();
                    cy.get('span.mat-button-wrapper').contains('Create').click();
                    cy.wait(1000);
                    cy.get('div.mat-menu-content').contains('Charts').click();
                    cy.get('button.mat-menu-item').contains('Pie').click({ force: true });
                    cy.wait(1000);
                    cy.get('span.mat-content').contains('CSV2HBSE20').click();
                    cy.get('div').contains('BeginDate').trigger('dragstart');
                    cy.get('[placeholder = "Drag and Drop Data Model (X-Axis)"]').trigger('drop');
                    cy.get('div.mat-chip-list-wrapper').contains('BeginDate').click();
                    cy.get('[placeholder = "Select Date Range"]').click({force: true});
                    cy.get('span.mat-option-text').contains('THIS_YEAR').click();
                    cy.get('span.mat-button-wrapper').contains('APPLY').click();
                    cy.get('div').contains('Vertical').trigger('dragstart');
                    cy.get('[placeholder = "Drag and Drop Data Model (Y-Axis)"]').trigger('drop');
                    cy.get('span.mat-button-wrapper').contains('Render').click();
                    cy.wait(3000);
                    cy.get('span.mat-button-wrapper').contains('Save').click();
                    cy.wait(1000);
                    cy.get('[placeholder = "Report Name"]').type('pie_mtf');
                    cy.wait(1000);
                    cy.get('span.mat-button-wrapper').contains('SAVE').click({force:true});
                    cy.wait(1000);
                    cy.get('input[placeholder="Search & enter"]').type('pie_mtf').type('{enter}');
                    cy.wait(3000);
                    cy.get('td').should('include.text','pie_mtf');
                    cy.wait(2000);    
                })

                it('add report to DB', () => {
                    cy.get('[mattooltip="Visualize"] > .mat-button-wrapper > .fa').click();
                    cy.get('span.mat-button-wrapper').contains('Dashboard').click();
                    cy.get('span.mat-button-wrapper').contains('Create').click();
                    cy.wait(3000);
                    cy.get('.fa.fa-filter').click(); 
                    cy.wait(1000);
                    cy.get('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget.ng-star-inserted').eq(0).type('bar_mtf').click();
                    cy.wait(1000);
                    cy.get('.ui-resizable-column.ng-star-inserted').contains('bar_mtf').dblclick();
                    cy.wait(4000);
                    cy.get('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget.ng-star-inserted').eq(0).clear().type('line_mtf').click();
                    cy.wait(1000);
                    cy.get('.ui-resizable-column.ng-star-inserted').contains('line_mtf').dblclick();
                    cy.wait(4000);
                    cy.get('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget.ng-star-inserted').eq(0).clear().type('pie_mtf').click();
                    cy.wait(1000);
                    cy.get('.ui-resizable-column.ng-star-inserted').contains('pie_mtf').dblclick();
            
                    cy.get('span.mat-button-wrapper').contains('CREATE TAGFILTER').click();
                    cy.wait(1000);
                    cy.get('span.mat-content').contains('BAR_MTF').click();
                    cy.wait(2000);
                    cy.get('.mat-list-item-content').contains(' BeginTimeUtc ').rightclick();
                    cy.wait(2000);
                    cy.get('a.ng-star-inserted').contains(' Create TagFilter ').click();
                    cy.get(2000);
                    cy.get('[placeholder="Duration"]').click();
                    cy.get('span.mat-option-text').contains(' THIS_YEAR ').click();
                    cy.get('span.mat-button-wrapper').contains('play_arrow').click();
                    cy.wait(3000);

                    cy.get('[mattooltip="Tag Filter Edit"]').click();
                    cy.wait(3000);
                   cy.get('[placeholder= "Operator"]').click();
                   cy.get(1000);
                   //cy.get('span.mat-option-text').contains('GREATER_THAN').click();
                   cy.get('span.mat-option-text').contains('BETWEEN').click();
                   cy.wait(2000);
                   cy.get('label.mat-checkbox-layout').contains('Enable MultiTag').click();
                   cy.get('span.mat-button-wrapper').contains('add_circle_outline').click();
                   cy.get('div.mat-select-value').contains('Report').click();
                   cy.get('span.mat-option-text').contains('bar_mtf').click();
                   cy.get('div.mat-select-value').contains('Column').click();
                   cy.get('span.mat-option-text').contains('BeginTimeUtc').click();
                   cy.get('span.mat-button-wrapper').contains('add_circle_outline').click();
                   cy.get('div.mat-select-value').contains('Report').click();
                   cy.get('span.mat-option-text').contains('line_mtf').click();
                   cy.get('div.mat-select-value').contains('Column').click();
                   cy.get('span.mat-option-text').contains('BeginTimeUtc').click();
                   cy.get('span.mat-button-wrapper').contains('add_circle_outline').click();
                   cy.get('div.mat-select-value').contains('Report').click();
                   cy.get('span.mat-option-text').contains('pie_mtf').click();
                   cy.get('div.mat-select-value').contains('Column').click();
                   cy.get('span.mat-option-text').contains('bgtime').click();
                   cy.wait(1000);
                   
                   cy.get('[fxflex="10px"] > :nth-child(3) > .mat-button-wrapper').contains('SAVE').click();
                   cy.wait(4000);
                   cy.get('[placeholder="Duration"]').click();
                   cy.wait(1000);
                   //cy.get('span.mat-option-text').contains(' LAST_YEAR ').click();
                   cy.get('span.mat-option-text').contains('CUSTOM_DATE').click();
                   cy.wait(1000);
                   
                   cy.get('[placeholder= "From Date"]').contains('ui-btn').click({force: true});
                   cy.wait(1000);
                   //cy.get('.tagfilter > .ui-inputtext').click();
                   cy.get('.ui-datepicker-month').select('September');
                   cy.get('.ui-datepicker-year').select('2020');
                   cy.get('.ui-state-default').contains('2').click({force: true});
                   cy.wait(1000);

                   cy.get('[placeholder= "To Date"]').contains('ui-btn').click({force: true});
                   cy.wait(1000);
                   cy.get('.ui-datepicker-month').select('October');
                   cy.get('.ui-datepicker-year').select('2020');
                   cy.get(':nth-child(5) > :nth-child(5) > .ui-state-default').contains('29').click({force: true});
                   cy.get('.ui-state-default').contains('29').click({force: true});
                   cy.wait(1000);

                   cy.get('span.mat-button-wrapper').contains('play_arrow').click({force :true});
                   cy.wait(6000);
                   cy.get('span.mat-button-wrapper').contains('SAVE').click();
                   cy.wait(1000);
                   cy.get('[placeholder="Name"]').type('sample_mtf_DB');
                  cy.get('.mat-stroked-button.mat-primary').contains('Save').click();
                  cy.wait(1000);
                  cy.get('input[placeholder="Search & enter"]').type('sample_mtf_DB').type('{enter}');
                  cy.wait(2000);
                  cy.get('td').should('include.text','sample_mtf_DB')
                  cy.wait(2000);


                    
                })


            })
        
    