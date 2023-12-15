const nameInput = document.getElementById('name_input');
const caratInput = document.getElementById('carat_input');
const colorInput = document.getElementById('color_input');
const clarityInput = document.getElementById('clarity_input');
const priceInput = document.getElementById('price_input');
const submitButton = document.getElementById('submit_button');
const itemsContainer = document.getElementById('stoneList');
const sortButton = document.getElementById('sort_button');
const findInput = document.getElementById('find_input');
const countButton = document.getElementById('count_button');


class Stone {
  constructor(name, carat, color, clarity, pricePerCarat) {
    this.name = name;
    this.carat = carat;
    this.color = color;
    this.clarity = clarity;
    this.pricePerCarat = pricePerCarat;
  }
}

class StoneCollection {
  constructor() {
    this.stones = [];
  }

  addStone(stone) {
    this.stones.push(stone);
  }

  deleteStone(index) {
    if (index >= 0 && index < this.stones.length) {
      this.stones.splice(index, 1);
    }
  }

  getStones() {
    return this.stones;
  }
}

const stoneCollection = new StoneCollection();


function displayStones(stonesToDisplay) {
  const stoneList = document.getElementById("stoneList");
  stoneList.innerHTML = "";

  const stones = stonesToDisplay || stoneCollection.getStones();

  stones.forEach((stone, index) => {
    const stoneDiv = document.createElement("div");
    stoneDiv.classList.add("stone-info");
    stoneDiv.innerHTML = `
        <h3>Name: ${stone.name}</h3>
        <p>Carat: ${stone.carat}</p>
        <p>Color: ${stone.color}</p>
        <p>Clarity: ${stone.clarity}</p>
        <p>Price per carat: $${stone.pricePerCarat}</p>
        <hr>
        <button class="deleteButton" onclick="deleteStone(${index})">Delete</button>
        <button class="editButton" onclick="editStone(${index})">Edit</button>
    `;

    stoneDiv.dataset.index = index;
    stoneList.appendChild(stoneDiv);


    const editDiv = document.createElement("div");
    editDiv.classList.add("edit-info");
    editDiv.innerHTML = `
    <div class="edit">
      <div class="edit-input">
          <label for="editName${index}">Name:</label>
          <input id="editName${index}" type="text" value="${stone.name}">
      </div>
      <div class="edit-input">
          <label for="editCarat${index}">Carat:</label>
          <input id="editCarat${index}" type="number" step="0.01" value="${stone.carat}" oninput="this.value = this.value.replace(/^[-+]/, '')">
      </div>
      <div class="edit-input">
          <label for="editColor${index}">Color:</label>
          <input id="editColor${index}" type="text" value="${stone.color}">
      </div>
      <div class="edit-input">
          <label for="editClarity${index}">Clarity:</label>
          <input id="editClarity${index}" type="text" value="${stone.clarity}">
      </div>
      <div class="edit-input">
          <label for="editPrice${index}">Price per Carat:</label>
          <input id="editPrice${index}" type="number" step="0.01" value="${stone.pricePerCarat}" oninput="this.value = this.value.replace(/^[-+]/, '')">
      </div>
      <button class="saveButton" onclick="saveStone(${index})">Save</button>
    </div>
    `;

    editDiv.style.display = "none";
    stoneList.appendChild(editDiv);
  });
}



// function editStone(index) {
//   const editDiv = document.querySelector(`.edit-info:nth-child(${index * 2 + 2})`);
//   const stoneDiv = document.querySelector(`.stone-info[data-index='${index}']`);

//   editDiv.style.display = "block";
//   stoneDiv.style.display = "none";
// }


async function editStone(index) {
  const editName = document.getElementById(`editName${index}`).value;
  const editCarat = parseFloat(document.getElementById(`editCarat${index}`).value);
  const editColor = document.getElementById(`editColor${index}`).value;
  const editClarity = document.getElementById(`editClarity${index}`).value;
  const editPrice = parseFloat(document.getElementById(`editPrice${index}`).value);

  if (editName && editCarat >= 0 && editColor && editClarity && editPrice >= 0) {
    const editedStone = new Stone(editName, editCarat, editColor, editClarity, editPrice);

    try {
      // Передаємо індекс та оновлений об'єкт каменю
      const updatedStone = await updateStone(index, editedStone);
      stoneCollection.stones[index] = updatedStone;
      displayStones();
    } catch (error) {
      console.error("Error updating stone:", error);
      alert("Failed to update stone. Please try again.");
    }
  } else {
    alert("Please fill all values and non-negative values.");
  }
}




submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const carat = parseFloat(caratInput.value);
  const color = colorInput.value;
  const clarity = clarityInput.value;
  const pricePerCarat = parseFloat(priceInput.value);

  if (name && !isNaN(carat) && color && clarity && !isNaN(pricePerCarat)) {
    const newStone = new Stone(name, carat, color, clarity, pricePerCarat);

    addStone({
      name,
      carat,
      color,
      clarity,
      pricePerCarat,
    });

    stoneCollection.addStone(newStone);
    displayStones();

    nameInput.value = '';
    caratInput.value = '';
    colorInput.value = '';
    clarityInput.value = '';
    priceInput.value = '';
  } else {
    alert("Please fill all fields.");
  }
});

function deleteStone(index) {
  if (confirm("Are you sure delete this stone?")) {
    stoneCollection.deleteStone(index);
    displayStones();
  }
}

function findCamera() {
  const findInput = document.getElementById("find_input").value.toLowerCase();

  if (!findInput.trim()) {
    displayStones();
  } else {
    const searchResults = stoneCollection.stones.filter((stone) => {
      return stone.name.toLowerCase().includes(findInput);
    });

    displayStones(searchResults);
  }
}

function cancelSearch() {
  document.getElementById("find_input").value = "";
  displayStones();
}

document.getElementById("count_button").addEventListener("click", () => {
  calculateTotalPrice(stoneCollection.getStones());
});

countButton.addEventListener("click", () => {
  const findInputValue = findInput.value.toLowerCase();

  if (!findInputValue.trim()) {
    calculateTotalPrice(stoneCollection.getStones());
  } else {
    const searchResults = stoneCollection.stones.filter((stone) => {
      return stone.name.toLowerCase().includes(findInputValue);
    });

    calculateTotalPrice(searchResults);
  }
});

function calculateTotalPrice(stones) {
  if (!stones || stones.length === 0) {
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: $0.00`;
    return;
  }

  const totalPrice = stones.reduce((total, stone) => total + stone.pricePerCarat, 0);
  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}


sortButton.addEventListener('click', function () {
  const findInputValue = findInput.value.toLowerCase();

  if (!findInputValue.trim()) {
    const sortedStones = [...stoneCollection.getStones()];
    sortedStones.sort((a, b) => a.pricePerCarat - b.pricePerCarat);
    displayStones(sortedStones);
  } else {
    const searchResults = stoneCollection.stones.filter((stone) => {
      return stone.name.toLowerCase().includes(findInputValue);
    });

    const sortedStones = [...searchResults];
    sortedStones.sort((a, b) => a.pricePerCarat - b.pricePerCarat);
    displayStones(sortedStones);
  }
});

displayStones();

function fetchExistingStones() {
  fetch('http://localhost:8080/api/get')
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch existing stones.');
          }
          return response.json();
      })
      .then(data => {
          stoneCollection.stones = [];
          data.forEach(stoneData => {
              const stone = new Stone(
                  stoneData.name,
                  stoneData.carat,
                  stoneData.color,
                  stoneData.clarity,
                  stoneData.pricePerCarat
              );
              stoneCollection.addStone(stone);
          });
          displayStones(stoneCollection.getStones());
      })
      .catch(error => {
          console.error('Error fetching existing stones:', error);
      });
}

document.addEventListener('DOMContentLoaded', fetchExistingStones);

function addStone(stone) {
  fetch('http://localhost:8080/api/create', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(stone),
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to add stone.');
          }
          return response.json();
      })
      .then(data => {
          console.log('Stone added successfully:', data);

          const addedStone = new Stone(
              data.name,
              data.carat,
              data.color,
              data.clarity,
              data.pricePerCarat
          );

          this.stones.push(addedStone);
          displayStones(this.stones);
      })
      .catch(error => {
          console.error('Error adding stone:', error);
      });
}
