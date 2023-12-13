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
        <p>Price per carat: $${stone.pricePerCarat.toFixed(2)}</p>
        <hr>
        <button class="deleteButton" onclick="deleteStone(${index})">Delete</button>
    `;
    stoneDiv.dataset.index = index;
    stoneList.appendChild(stoneDiv);
  });
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
  let totalPrice = 0;

  stones.forEach((stone) => {
    totalPrice += stone.pricePerCarat;
  });

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
