class calendarPage {

    elements = { 
        SelectMonth : () =>  cy.get('.rdrMonthPicker > select'),
        SelectYear : () => cy.get('.rdrYearPicker > select'),
        Day13: () => cy.get(':nth-child(15) > .rdrDayNumber'),
        Day28 : () => cy.get(':nth-child(28) > .rdrDayNumber'),
        InputTo : () => cy.get('.rdrDateDisplayItemActive > input'),
        WarningTo : () => cy.get('.rdrWarning'),
        AllDays : () => cy.get('.rdrDays'),

    }


    ChooseDateAndVerify() {
        this.elements.SelectMonth().select('February')
        this.elements.SelectYear().select('1983')
        this.elements.Day13().click()
        this.elements.SelectMonth().select('December')
        this.elements.SelectYear().select('2022')
        this.elements.Day28().click()
        this.elements.InputTo().invoke("prop", "value").then(dateTo => {
          expect(dateTo).to.contain("Feb 13, 1983")
        })
    }

    IncorrateDate() {
        this.elements.InputTo().clear().type('incorrect date')
        cy.tab()
       this.elements.WarningTo().should('be.visible')

    }

    SearchDays() {
        this.elements.AllDays()
        .each(function($el, index, $list){
          console.log($el, index, $list)
        })
    }
}
export default new calendarPage();