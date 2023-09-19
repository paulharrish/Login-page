const storedData = localStorage.getItem("jsonData");

if (storedData) {
  displayData(JSON.parse(storedData));
} else {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/quotes", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

      const data = response.quotes;

      localStorage.setItem("jsonData", JSON.stringify(data));

      displayData(data);
    }
  };
  xhr.send();
}

function displayData(data) {
  const tableBody = document.getElementById("table-body");

  data.forEach((item) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    idCell.textContent = item.id;
    const quoteCell = document.createElement("td");
    quoteCell.textContent = item.quote;
    const authorCell = document.createElement("td");
    authorCell.textContent = item.author;
    const actionsCell = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger";
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn btn-success";
    deleteButton.addEventListener("click", () => {
      row.remove();
      let index = data.indexOf(item);
      data.splice(index, 1);
      localStorage.setItem("jsonData", JSON.stringify(data));
    });

    editButton.addEventListener("click", () => {
      if (editButton.textContent === "Edit") {
        [quoteCell, authorCell].forEach((cell) => {
          cell.contentEditable = true;
        });
        editButton.textContent = "Save";
      } else {
        [quoteCell, authorCell].forEach((cell) => {
          cell.contentEditable = false;
        });
        item.quote = quoteCell.textContent;
        item.author = authorCell.textContent;
        localStorage.setItem("jsonData", JSON.stringify(data));
        editButton.textContent = "Edit";
      }
    });

    row.appendChild(idCell);
    row.appendChild(quoteCell);
    row.appendChild(authorCell);
    row.appendChild(actionsCell);

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    tableBody.appendChild(row);
  });
  let clearallbtn = document.getElementById("btn_clearall");
  clearallbtn.addEventListener("click", () => {
    tableBody.remove();
    localStorage.removeItem("jsonData");
  });
  let logoutbtn = document.getElementById("btn_logout");
  logoutbtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.replace("../html/main.html");
  });
}
