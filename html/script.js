var row = 1;

var submit = document.getElementById("submit");
submit.addEventListener("click", displayDetails);


function  displayDetails() {
    var number = document.getElementById("number").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if(!number || !name || !email ){
        alert("Please fill all the fields");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);
    var Cell1 = newRow.insertCell(0);
    var Cell2 = newRow.insertCell(1);
    var Cell3 = newRow.insertCell(2);

    Cell1.innerHTML = number;
    Cell2.innerHTML = name;
    Cell3.innerHTML = email;

    row++;


    }

    
