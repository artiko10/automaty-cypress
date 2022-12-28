import sliderPage from "./pages/sliderPage";

describe('check Slider', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/slider"]').click()
      })
    
      it('Change range to 20', () => {
       sliderPage.ChangeRangeToValue()
      });

      it('Set volume to 80%', () => {
       sliderPage.SetVolume()

      });

      it('Check if this slider is disabled', () => {
        sliderPage.VerifySliderIsDisabled()
      });
  });