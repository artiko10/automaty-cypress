describe('check buttons', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[href="/button"]').click()
  })

  it('open popup', () => {
   
    cy.get('.btn-danger').click()
    cy.get('.modal-title').should("contain", "Example popup");
    cy.get('.modal-footer > .btn').click()
  })

  it('check tooltip', () => {
    cy.get('.p-5 > :nth-child(5)').trigger('mouseover')
    cy.get('.tooltip-inner').should("contain", "This is tooltip")
  })

  it('check color button', () => {
    cy.get('.btn-primary').invoke('css', 'background-color').then(color => {
      cy.log(color)
      cy.get('.btn-primary').should('have.css', 'background-color', 'rgb(13, 110, 253)')
    })
  })

  it('check button is disabled', () => {
  cy.get('#root > div > section > div:nth-child(1) > div > div.col-sm-7 > div > button.btn.btn-lg.btn-warning').should('be.disabled')
  })

  it('click go to home and come back', () => {
    cy.get('.btn-secondary').click()
    cy.url().should('eq', 'http://localhost:3000/' )
    cy.get('[href="/button"]').click()
  })

  it('click button and check message', () => {
    cy.get('[aria-controls="example-fade-text"]').click()
    cy.get('#example-fade-text').should('have.text', 'Congratulations, you have successfully clicked the button!')
  })
})