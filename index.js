function addRow(tableId) {
  var table = document.getElementById(tableId);
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "<input type='text' />";
  cell2.innerHTML = "<input type='text' />";
  cell3.innerHTML = "<input type='text' />";
}

function pairTables() {
  var table1 = document.getElementById("table1");
  var table2 = document.getElementById("table2");

  var malesTable1 = [];
  var femalesTable1 = [];
  var malesTable2 = [];
  var femalesTable2 = [];

  for (var i = 1; i < table1.rows.length; i++) {
      var gender = table1.rows[i].cells[2].getElementsByTagName("input")[0].value.toLowerCase();
      if (gender === "male") {
          malesTable1.push(table1.rows[i]);
      } else if (gender === "female") {
          femalesTable1.push(table1.rows[i]);
      }
  }

  for (var j = 1; j < table2.rows.length; j++) {
      var gender = table2.rows[j].cells[2].getElementsByTagName("input")[0].value.toLowerCase();
      if (gender === "male") {
          malesTable2.push(table2.rows[j]);
      } else if (gender === "female") {
          femalesTable2.push(table2.rows[j]);
      }
  }

  shuffle(malesTable1);
  shuffle(malesTable2);
  shuffle(femalesTable1);
  shuffle(femalesTable2);

  console.log("Males Table 1:");
  console.log(malesTable1);
  console.log("Males Table 2:");
  console.log(malesTable2);
  console.log("Females Table 1:");
  console.log(femalesTable1);
  console.log("Females Table 2:");
  console.log(femalesTable2);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}
