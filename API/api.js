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
  // table.className = "table table-striped table-bordered";

  let x = 0;
  let header = document.createElement("tr");
  for (let i in arr[x]) {
    let heading = document.createElement("th");
    heading.textContent = i;
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
      if (key == "quote") {
        let quotediv = document.createElement("div");
        quotediv.className = "quotediv";
        cell.appendChild(quotediv);

        let quote = document.createElement("span");
        quote.className = "";
        quote.textContent = obj[key];
        quotediv.appendChild(quote);

        let button_div = document.createElement("div");
        button_div.className = "button_div";
        cell.appendChild(button_div);

        let delete_button = document.createElement("button");
        delete_button.className = "delete_button";
        delete_button.textContent = "Delete";
        button_div.appendChild(delete_button);
        let edit_button = document.createElement("button");
        edit_button.className = "edit_button";
        edit_button.textContent = "Edit";
        button_div.appendChild(edit_button);
        edit_button.addEventListener("click", function () {
          quote.contentEditable = true;
          quote.focus();
          quote.addEventListener("blur", function () {
            obj[key] = this.textContent;
            localStorage.setItem("apidata", JSON.stringify(parsed_data));
            quote.contentEditable = false;
          });
        });
        delete_button.addEventListener("click", function (e) {
          if (confirm("Are you sure you want to delete this quote?")) {
            row.remove();
            const index = arr.indexOf(obj);
            arr.splice(index, 1);
            localStorage.setItem("apidata", JSON.stringify(parsed_data));
          }
        });
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
}
