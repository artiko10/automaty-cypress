import tablePage from "./pages/tablePage";

describe('check table', () => {

const tableHeader = [
  'Name',
  'Last name',
  'car',
  'color', 
  'city'
]

const tableDataUnsorted = [
  ['Nelle', 'Bodle', 'Mighty Max', 'Violet', "Konyshevka"],
  ['Orlan', 'MacKegg', 'Sportvan G20', 'Pink', "Fengle"],
  ['Olin', 'Elvins', 'LX', 'Purple', "Klinan"],
  ['Rosina', 'Furmage', 'Galant', 'Turquoise', "Shimen"],
  ['Clint', 'Purrier', 'Jetta', 'Fuscia', "Agiásos"],
  ['Joshuah', 'Kepling', 'LeMans', 'Orange', "Baturyn"],
  ['Netti', 'Blanche', 'Familia', 'Puce', "Dongning"],
  ['Peggi', 'Rorke', 'Suburban 2500', 'Turquoise', "Arroyo Salado"],
  ['Sheilah', 'Greenrod', 'G3', 'Pink', "Baie-Saint-Paul"],
  ['Gaspard', 'Baskerville', 'Grand Vitara', 'Khaki', "Lena"],
]

const tableDataSortedAsc= [
  ['Clint', 'Purrier', 'Jetta', 'Fuscia', "Agiásos"],
  ['Gaspard', 'Baskerville', 'Grand Vitara', 'Khaki', "Lena"],
  ['Joshuah', 'Kepling', 'LeMans', 'Orange', "Baturyn"],
  ['Nelle', 'Bodle', 'Mighty Max', 'Violet', "Konyshevka"],
  ['Netti', 'Blanche', 'Familia', 'Puce', "Dongning"],
  ['Olin', 'Elvins', 'LX', 'Purple', "Klinan"],
  ['Orlan', 'MacKegg', 'Sportvan G20', 'Pink', "Fengle"],
  ['Peggi', 'Rorke', 'Suburban 2500', 'Turquoise', "Arroyo Salado"],
  ['Rosina', 'Furmage', 'Galant', 'Turquoise', "Shimen"],
  ['Sheilah', 'Greenrod', 'G3', 'Pink', "Baie-Saint-Paul"],
  
]

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/table"]').click()
      })

      it('should verify table headers loads', () => {
        cy.get('#MyTable thead th').each(($el, index) => {
          cy.wrap($el).contains(tableHeader[index]);
        });
      });

      it('should verify table data is sorted ascending', () => {
        cy.get('#MyTable tbody tr').each(($row, rowIndex) => {
          cy.wrap($row).find('td').each(($cell, cellIndex) => {
            cy.wrap($cell).contains(tableDataUnsorted[rowIndex][cellIndex]);
          });
        });
  
        cy.get('thead > :nth-child(1)').click();
  
        cy.get('#MyTable tbody tr').each(($row, rowIndex) => {
          cy.wrap($row).find('td').each(($cell, cellIndex) => {
            cy.wrap($cell).contains(tableDataSortedAsc[rowIndex][cellIndex]);
          });
        });
      });
    
      it('should verify table data loads', () => {
        tablePage.VerifyDataLoads()

        cy.get('#MyTable>tbody>tr').each(function($row, index, $rows){
          cy.wrap($row).within(function(){
            cy.get('td').each(function($cellData, index, $columns){
              cy.log($cellData.text())
            })
          })
        })
      })

      it('get single row data', () => {
       tablePage.GetSingleRow()
      })

      it('get cell', () => {
        tablePage.GetCell()
      })

    })