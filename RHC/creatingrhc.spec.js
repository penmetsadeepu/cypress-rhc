describe('Dataingest creation ', () => {
    beforeEach('successfully loads', () => {
        cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
        //cy.visit('https://192.168.70.21/rhc/')
        cy.wait(10000);
        cy.get('#username').type('bb');
        cy.get('#password').type('bb');
        cy.get('.submit').click();
        cy.wait(10000);

    });
    describe('Verify "Login" is visible', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var i, j = 0; i < 1, j < 1; i++, j++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it('Create new patient', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(10000);
            for (var i, j = 0; i < 50, j < 50; i++, j++) {
                const lastName = random_text();
                const firstName = random_text();
                cy.wait(5000);
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(12000);
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(12000);
                cy.contains('Quick Mode off', { timeout: 2000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName + i);
                cy.get('[formcontrolname="firstName"]').type(firstName + j);
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Female"]', { timeout: 2000 }).click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="2010"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="August 2010"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="August 15, 2010"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(10000);
            }
        });
    });
});