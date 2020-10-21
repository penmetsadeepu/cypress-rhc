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

    it('Create Business Units & Edit & Delete', () => {
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
        cy.get('[placeholder="BU Name"]').type('Sample1');
        cy.get('[placeholder="BU Description"]').type('Sample1');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(3000);
        cy.get('.ui-inputtext').type('Sample1')
        cy.get('.ui-button-icon-left').click();
        cy.wait(2000)
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 2);

        //Edit the created BU and Save
        cy.get('.mat-checkbox-inner-container.mat-checkbox-inner-container-no-side-margin:eq(0)').click();
        cy.wait(1000);
        cy.get('.ui-inputtext').clear()
        cy.get('.ui-button-icon-left').click();
        cy.get('span.mat-button-wrapper').contains('Edit').click();
        cy.wait(2000);
        cy.get('[placeholder="BU Name"]').clear().type('QAtest');
        cy.get('[placeholder="BU Description"]').clear().type('QAtest');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(3000);
        cy.get('.ui-inputtext').type('QAtest')
        cy.get('.ui-button-icon-left').click();
        cy.wait(2000)
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 2);
        cy.wait(1000);


        //Create another BU and Delete
        //cy.get('.ui-inputtext').clear()
        //cy.get('.ui-button-icon-left').click();
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.wait(2000);
        cy.get('[placeholder="BU Name"]').type('QAtest1');
        cy.get('[placeholder="BU Description"]').type('QAtest1');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(3000);
        cy.get('.ui-inputtext').type('QAtest1')
        cy.get('.ui-button-icon-left').click();
        cy.get('span.mat-button-wrapper').contains('Delete').click();
        cy.get('.ui-inputtext').clear().type('QAtest1')
        cy.get('.ui-button-icon-left').click();
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 1);
    });

    it.skip('Create App Categorization Rules witout selecting check box', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('App Categorization Rules').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('[placeholder="Name"]').type('Firefox Browser', { timeout: 2000 });
        cy.get('[placeholder="Description"]').type('Firefox Browser', { timeout: 2000 });
        cy.get('.mat-icon.notranslate.material-icons.mat-icon-no-color', { timeout: 2000 }).contains('add').click()
        cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-value').click()
        cy.get('#mat-option-4 > .mat-option-text').click()
        cy.get('.mat-form-field-wrapper:eq(3)', { timeout: 2000 }).click({ force: true }).type('firefox.exe')
        cy.get('[placeholder="Application Name"]', { timeout: 2000 }).type('Firefox Browser');
        cy.get('[placeholder="Productivity"]', { timeout: 2000 }).click()
        cy.get('.mat-option-text', { timeout: 2000 }).contains('Yes').click();
        cy.get('[placeholder="Category"]', { timeout: 2000 }).type('Browsertesting');
        cy.get('[placeholder="Sub-Category"]', { timeout: 2000 }).type('QApurpose');
        cy.get('[placeholder="Game Grouping"]', { timeout: 2000 }).type('Browsertesting');
        cy.get('[placeholder="Game Points"]', { timeout: 2000 }).type('5');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(8000);
    })
    it.skip('Import Application_Profiles to BU other than Global', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Applications').click();
        cy.wait(5000);
        cy.get('.mat-select-value').click({ force: true });
        cy.get('.mat-option-text').contains('QAtest').click();
        cy.get('span.mat-button-wrapper').contains('Import Global Apps').click();
        cy.get('.mat-drawer-inner-container > app-material-table.ng-star-inserted > [fxfill=""] > [fxlayout="row"] > [fxlayoutalign="end center"] > .ui-inputgroup > .ui-inputtext').click().type('firefox.exe')
        cy.get('.mat-drawer-inner-container > app-material-table.ng-star-inserted > [fxfill=""] > [fxlayout="row"] > [fxlayoutalign="end center"] > .ui-inputgroup > .ui-button-warn > .ui-button-icon-left').click()
        cy.get('[type="checkbox"]', { timeout: 5000 }).check({ force: true })
        cy.wait(5000)
        cy.get('span.mat-button-wrapper').contains('Import').click();
        cy.wait(5000)


    })
});