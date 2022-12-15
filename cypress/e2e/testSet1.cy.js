/// <reference types="cypress"/>

describe('first Step', ()=>{
    it('test', () => {
        cy.visit('http://google.com')
        cy.get('.gLFyf').type('How to train a dragon {enter}', {timeout:10000})
        //cy.contains('Cast').click()
     });
     it.only('Next', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.title('OrangeHRM')

    });
})
