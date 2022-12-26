describe('check Upload', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/upload"]').click()
      })
    
      it('Upload file', () => {
        cy.get('.form-control').attachFile('images/download.png')
        cy.get('[style="margin-top: 50px; display: flex; flex-direction: column;"] > button').click()
       

      });

      it('Downolad file', () => {
      //  cy.get('a > .btn').click()
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
        .then(() => {
          cy.task("getImageText", {
            fileName: "./mydownoloads/example.jpg",
            lang: "eng",
            logger: false,
          }).then((text) => {
            expect(text).tocontains("This is an example image")
          });
        });

      });

      // it('print file', () => {
      //   cy.get('.print__button').click()
       

      // });

    });