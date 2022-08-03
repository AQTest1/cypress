import 'cypress-file-upload';

it('uploads a file in an Angular app', () => {

     const nit = '900399741'
     const contraseña = 'abc123$$'

     cy.viewport(800, 600)

     cy.visit('https://plcolabv3-web-qa.azurewebsites.net/')
     cy.wait(2000)
     //cy.get('#mat-input-0').should('be.visible').type(nit, { force: true })
     //cy.get('#mat-input-1').type(`${contraseña}{enter}`, { force: true })

     cy.get('#mat-input-0')
     .type('slow.typing@email.com', { delay: 200 })
     .should('have.value', 'slow.typing@email.com')
     //cy.get('input[type="file"]').attachFile("fixtu.png")

     // Upload button is active 




})

