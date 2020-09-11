describe('App Categarization Rules', () => {
    beforeEach('successfully loads', () => {
        //cy.visit('https://192.168.70.19:9449/auth/realms/Dataken/protocol/openid-connect/auth?response_type=code&client_id=Dataken-AIOPS&redirect_uri=https%3A%2F%2F192.168.70.19%2Fdataken%2Findex.html?random%3D0.77882400156930330.916181386152716&state=23a737ea-0d7f-462c-a9a4-089891c3d110&login=true&scope=openid')
        cy.visit('https://192.168.70.19/dataken/');
        cy.wait(3000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(5000);
    })
    it('Create App Categorization Rules witout selecting check box', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('App Categorization Rules').click();
        cy.wait(3000);
        for (var v = 0; v < 3; v++) {

            const Name = "testnwapp" + v;
            const Description = "application" + v;
            cy.get('span.mat-button-wrapper').contains('Create').click();
            cy.get('[placeholder="Name"]').type(Name, { timeout: 2000 });
            cy.get('[placeholder="Description"]').type(Description, { timeout: 2000 });
            cy.get('.mat-icon.notranslate.material-icons.mat-icon-no-color', { timeout: 2000 }).contains('add').click()
            cy.get('.mat-form-field-wrapper:eq(3)', { timeout: 2000 }).click({ force: true }).type('notepad')
            cy.get('[placeholder="Application Name"]', { timeout: 2000 }).type('newbrowser');
            cy.get('[placeholder="Productivity"]', { timeout: 2000 }).click()
            cy.get('.mat-option-text', { timeout: 2000 }).contains('Yes').click();
            cy.get('[placeholder="Category"]', { timeout: 2000 }).type('samplebrowser');
            cy.get('[placeholder="Sub-Category"]', { timeout: 2000 }).type('samplebrowser');
            cy.get('[placeholder="Game Grouping"]', { timeout: 2000 }).type('samplebrowser');
            cy.get('[placeholder="Game Points"]', { timeout: 2000 }).type('12');
            cy.get('span.mat-button-wrapper').contains('Save').click();
            cy.wait(4000);
        }
        cy.get('.ui-inputtext').type('testnwapp')
        cy.get('.ui-button-icon-left').click();
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 4);
        cy.wait(5000);
    });

    it('Edit the App Categorization Rules', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('App Categorization Rules').click();
        cy.wait(3000);
        cy.get('.ui-inputtext').type('testnwapp0')
        cy.get('.ui-button-icon-left').click();
        cy.get('[type=checkbox]', { timeout: 2000 }).check({ force: true });
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Edit').click();
        cy.get('[placeholder="Name"]').clear().type('appone');
        cy.get('[placeholder="Description"]').clear().type('browserone');
        cy.get('.mat-checkbox-inner-container')
        cy.get('[type=checkbox]', { timeout: 2000 }).check({ force: true });
        cy.wait(3000);
        cy.get('[placeholder="Expression"]').clear().type('*.newbrowser.*');
        cy.get('[placeholder="Application Name"]').clear().type('newbrowser');
        cy.get('[placeholder="Productivity"]').click()
        cy.get('.mat-option-text').contains('No').click();
        cy.get('[placeholder="Category"]').clear().type('QAtest');
        cy.get('[placeholder="Sub-Category"]').clear().type('QAtest');
        cy.get('[placeholder="Game Grouping"]').clear().type('QAtest');
        cy.get('[placeholder="Game Points"]').clear().type('10');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(3000);
        cy.get('.ui-inputtext').type('appone')
        cy.get('.ui-button-icon-left').click();
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 2);
        cy.wait(5000);
    })
    it('Delete App Categorization Rules ', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('App Categorization Rules').click();
        cy.wait(3000);
        cy.get('.ui-inputtext').type('testnwapp1')
        cy.get('.ui-button-icon-left').click();
        cy.get('[type=checkbox]', { timeout: 2000 }).check({ force: true });
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Delete').click();
        cy.get('.ui-inputtext').clear().type('testnwapp1')
        cy.get('.ui-button-icon-left').click();
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 1);
    })

    it('Create App Categorization Rules selecting check box', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('App Categorization Rules').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('[placeholder="Name"]').type('new_app');
        cy.get('[placeholder="Description"]').type('newbrowser');
        cy.get('.mat-checkbox-inner-container')
        cy.get('[type=checkbox]', { timeout: 2000 }).check({ force: true });
        cy.wait(3000);
        cy.get('[placeholder="Expression"]').type('*.newbrowser.*');
        cy.get('[placeholder="Application Name"]').type('newbrowser');
        cy.get('[placeholder="Productivity"]').click()
        cy.get('.mat-option-text').contains('Yes').click();
        cy.get('[placeholder="Category"]').type('samplebrowser');
        cy.get('[placeholder="Sub-Category"]').type('samplebrowser');
        cy.get('[placeholder="Game Grouping"]').type('samplebrowser');
        cy.get('[placeholder="Game Points"]').type('25');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(5000);
        cy.get('.ui-inputtext').type('new_app')
        cy.get('.ui-button-icon-left').click();
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 2);
        cy.wait(2000)
        cy.get('.ui-inputtext').clear().type('new_app')
        cy.get('.ui-button-icon-left').click();
        cy.wait(2000)


    })
});