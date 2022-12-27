import DragDropPage from "./pages/DragDropPage";

describe('check dragDrop', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/drag"]').click()
      })
    
     
      it('Add new task and drag them', () => {

        DragDropPage.AddNewTasks()
        DragDropPage.DragNewTasks()
       

      });

      it('Add new tasks and delete them', () => {
        DragDropPage.AddNewTasks()
        DragDropPage.DeleteTasks()
      })

    })