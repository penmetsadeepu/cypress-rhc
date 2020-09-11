describe('Verify "Login" is visible', () => {
    beforeEach('successfully loads', () => {
        cy.visit('https://192.168.70.21:8444/auth/realms/rhc/protocol/openid-connect/auth?client_id=rhc-automation&redirect_uri=https%3A%2F%2F192.168.70.21%2Frhc%2F&state=004b8d9b-f82d-45ae-8e41-3d6387890d73&response_mode=fragment&response_type=code&scope=openid&nonce=1776e3fd-f375-4b12-9b5c-61d40f4697a0');
        cy.wait(2000);
        cy.get('#username').type('bb');
        cy.get('#password').type('bb');
        cy.get('.submit').click();
        cy.wait(8000);

    });
    describe('RHC Patients Creation', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var x, y = 0; x < 5, y < 5; x++, y++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it('Create new patient', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(10000);
            for (var x, y = 0; x < 10, y < 10; x++, y++) {
                const lastName = random_text();
                const firstName = random_text();
                cy.wait(2000);
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(3000);
                //cy.get('.mat-step-text-label.ng-star-inserted', { timeout: 8000}).should('include.text', 'New Patient Form', { timeout: 8000}).click({ multiple: true });
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(3000);
                cy.contains('Quick Mode off', { timeout: 2000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName + x);
                cy.get('[formcontrolname="firstName"]').type(firstName + y);
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Female"]', { timeout: 2000 }).click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="2010"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="August 2010"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="August 15, 2010"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(8000);
            }
        });
    });

    describe('RHH Patients Creation', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var i, j = 0; i < 5, j < 5; i++, j++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it('Create new patient as RHH Patient in Quick mode', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(10000);
            for (var i, j = 0; i < 10, j < 10; i++, j++) {
                const lastName = random_text();
                const firstName = random_text();
                cy.wait(5000);
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(5000);
                //cy.get('.mat-step-text-label.ng-star-inserted', { timeout: 6000}).should('include.text', 'New Patient Form', { timeout: 8000}).click({ multiple: true });
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(3000);
                cy.get('label.ng-star-inserted', { timeout: 2000 }).contains('Patient Type*')
                cy.get('.mat-radio-outer-circle:eq(1)', { timeout: 5000 }).click({ force: true });
                cy.contains('Quick Mode off', { timeout: 2000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName + i, { timeout: 2000 });
                cy.get('[formcontrolname="firstName"]').type(firstName + j, { timeout: 2000 });
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Male"]', { timeout: 2000 }).click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('.mat-calendar-previous-button', { timeout: 2000 }).click();
                cy.get('[aria-label="1980"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="October 1980"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="October 10, 1980"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(8000);
            }
        });
    });
    describe('RHC Patients Creation', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var k, l = 0; k < 5, l < 5; k++, l++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it('Create new patient as RHC patient in Quick mode', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(10000);
            for (var k, l = 0; k < 10, l < 10; k++, l++) {
                const lastName = random_text();
                const firstName = random_text();
                cy.wait(2000);
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(3000);
                //cy.get('.mat-step-text-label.ng-star-inserted', { timeout: 6000}).should('include.text', 'New Patient Form', { timeout: 8000}).click({ multiple: true });
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(3000);
                cy.get('label.ng-star-inserted', { timeout: 2000 }).contains('Patient Type*')
                cy.get('.mat-radio-outer-circle:eq(0)', { timeout: 5000 }).click({ force: true });
                cy.contains('Quick Mode off', { timeout: 2000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName + k, { timeout: 2000 });
                cy.get('[formcontrolname="firstName"]').type(firstName + l, { timeout: 2000 });
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Female"]', { timeout: 2000 }).click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('.mat-calendar-previous-button', { timeout: 2000 }).click();
                cy.get('.mat-calendar-previous-button').click();
                cy.wait(2000)
                cy.get('[aria-label="1960"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="June 1960"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="June 16, 1960"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(8000);
            }
        });
    });
    describe('RHC Patients Creation', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var r, s = 0; r < 5, s < 5; r++, s++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it('Create new patient as RHC patient in full mode', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(10000);
            for (var r, s = 0; r < 10, s < 10; r++, s++) {
                const lastName = random_text();
                const firstName = random_text();
                cy.wait(3000);
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(8000);
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(5000);
                cy.get('label.ng-star-inserted', { timeout: 2000 }).contains('Patient Type*')
                cy.get('.mat-radio-outer-circle:eq(0)', { timeout: 5000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName + r, { timeout: 2000 });
                cy.get('[formcontrolname="firstName"]').type(firstName + s, { timeout: 2000 });
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Male"]').click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('.mat-calendar-previous-button', { timeout: 2000 }).click();
                cy.get('[aria-label="1979"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="February 1979"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="February 14, 1979"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper', { timeout: 2000 }).click({ multiple: true });
                cy.get(':nth-child(4) > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000 }).click({ force: true });
                cy.get('.mat-option-text:eq(0)', { timeout: 2000 }).click({ multiple: true });
                cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000 }).click({ force: true });
                cy.get('.mat-option-text', { timeout: 2000 }).contains('physician1', { timeout: 2000 }).click({ force: true });
                cy.get('label.ng-star-inserted').contains('Representative*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Yes"]').click({ force: true });
                cy.get('[formcontrolname="lasName"]').clear().type('rep1');
                cy.get('[formcontrolname="firName"]').clear().type('rep2');
                cy.get(':nth-child(8) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000 }).click({ force: true });
                cy.get('.mat-option-text', { timeout: 2000 }).contains('Spouse', { timeout: 2000 }).click({ force: true });
                cy.get('label.ng-star-inserted').as('include.text', 'Representative Type*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Patient Selected"]').click({ force: true })
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Legally Authorized"]').click({ force: true })
                cy.get('label.ng-star-inserted').as('include.text', 'Guarantor Type*')
                //cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000}).find('[value="Self"]').click({force: true})
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Spouse"]').click({ force: true })
                cy.get('[formcontrolname="LastName"]').type('sp1');
                cy.wait(1000)
                cy.get('[formcontrolname="FirstName"]').type('sp2');
                cy.wait(1000)
                cy.get('[formcontrolname="address1"]').type('add1');
                cy.wait(1000)
                cy.get('[formcontrolname="zipCode"]').type('56789');
                cy.wait(1000)
                cy.get('[formcontrolname="city"]').clear().type('city1');
                cy.wait(1000)
                cy.get(':nth-child(13) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000 }).click({ multiple: true });
                cy.wait(1000)
                cy.get('.mat-option-text', { timeout: 2000 }).contains('CA', { timeout: 3000 }).click({ force: true });
                cy.get('[formcontrolname="phone"]').clear().type('9999999999');
                cy.wait(3000)
                cy.get('label.ng-star-inserted').as('include.text', 'Payment')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 5000 }).find('[value="Private Pay"]').click({ force: true })
                cy.wait(3000)
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(8000);
            }
        });
    });
    describe('RHH Patients Creation', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var p, q = 0; p < 5, q < 5; p++, q++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it('Create new patient as RHH Patient in full mode', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(5000);
            for (var p, q = 0; p < 10, q < 10; p++, q++) {
                const lastName = random_text();
                const firstName = random_text();
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(5000);
                //cy.get('.mat-step-text-label.ng-star-inserted', { timeout: 6000}).should('include.text', 'New Patient Form', { timeout: 8000}).click({ multiple: true });
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(5000);
                cy.get('label.ng-star-inserted', { timeout: 2000 }).contains('Patient Type*')
                cy.get('.mat-radio-outer-circle:eq(1)', { timeout: 5000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName + p, { timeout: 2000 });
                cy.get('[formcontrolname="firstName"]').type(firstName + q, { timeout: 2000 });
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Male"]').click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="2000"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="September 2000"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="September 8, 2000"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper', { timeout: 2000 }).click({ multiple: true });
                cy.get(':nth-child(4) > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000 }).click({ force: true });
                cy.get('.mat-option-text:eq(1)', { timeout: 2000 }).click({ multiple: true });
                cy.get(':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix', { timeout: 2000 }).click({ force: true });
                cy.get('.mat-option-text', { timeout: 2000 }).contains('physician2', { timeout: 2000 }).click({ force: true });
                cy.get('label.ng-star-inserted', { timeout: 2000 }).contains('Representative*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="No"]').click({ force: true })
                cy.get('label.ng-star-inserted').contains('Guarantor Type*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Self"]').click({ force: true })
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Commercial Insurance"]').click({ force: true })
                cy.wait(3000)
                cy.get('[formcontrolname="medicareNum"]', { timeout: 2000 }).type('2233555');
                cy.wait(3000)
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(8000);
            }
        });
    });

    describe('RHC Patients Creation', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var u = 0; u < 5; u++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it('Create new patient in Quick mode', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(5000);
            for (var u = 0; u < 10; u++) {

                const firstName = "James" + u;
                const lastName = "William" + u;
                cy.wait(3000);
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(5000);
                //cy.get('.mat-step-text-label.ng-star-inserted', { timeout: 6000}).should('include.text', 'New Patient Form', { timeout: 8000}).click({ multiple: true });
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(5000);
                cy.contains('Quick Mode off', { timeout: 2000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName, { timeout: 2000 });
                cy.get('[formcontrolname="firstName"]').type(firstName, { timeout: 2000 });
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Female"]', { timeout: 2000 }).click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('.mat-calendar-previous-button', { timeout: 2000 }).click();
                cy.get('.mat-calendar-previous-button', { timeout: 2000 }).click();
                cy.get('[aria-label="1970"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="July 1970"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="July 17, 1970"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(8000);
            }

        });
    });
    describe('RHC Patients Creation', function () {
        function random_text() {

            var text = "";

            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

            for (var v = 0; v < 5; v++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
        it.skip('Create new patient', () => {
            cy.get('span.mat-button-wrapper').contains('Patients', { timeout: 5000 }).click();
            cy.wait(3000);
            for (var v = 0; v < 10; v++) {

                const firstName = "tom" + v;
                const lastName = "moody" + v;
                cy.wait(5000);
                cy.get('[href="#/patients/newpatient"]', { timeout: 5000 }).click({ force: true });
                cy.wait(5000);
                //cy.get('.mat-step-text-label.ng-star-inserted', { timeout: 6000}).should('include.text', 'New Patient Form').click({ multiple: true });
                cy.get('.mat-step-label.mat-step-label-active.mat-step-label-selected', { timeout: 5000 }).as('include.text', 'New Patient Form', { timeout: 8000 })
                cy.get('div.mat-step-label').contains('New Patient Form').click({ multiple: true });
                cy.wait(5000);
                cy.contains('Quick Mode off', { timeout: 2000 }).click({ force: true });
                cy.get('[formcontrolname="lastName"]').type(lastName, { timeout: 2000 });
                cy.get('[formcontrolname="firstName"]').type(firstName, { timeout: 2000 });
                cy.get(':nth-child(3) > [style="width: 24%; margin-right: 30px;"]', { timeout: 2000 }).should('include.text', 'Sex*')
                cy.get('mat-radio-button.mat-radio-button.mat-accent', { timeout: 2000 }).find('[value="Male"]', { timeout: 2000 }).click({ force: true })
                cy.get(':nth-child(4) > .mat-form-field-type-mat-input > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-datepicker-toggle-default-icon', { timeout: 2000 }).click()
                cy.get('.mat-calendar-arrow', { timeout: 2000 }).click({ multiple: true })
                cy.get('.mat-calendar-previous-button', { timeout: 2000 }).click();
                cy.get('.mat-calendar-previous-button', { timeout: 2000 }).click();
                cy.get('[aria-label="1972"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="July 1972"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('[aria-label="July 20, 1972"] > .mat-calendar-body-cell-content', { timeout: 2000 }).click({ multiple: true })
                cy.get('span.mat-button-wrapper', { timeout: 2000 }).contains('Submit').click({ force: true });
                cy.wait(8000);
            }
        });
    });

});

