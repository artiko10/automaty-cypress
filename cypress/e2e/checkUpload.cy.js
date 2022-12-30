import uploadPage from "./pages/uploadPage";

describe('check Upload', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/upload"]').click()
      })
    
      it('Upload file', () => {
       uploadPage.UploadAndDeleteFile()
      });

      it('Downolad file fail', () => {
      uploadPage.DownloadFileFail()
      });

      it('print file', () => {
        uploadPage.PrintFile()
      });

    });