const container = document.getElementById("rows-container");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");

let rowCount = 1;
const maxRows = 6;
// change the number of cols depends on the letters u got.
let numcol = 5; 

function isRowFull(row) {
    const inputs = row.querySelectorAll("input");
    return Array.from(inputs).every(input => input.value.trim() !== "");
}

submitBtn.addEventListener("click", () => {
    const rows = container.querySelectorAll(".row");
    const lastRow = rows[rows.length - 1];
    if (!isRowFull(lastRow)) {
        alert("Fill all letters first before creating a new row!");
        return;
    }

    if (rowCount >= maxRows) return;

    const newRow = document.createElement("div");
    newRow.classList.add("row");

    for (let i = 0; i < numcol; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.classList.add("col");
        newRow.appendChild(input);
    }

    container.appendChild(newRow);
    rowCount++;
});

restart.addEventListener("click", () => {
    container.innerHTML = "";

    const firstRow = document.createElement("div");
    firstRow.classList.add("row");

    for (let i = 0; i < numcol; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.classList.add("col");
        firstRow.appendChild(input);
    }

    container.appendChild(firstRow);
    rowCount = 1;
});