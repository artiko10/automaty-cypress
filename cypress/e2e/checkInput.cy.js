describe('check input', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/input"]').click()
      })
    
      it('Enter your name and press TAB', () => {
        cy.get('#formBasicEmail').type('Artur').invoke("prop", "value").then(imie => {
          expect(imie).to.contain("Artur")
        })
        cy.tab()
       
      })

      it('Copy the text from input', () => {
        cy.get(':nth-child(3) > .form-control').invoke("prop", "value").then(wartosc => {
          cy.log("Skopiowana wartość: " + wartosc)
        })
      })

      it('Enter the password and clear it', () => {
        cy.get('#formBasicPassword').type('Qwerty123').clear().invoke("prop", "value").then(clearpass => {
          expect(clearpass).to.contain("")
        })
      })

      it('Check if the field is disabled', () => {
        cy.get(':nth-child(7) > .form-control').should('be.disabled')
        })
      })
