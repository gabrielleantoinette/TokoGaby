document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === "admin" && password === "admin") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('stockSection').style.display = 'block';
    } else {
        alert('Username atau Password salah');
    }
});

document.getElementById('stockForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var itemName = document.getElementById('itemName').value;
    var itemQuantity = document.getElementById('itemQuantity').value;
    var itemPrice = document.getElementById('itemPrice').value;

    var table = document.getElementById('stockTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = itemName;
    cell2.innerHTML = itemQuantity;
    cell3.innerHTML = itemPrice;

    document.getElementById('stockForm').reset();
});
