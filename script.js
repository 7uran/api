let tablo = document.querySelector(".dataTable");
let tBody = document.querySelector("tbody"); 


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        addData(data); 
    });

function addData(data) {
    data.forEach(post => { 
        let row = document.createElement('tr');
        
        Object.values(post).forEach((value) => {
            let cell = document.createElement('td');
            cell.textContent = value; 
            row.appendChild(cell); 
        });

        tBody.appendChild(row); 
    });
}
