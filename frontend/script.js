if (document.getElementById("startBtn")) {
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="cols"]:checked');
    if (!selected) {
      alert("Please select a number of columns first!");
      return;
    }
    const numcol = selected.value;
    // moves you to game.html with query parameter
    window.location.href = `game.html?cols=${numcol}`;
  });
}

// game js script. 
if (document.getElementById("rows-container")) {
  const container = document.getElementById("rows-container");
  const submitBtn = document.getElementById("submit");
  const restartBtn = document.getElementById("restart");

  let rowCount = 1;
  const maxRows = 6;

  // Get selected number of columns from URL
  const urlParams = new URLSearchParams(window.location.search);
  let numcol = parseInt(urlParams.get("cols")) || 5;

  // working input ui for more interactive interface.
  function addInputBehavior(inputs) {
    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        // Allow only letters
        input.value = input.value.replace(/[^A-Za-z]/g, "");
        // Move to next input if filled
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
      input.addEventListener("keydown", (e) => {
        // Backspace moves to previous input if empty
        if (e.key === "Backspace" && input.value === "" && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });
  }

  // Create a new row
  function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < numcol; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.classList.add("col");
      row.appendChild(input);
    }

    container.appendChild(row);
    addInputBehavior(row.querySelectorAll("input"));
    row.querySelector("input").focus();

    return row;
  }

  // Check if row is full
  function isRowFull(row) {
    const inputs = row.querySelectorAll("input");
    return Array.from(inputs).every(input => input.value.trim() !== "");
  }

  // Submit button logic
  submitBtn.addEventListener("click", () => {
    const rows = container.querySelectorAll(".row");
    const lastRow = rows[rows.length - 1];

    if (!isRowFull(lastRow)) {
      alert("Fill all letters first before creating a new row!");
      return;
    }

    // Lock previous row
    lastRow.querySelectorAll("input").forEach(input => input.readOnly = true);

    if (rowCount >= maxRows) return;

    createRow();
    rowCount++;
  });

  // Restart button logic
  restartBtn.addEventListener("click", () => {
    container.innerHTML = "";
    rowCount = 1;
    createRow();
  });

  // Create first row on page load
  createRow();
}
