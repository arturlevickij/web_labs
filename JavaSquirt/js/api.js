const LOCAL_HOST = "http://localhost:8080/api";
const RESOURSE_URL = `${LOCAL_HOST}/api/get`;

async function getAllStones() {
    try {
        const rawResponse = await fetch(`${LOCAL_HOST}/get`);
        const stones = await rawResponse.json();
        return stones;
    } catch (error) {
        console.error("HTTP ERROR: ", error);
        throw error;
    }
}

async function createStone(stone) {
    try {
        const rawResponse = await fetch(`${LOCAL_HOST}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stone),
        });
        const createdStone = await rawResponse.json();
        return createdStone;
    } catch (error) {
        console.error("HTTP ERROR: ", error);
        throw error;
    }
}

async function editStone(index) {
    const editName = document.getElementById(`editName${index}`).value;
    const editCarat = parseFloat(document.getElementById(`editCarat${index}`).value);
    const editColor = document.getElementById(`editColor${index}`).value;
    const editClarity = document.getElementById(`editClarity${index}`).value;
    const editPrice = parseFloat(document.getElementById(`editPrice${index}`).value);
  
    if (editName && editCarat >= 0 && editColor && editClarity && editPrice >= 0) {
      const editedStone = new Stone(editName, editCarat, editColor, editClarity, editPrice);
  
      try {
        const updatedStone = await updateStone(editedStone, index);
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
  

async function deleteStoneById(id) {
    try {
        const rawResponse = await fetch(`${LOCAL_HOST}/delete/${id}`, {
            method: "DELETE",
        });
        const result = await rawResponse.json();
        return result;
    } catch (error) {
        console.error("HTTP ERROR: ", error);
        throw error;
    }
}
