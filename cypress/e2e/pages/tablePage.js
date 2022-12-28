class tablePage {

    elements = { 
        TableThead : () =>  cy.get('#MyTable thead th'),
        AllRowtable : () => cy.get('#MyTable>tbody>tr'),
        ColumnTable : () => cy.get('#MyTable>tbody>tr:eq(0)>td'),
        TableAll : () => cy.get('#MyTable')
    }

    VerifyDataLoads() {
        this.elements.AllRowtable().should('have.length', 10)
        this.elements.ColumnTable().should('have.length', 5)
    }

    GetSingleRow() {
        this.elements.AllRowtable().eq(2).within(function(){
            cy.get('td').eq(3).should('contain.text', 'Purple')
          })
    }

    GetCell() {
        this.elements.TableAll().contains('Gaspard').parent().within(function(){
            cy.get('td').eq(4).then(function(websiteLink){
              cy.log(websiteLink.text())
            })
          })
    }

}
export default new tablePage();