let existing_apidata = localStorage.getItem("apidata");

if (existing_apidata == null) {
  let req = new XMLHttpRequest();

  req.onload = function () {
    localStorage.setItem("apidata", this.responseText);
    let fetched_apidata = localStorage.getItem("apidata");
    displaying_elements(fetched_apidata);
  };

  req.open("GET", "https://dummyjson.com/quotes", true);
  req.send();
} else {
  displaying_elements(existing_apidata);
}

function displaying_elements(data) {
  let parsed_data = JSON.parse(data);
  let arr = parsed_data.quotes;

  let table = document.createElement("table");
  table.id = "table";
  table.className = "table table-striped table-bordered";

  let x = 0;
  let header = document.createElement("tr");
  for (let i in arr[x]) {
    let heading = document.createElement("th");
    heading.textContent = i;
    heading.setAttribute("contenteditable", "true");
    header.appendChild(heading);
  }
  table.appendChild(header);

  for (let obj of arr) {
    table.appendChild(createrow(obj));
  }

  let container = document.createElement("div");
  container.className = "container-fluid";
  container.appendChild(table);
  document.body.appendChild(container);

  function createrow(obj) {
    let row = document.createElement("tr");
    for (let key in obj) {
      let cell = document.createElement("td");
      cell.setAttribute("contenteditable", "true");

      if (key == "quote") {
        let quote = document.createElement("span");
        quote.className = "blockquote";
        quote.textContent = obj[key];
        cell.appendChild(quote);
      } else if (key == "author") {
        let author = document.createElement("span");
        let cite = document.createElement("cite");
        cite.textContent = obj[key];
        author.className = "blockquote-footer ";
        author.appendChild(cite);
        cell.appendChild(author);
      } else {
        cell.textContent = obj[key];
      }
      row.appendChild(cell);
    }
    return row;
  }

  table.addEventListener("input", function (e) {
    const element = e.target;
    const rowIndex = element.parentNode.rowIndex - 1;
    const columnIndex = element.cellIndex;
    const newValue = element.textContent;

    if (rowIndex >= 0 && columnIndex >= 0) {
      arr[rowIndex][Object.keys(arr[rowIndex])[columnIndex]] = newValue;
      localStorage.setItem("apidata", JSON.stringify({ quotes: arr }));
    }
  });
}

//Task completed.
