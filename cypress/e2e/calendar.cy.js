import calendarPage from "./pages/calendarPage";

describe('check calendar', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/calendar"]').click()
      })
    
      it('Select range from your birthday to chrismas using dropdowns', () => {
        calendarPage.ChooseDateAndVerify()

      })

      it('Write incorrect date', () => {
      calendarPage.IncorrateDate()

      })

      it('Search using each function', () => {
       calendarPage.SearchDays()

    })

  })