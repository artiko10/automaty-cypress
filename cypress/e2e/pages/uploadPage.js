class uploadPage {

    elements = {
        UploadInput : () => cy.get('.form-control'),
        btnDeleteImg : () =>  cy.get('[style="margin-top: 50px; display: flex; flex-direction: column;"] > button'),
        btnUploadFile : () => cy.get('.form-inline > .btn'),
        btnDownload : () => cy.get('a > .btn'),
    }

    UploadAndDeleteFile() {
       this.elements.UploadInput().attachFile('images/download.png')
       this.elements.btnDeleteImg().click()
       this.elements.UploadInput().attachFile('images/download.png')
       this.elements.btnUploadFile().click()
    }

    DownloadFileFail() {
       this.elements.btnDownload().click()
    }

    
}
export default new uploadPage();