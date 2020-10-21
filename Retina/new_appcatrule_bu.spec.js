describe('App Categarization Rules', () => {
    beforeEach('successfully loads', () => {
        cy.visit('https://192.168.70.21/dataken/');
        cy.wait(3000);
        cy.get('#username').type('admin');
        cy.get('#password').type('admin123');
        cy.get('.submit').click();
        cy.wait(5000);
    })
    it('Create Business Units', () => {
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
        cy.get('[placeholder="BU Name"]').type('test1BU');
        cy.get('[placeholder="BU Description"]').type('test1BU');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(5000);
        cy.get('.ui-inputtext').type('test1BU')
        cy.wait(5000);
        cy.get('.ui-button-icon-left').click();
        cy.wait(2000)
        cy.get('app-material-table.ng-star-inserted > [fxfill=""] > [fxflex=""]').find('tr').should('have.length', 2);
        cy.wait(3000)
    })
    it('Import Application_Profiles to BU other than Global', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Applications').click();
        cy.wait(5000);
        cy.get('.mat-select-value').click({ force: true });
        cy.get('.mat-option-text').contains('test1BU').click();
        cy.get('span.mat-button-wrapper').contains('Import Global Apps').click({force: true});
        cy.get('.mat-drawer-inner-container > app-material-table.ng-star-inserted > [fxfill=""] > [fxlayout="row"] > [fxlayoutalign="end center"] > .ui-inputgroup > .ui-inputtext').click().type('firefox.exe')
        cy.get('.mat-drawer-inner-container > app-material-table.ng-star-inserted > [fxfill=""] > [fxlayout="row"] > [fxlayoutalign="end center"] > .ui-inputgroup > .ui-button-warn > .ui-button-icon-left').click()
        cy.get('[type="checkbox"]', { timeout: 5000 }).check({ force: true })
        cy.wait(8000)
        cy.get('span.mat-button-wrapper').contains('Import').click();
        cy.wait(8000)
        

    })
    it('Create App Categorization Rules without selecting check box', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('App Categorization Rules').click();
        cy.wait(3000);
        cy.get('span.mat-button-wrapper').contains('Create').click();
        cy.get('[placeholder="Name"]').type('chrome', { timeout: 2000 });
        cy.get('[placeholder="Description"]').type('chrome', { timeout: 2000 });
        cy.wait(3000)
        //cy.get('.mat-icon.notranslate.material-icons.mat-icon-no-color', { timeout: 2000 }).contains('add').click({force: true})
        //cy.get('.mat-button-wrapper > .mat-icon').contains('add').should('be.visible').click({force: true})
        cy.get('.q-button-group > :nth-child(1) > .mat-button-wrapper > .mat-icon').click({force: true})
        cy.get('.mat-form-field-wrapper:eq(3)', { timeout: 2000 }).click({ force: true }).type('chrome.exe')
        cy.wait(3000)
        cy.get('[placeholder="Application Name"]', { timeout: 2000 }).type('krishna');
        cy.wait(3000)
        cy.get('[placeholder="Productivity"]', { timeout: 2000 }).click()
        cy.get('.mat-option-text', { timeout: 2000 }).contains('Yes').click();
        cy.wait(3000)
        //cy.get(':nth-child(8) > .mat-icon-button > .mat-button-wrapper > .mat-icon').click({force: true})
        /*cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon:eq(6)').click({force: true})
        cy.wait(3000)
        cy.get('.form-box > .mat-icon-button.mat-primary > .mat-button-wrapper > .mat-icon').click()
        cy.get('.mat-form-field-infix').type('Development')
        cy.get('.cdk-focused > .mat-button-wrapper').contains('Save').click()*/

        cy.get('.mat-select-trigger > .mat-select-value > .mat-select-placeholder:eq(0)').should('include.text','Category').click()
        cy.get('.mat-option-text').contains('Development').click()
        cy.wait(3000)
        /*cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon:eq(7)').click({force: true})
        cy.wait(3000)
        cy.get('.form-box > .mat-icon-button.mat-primary > .mat-button-wrapper > .mat-icon').click()
        cy.get('.mat-form-field-infix').type('Development')
        cy.get('.cdk-focused > .mat-button-wrapper').contains('Save').click()*/
        
        cy.get('.mat-select-trigger > .mat-select-value > .mat-select-placeholder:eq(0)').should('include.text','Sub-Category').click()
        cy.get('.mat-option-text').contains('Development').click()
        cy.wait(3000)
        
        /*cy.get('.mat-icon-button > .mat-button-wrapper > .mat-icon:eq(8)').click({force: true})
        cy.wait(3000)
        cy.get('.form-box > .mat-icon-button.mat-primary > .mat-button-wrapper > .mat-icon').click()
        cy.get('.mat-form-field-infix').type('Development')
        cy.get('.cdk-focused > .mat-button-wrapper').contains('Save').click()*/
        cy.get('.mat-select-trigger > .mat-select-value > .mat-select-placeholder:eq(0)').should('include.text','Game Grouping').click()
        cy.get('.mat-option-text').contains('Development').click()
        cy.wait(3000)
        cy.get('[placeholder="Game Points"]', { timeout: 2000 }).clear().type('50');
        //cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.get('[fxfill=""] > [fxflex="50px"] > .mat-primary > .mat-button-wrapper').contains('Save').click({force: true});
        cy.wait(8000);
        /*cy
        .get('[placeholder="Category"]', { timeout: 2000 })
        .get('.mat-icon notranslate material-icons mat-icon-no-color').click({force: true})
        cy.get('[placeholder="Category"]', { timeout: 2000 }).type('SRK');
        cy.get('[placeholder="Sub-Category"]', { timeout: 2000 }).type('SRK');
        cy.get('[placeholder="Game Grouping"]', { timeout: 2000 }).type('SRK');
        cy.get('[placeholder="Game Points"]', { timeout: 2000 }).type('50');
        cy.get('span.mat-button-wrapper').contains('Save').click();
        cy.wait(8000);*/
    })
    it('Apply App Categorization Rules to Application(application name) in BU', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Applications').click();
        cy.wait(8000);
        cy.get('.mat-select-value').click({ force: true });
        cy.get('.mat-option-text').contains('test1BU').click();
        cy.wait(5000)
        //cy.get('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget').type('OUTLOOK.EXE')
        cy.get('.ui-inputtext').type('chrome.exe')
        cy.get(5000)
        cy.get('.ui-button-warn > .ui-button-icon-left').click()
        cy.wait(5000)
        cy.get('[type="checkbox"]:eq(0)', { timeout: 5000 }).check({ force: true })
        cy.wait(10000)
        cy.get('span.mat-button-wrapper').contains('Run App Cat Rules').click();
        cy.get(2000)
        cy.get('span.mat-button-wrapper').contains('Application Name').click();
        cy.get(8000)
        cy.get('.ui-inputtext').clear()
        cy.get('.ui-inputtext').clear().type('chrome.exe')
        cy.get(3000)
        cy.get('.ui-button-warn > .ui-button-icon-left').click()
        cy.wait(3000)
        cy.get('.mat-cell.cdk-column-Application-Name.mat-column-Application-Name.ng-star-inserted').should('include.text', 'krishna')
        cy.get('.ui-inputtext').clear()
        cy.wait(3000)
        cy.get('.ui-inputtext').clear().type('krishna')
        cy.get(3000)
        cy.get('.ui-button-warn > .ui-button-icon-left').click()
        cy.wait(3000)
    })
    it('Apply App Categorization Rules to Application(all propeties) in BU', () => {
        cy.get('button').contains('menu').click();
        cy.get('button').contains('Monitor').click();
        cy.get('span.mat-button-wrapper').contains('Settings').click();
        cy.wait(1000);
        cy.get('button.mat-menu-item').contains('Retina', { timeout: 5000 }).click();
        cy.wait(3000);
        cy.get('button.mat-menu-item').contains('Applications').click();
        cy.wait(5000);
        //cy.get('.ui-inputtext.ui-corner-all.ui-state-default.ui-widget').type('OUTLOOK.EXE')
        cy.get('.ui-inputtext').type('chrome.exe')
        cy.get(3000)
        cy.get('.ui-button-warn > .ui-button-icon-left').click()
        cy.wait(3000)
        cy.get('[type="checkbox"]:eq(0)', { timeout: 5000 }).check({ force: true })
        cy.get('span.mat-button-wrapper').contains('Run App Cat Rules').click();
        cy.get(2000)
        cy.get('span.mat-button-wrapper').contains('All Properties').click();
        cy.get(8000)
        cy.get('.ui-inputtext').clear()
        cy.wait(1000)
        cy.get('.ui-inputtext').clear().type('chrome.exe')
        cy.get(3000)
        cy.get(3000)
        cy.get('.ui-button-warn > .ui-button-icon-left').click()
        cy.wait(3000)
        cy.get('.mat-cell.cdk-column-Application-Name.mat-column-Application-Name.ng-star-inserted').should('include.text', 'krishna')
        cy.get('.ui-inputtext').clear()
        cy.wait(3000)
        cy.get('.ui-inputtext').clear().type('krishna')
        cy.get(2000)
        cy.get('.ui-button-warn > .ui-button-icon-left').click()
        cy.wait(3000)
        cy.get('.mat-cell.cdk-column-Tool.mat-column-Tool.ng-star-inserted').should('include.text', 'chrome.exe')
        //cy.get('mat-cell.cdk-column-Title.mat-column-Title.ng-star-inserted').should('include.text' , 'OUTLOOK.EXE')
        cy.get('.mat-cell.cdk-column-Category.mat-column-Category.ng-star-inserted').should('include.text', 'Development')
        cy.get('.mat-cell.cdk-column-Sub-Category.mat-column-Sub-Category.ng-star-inserted').should('include.text', ' Development ')
        cy.get('.mat-cell.cdk-column-Game-Grouping.mat-column-Game-Grouping.ng-star-inserted').should('include.text', 'Development')
        cy.get('.mat-cell.cdk-column-Application-Name.mat-column-Application-Name.ng-star-inserted').should('include.text', 'krishna')
        cy.get('.mat-cell.cdk-column-Productivity.mat-column-Productivity.ng-star-inserted').should('include.text', 'true')
        cy.get('.ui-inputtext').clear()
        cy.wait(3000)
        cy.get('.ui-inputtext').clear().type('50')
        cy.get(3000)
        cy.get('.ui-button-warn > .ui-button-icon-left').click()
        cy.wait(3000)
    })
})
