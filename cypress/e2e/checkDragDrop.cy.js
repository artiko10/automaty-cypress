describe('check dragDrop', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/drag"]').click()
      })
    
      it('Enter your name and press TAB', () => {
       const dataTransfer = new DataTransfer();
      // cy.get(':nth-child(2) > .m-3 > .card-body').drag(":nth-child(3) > .m-3 > .card-body")
      cy.get(':nth-child(2) > .m-3 > .card-body').trigger("dragstart", { dataTransfer });
      cy.get(':nth-child(3) > .m-3 > .card-body').trigger("drop", { dataTransfer });
      cy.get(':nth-child(2) > .m-3 > .card-body').trigger("dragend");
     // dndNative(":nth-child(2) > .m-3 > .card-body", ":nth-child(3) > .m-3 > .card-body", true);

       

      });

    })