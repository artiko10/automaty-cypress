describe('check Upload', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/upload"]').click()
      })
    
      it('Upload file', () => {
        cy.get('.form-control').attachFile('images/download.png')
        cy.get('[style="margin-top: 50px; display: flex; flex-direction: column;"] > button').click()
       

      });

      it('Downolad file', () => {
        cy.get('a > .btn').click()
       

      });

    });