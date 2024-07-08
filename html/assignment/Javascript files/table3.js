// the table of 3
function generateTableOfThree() {
    const tableContainer = document.getElementById('table-container');
    
    // new table element
    const table = document.createElement('table');
    
  
    for (let i = 1; i <= 10; i++) {
        // Create multiplication
        const row = document.createElement('tr');
        
        // Create cell 1 ("3 x 1")
        const cell1 = document.createElement('td');
        cell1.textContent = `3 x ${i}`;
        row.appendChild(cell1);
        
        // Create cell 2 ("= 3")
        const cell2 = document.createElement('td');
        cell2.textContent = `= ${3 * i}`;
        row.appendChild(cell2);
        
        // row to the table
        table.appendChild(row);
    }
    
    tableContainer.appendChild(table);
}


generateTableOfThree();