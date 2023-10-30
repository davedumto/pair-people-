
  const numberOfInputs = 70; // Change this value to adjust the number of inputs

  const generateTableRows = (tableId, tableNumber) => {
    const table = document.getElementById(tableId);
    for (let i = 0; i < numberOfInputs; i++) {
      table.innerHTML += `
        <tr>
          <td contenteditable="true">Name ${tableNumber}-${i + 1}</td>
          <td contenteditable="true">Phone ${tableNumber}-${i + 1}</td>
          <td contenteditable="true">Gender ${tableNumber === 1 ? 'Male' : 'Female'}</td>
        </tr>
      `;
    }
  };

  generateTableRows('table1', 1);
  generateTableRows('table2', 2);

  function pairPeople() {
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');
    const males1 = Array.from(table1.getElementsByTagName('tr')).filter(row => row.lastElementChild.textContent.toLowerCase().includes('male'));
    const males2 = Array.from(table2.getElementsByTagName('tr')).filter(row => row.lastElementChild.textContent.toLowerCase().includes('male'));
    const females1 = Array.from(table1.getElementsByTagName('tr')).filter(row => row.lastElementChild.textContent.toLowerCase().includes('female'));
    const females2 = Array.from(table2.getElementsByTagName('tr')).filter(row => row.lastElementChild.textContent.toLowerCase().includes('female'));

    males1.forEach((male, index) => {
      const male1Name = male.querySelector(':nth-child(1)').textContent;
      const male2 = males2[index];
      const male2Name = male2 ? male2.querySelector(':nth-child(1)').textContent : 'No Pair';

      const female = females1[index];
      const female1Name = female ? female.querySelector(':nth-child(1)').textContent : 'No Pair';
      const female2 = females2[index];
      const female2Name = female2 ? female2.querySelector(':nth-child(1)').textContent : 'No Pair';

      male.innerHTML += `<td>Paired with: ${male2Name}</td>`;
      if (male2) male2.innerHTML += `<td>Paired with: ${male1Name}</td>`;

      if (female) female.innerHTML += `<td>Paired with: ${female2Name}</td>`;
      if (female2) female2.innerHTML += `<td>Paired with: ${female1Name}</td>`;
    });

    if (males1.length < males2.length) {
      for (let i = males1.length; i < males2.length; i++) {
        const male2 = males2[i];
        male2.innerHTML += `<td>No Pair</td>`;
      }
    }

    if (females1.length < females2.length) {
      for (let i = females1.length; i < females2.length; i++) {
        const female2 = females2[i];
        female2.innerHTML += `<td>No Pair</td>`;
      }
    }
  }
