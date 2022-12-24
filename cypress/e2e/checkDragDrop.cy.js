describe('check dragDrop', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/drag"]').click()
      })
    
     
      it('Add new task and drag them', () => {

      for (let i=1; i<10; i++){
     cy.get('.inputAddTask').type('new task ' + i)
     cy.get('.addTaskButton').click()
     cy.get('.inputAddTask').clear()
      }
       const dataTransfer = new DataTransfer();
      cy.get('.TaskDisplayContainer > :nth-child(3)').trigger("dragstart", { dataTransfer });
      cy.get('.TaskDisplayContainer > :nth-child(1)').trigger("dragover");
      cy.get('.TaskDisplayContainer > :nth-child(1)').trigger("drop", { dataTransfer });
      cy.get('.TaskDisplayContainer > :nth-child(3)').trigger("dragend");
     

      });

    })