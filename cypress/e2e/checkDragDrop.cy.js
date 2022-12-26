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
       for (let i=1; i<10; i++){
        cy.get('.TaskDisplayContainer > :nth-child(' + (i+2) + ')').trigger("dragstart", { dataTransfer });
        cy.get('.TaskDisplayContainer > :nth-child(' + (i) + ')').trigger("dragend");
       }

      });

    })