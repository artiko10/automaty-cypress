class DragDropPage {
    elements ={
        inputAddTask : () => cy.get('.inputAddTask'),
        btnAddTask : () => cy.get('.addTaskButton'),
    }

    AddNewTasks() {
        for (let i=1; i<10; i++){
            this.elements.inputAddTask().type('new task ' + i)
            this.elements.btnAddTask().click()
            this.elements.inputAddTask().clear()
             }
    }

    DragNewTasks() {
        const dataTransfer = new DataTransfer();
       for (let i=1; i<10; i++){
        cy.get('.TaskDisplayContainer > :nth-child(' + (i+2) + ')').trigger("dragstart", { dataTransfer });
        cy.get('.TaskDisplayContainer > :nth-child(' + (i) + ')').trigger("dragend");
       }
    }

    DeleteTasks() {
        for (let i=1; i<12; i++){
        cy.get('.TaskDisplayContainer > :nth-child(' + (i) + ')').click()
        }
    }
}

export default new DragDropPage();