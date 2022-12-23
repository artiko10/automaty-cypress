describe('check dragDrop', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/drag"]').click()
      })
    
      it('Enter your name and press TAB', () => {
     //   cy.get('.p-3 > :nth-child(2)').drag('.p-3 > :nth-child(3)')
       const dataTransfer = new DataTransfer();
      // cy.get(':nth-child(2) > .m-3 > .card-body').drag(":nth-child(3) > .m-3 > .card-body")
      cy.get('.p-3 > :nth-child(2)').trigger("dragstart", { dataTransfer });
      cy.get('.p-3 > :nth-child(5)').trigger("dragover");
      cy.get('.p-3 > :nth-child(5)').trigger("drop", { dataTransfer });
      cy.get('.p-3 > :nth-child(2)').trigger("dragend");
     // dndNative(":nth-child(2) > .m-3 > .card-body", ":nth-child(3) > .m-3 > .card-body", true);

       

      });

    })