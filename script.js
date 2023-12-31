// main card deck for game play //
const cardDeck = [
  { food: "nasi", value: 1, image: "./cards/nasi1.png" },
  { food: "nasi", value: 1, image: "./cards/nasi1.png" },
  { food: "nasi", value: 1, image: "./cards/nasi1.png" },
  { food: "nasi", value: 2, image: "./cards/nasi2.png" },
  { food: "nasi", value: 2, image: "./cards/nasi2.png" },
  { food: "nasi", value: 2, image: "./cards/nasi2.png" },
  { food: "nasi", value: 3, image: "./cards/nasi3.png" },
  { food: "nasi", value: 3, image: "./cards/nasi3.png" },
  { food: "nasi", value: 3, image: "./cards/nasi3.png" },
  { food: "nasi", value: 4, image: "./cards/nasi4.png" },
  { food: "nasi", value: 4, image: "./cards/nasi4.png" },
  { food: "nasi", value: 4, image: "./cards/nasi4.png" },
  { food: "nasi", value: 5, image: "./cards/nasi5.png" },
  { food: "nasi", value: 5, image: "./cards/nasi5.png" },
  { food: "burger", value: 1, image: "./cards/burger1.png" },
  { food: "burger", value: 1, image: "./cards/burger1.png" },
  { food: "burger", value: 1, image: "./cards/burger1.png" },
  { food: "burger", value: 2, image: "./cards/burger2.png" },
  { food: "burger", value: 2, image: "./cards/burger2.png" },
  { food: "burger", value: 2, image: "./cards/burger2.png" },
  { food: "burger", value: 3, image: "./cards/burger3.png" },
  { food: "burger", value: 3, image: "./cards/burger3.png" },
  { food: "burger", value: 3, image: "./cards/burger3.png" },
  { food: "burger", value: 4, image: "./cards/burger4.png" },
  { food: "burger", value: 4, image: "./cards/burger4.png" },
  { food: "burger", value: 4, image: "./cards/burger4.png" },
  { food: "burger", value: 5, image: "./cards/burger5.png" },
  { food: "burger", value: 5, image: "./cards/burger5.png" },
  { food: "donut", value: 1, image: "./cards/donut1.png" },
  { food: "donut", value: 1, image: "./cards/donut1.png" },
  { food: "donut", value: 1, image: "./cards/donut1.png" },
  { food: "donut", value: 2, image: "./cards/donut2.png" },
  { food: "donut", value: 2, image: "./cards/donut2.png" },
  { food: "donut", value: 2, image: "./cards/donut2.png" },
  { food: "donut", value: 3, image: "./cards/donut3.png" },
  { food: "donut", value: 3, image: "./cards/donut3.png" },
  { food: "donut", value: 3, image: "./cards/donut3.png" },
  { food: "donut", value: 4, image: "./cards/donut4.png" },
  { food: "donut", value: 4, image: "./cards/donut4.png" },
  { food: "donut", value: 4, image: "./cards/donut4.png" },
  { food: "donut", value: 5, image: "./cards/donut5.png" },
  { food: "donut", value: 5, image: "./cards/donut5.png" },
  { food: "ramen", value: 1, image: "./cards/ramen1.png" },
  { food: "ramen", value: 1, image: "./cards/ramen1.png" },
  { food: "ramen", value: 1, image: "./cards/ramen1.png" },
  { food: "ramen", value: 2, image: "./cards/ramen2.png" },
  { food: "ramen", value: 2, image: "./cards/ramen2.png" },
  { food: "ramen", value: 2, image: "./cards/ramen2.png" },
  { food: "ramen", value: 3, image: "./cards/ramen3.png" },
  { food: "ramen", value: 3, image: "./cards/ramen3.png" },
  { food: "ramen", value: 3, image: "./cards/ramen3.png" },
  { food: "ramen", value: 4, image: "./cards/ramen4.png" },
  { food: "ramen", value: 4, image: "./cards/ramen4.png" },
  { food: "ramen", value: 4, image: "./cards/ramen4.png" },
  { food: "ramen", value: 5, image: "./cards/ramen5.png" },
  { food: "ramen", value: 5, image: "./cards/ramen5.png" },
];

const player1 = {
  name: "",
  tableCards: [],
  hiddenDeck: [],
};

const player2 = {
  name: "",
  tableCards: [],
  hiddenDeck: [],
};

const player3 = {
  name: "",
  tableCards: [],
  hiddenDeck: [],
};

const player4 = {
  name: "",
  tableCards: [],
  hiddenDeck: [],
};

let selectedItem = 0;
let allowSnatch = "no";
let snatchKeyPressed = "";

// this will just unhide the number of players fields required.
function getPlayerName(event) {
  selectedItem = event.target.value;
  if (selectedItem === "2") {
    document.getElementById("player1-name-container").classList.toggle("hide");
    document.getElementById("player2-name-container").classList.toggle("hide");
  }
  if (selectedItem === "3") {
    document.getElementById("player1-name-container").classList.toggle("hide");
    document.getElementById("player2-name-container").classList.toggle("hide");
    document.getElementById("player3-name-container").classList.toggle("hide");
  }
  if (selectedItem === "4") {
    document.getElementById("player1-name-container").classList.toggle("hide");
    document.getElementById("player2-name-container").classList.toggle("hide");
    document.getElementById("player3-name-container").classList.toggle("hide");
    document.getElementById("player4-name-container").classList.toggle("hide");
  }
}
document
  .querySelector("#numberOfPlayersOptions")
  .addEventListener("change", getPlayerName); // this works

// this will get each of the players name from their own input
function updatePlayersName() {
  player1.name = document.querySelector("#player1-name").value;
  player2.name = document.querySelector("#player2-name").value;
  player3.name = document.querySelector("#player3-name").value;
  player4.name = document.querySelector("#player4-name").value;
}

// this will start the game and set up the player's name and player's initial score (which should be 14 each)
function hideStartPage() {
  document.querySelector("#starting-page").classList.toggle("hide");

  if (selectedItem === "2") {
    document.querySelector("#players2-page").classList.toggle("hide");
    document.getElementById("2p-p1-name").innerText = player1.name;
    document.getElementById("2p-p1-score").innerText = player1.score;
    document.getElementById("2p-p2-name").innerText = player2.name;
    document.getElementById("2p-p2-score").innerText = player2.score;
  }
  if (selectedItem === "3") {
    document.querySelector("#players3-page").classList.toggle("hide");
    document.getElementById("3p-p1-name").innerText = player1.name;
    document.getElementById("3p-p1-score").innerText = player1.score;
    document.getElementById("3p-p2-name").innerText = player2.name;
    document.getElementById("3p-p2-score").innerText = player2.score;
    document.getElementById("3p-p3-name").innerText = player3.name;
    document.getElementById("3p-p3-score").innerText = player3.score;
  }
  if (selectedItem === "4") {
    document.querySelector("#players4-page").classList.toggle("hide");
    document.getElementById("4p-p1-name").innerText = player1.name;
    document.getElementById("4p-p1-score").innerText = player1.score;
    document.getElementById("4p-p2-name").innerText = player2.name;
    document.getElementById("4p-p2-score").innerText = player2.score;
    document.getElementById("4p-p3-name").innerText = player3.name;
    document.getElementById("4p-p3-score").innerText = player3.score;
    document.getElementById("4p-p4-name").innerText = player4.name;
    document.getElementById("4p-p4-score").innerText = player4.score;
  }
}
document
  .querySelector(".start-game")
  .addEventListener("click", distributeCardDeckToPlayers); // this works
// distributeCardDeckToPlayers need to come before hideStartPage, else the score will show undefined //
document
  .querySelector(".start-game")
  .addEventListener("click", updatePlayersName);
document.querySelector(".start-game").addEventListener("click", hideStartPage); // this works

// this will get the distributed card deck (from distributeCardDeck function) to each player
function distributeCardDeckToPlayers() {
  shuffleCardDeck(cardDeck);
  let returned = distributeCardDeck(cardDeck);
  player1.hiddenDeck = returned[0];
  updateScore(player1);
  player2.hiddenDeck = returned[1];
  updateScore(player2);
  player3.hiddenDeck = returned[2];
  updateScore(player3);
  player4.hiddenDeck = returned[3];
  updateScore(player4);
}

// this will shuffle the "cards" in an array. need to input the array name
function shuffleCardDeck(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// will distribute the initial 14 cards to each player. if there's only 2 players, total cards in the playing area is 28. if there's only 3 players, total cards in the playing area is 42
function distributeCardDeck() {
  const chunkSize = 14;
  let splitCardDeck = [];
  for (let i = 0; i < cardDeck.length; i += chunkSize) {
    const chunk = cardDeck.slice(i, i + chunkSize);
    splitCardDeck.push(chunk);
  }
  return splitCardDeck;
}

// updates player's score as well as score shown on the screen
function updateScore(user) {
  user.score = user.hiddenDeck.length;
  if (selectedItem == "2") {
    document.getElementById("2p-p1-score").innerText = player1.score;
    document.getElementById("2p-p2-score").innerText = player2.score;
    if (player1.score == 0) {
      document.getElementById("2p-p1-hiddencard").src = "./cards/no-cards.png";
    }
    if (player2.score == 0) {
      document.getElementById("2p-p2-hiddencard").src = "./cards/no-cards.png";
    }
  }
  if (selectedItem == "3") {
    document.getElementById("3p-p1-score").innerText = player1.score;
    document.getElementById("3p-p2-score").innerText = player2.score;
    document.getElementById("3p-p3-score").innerText = player3.score;
    if (player1.score == 0) {
      document.getElementById("3p-p1-snatch").innerText = "You lost.";
      document.getElementById("3p-p1-hiddencard").src = "./cards/no-cards.png";
    }
    if (player2.score == 0) {
      document.getElementById("3p-p2-snatch").innerText = "You lost.";
      document.getElementById("3p-p2-hiddencard").src = "./cards/no-cards.png";
    }
    if (player3.score == 0) {
      document.getElementById("3p-p3-snatch").innerText = "You lost.";
      document.getElementById("3p-p3-hiddencard").src = "./cards/no-cards.png";
    }
  }
  if (selectedItem == "4") {
    document.getElementById("4p-p1-score").innerText = player1.score;
    document.getElementById("4p-p2-score").innerText = player2.score;
    document.getElementById("4p-p3-score").innerText = player3.score;
    document.getElementById("4p-p4-score").innerText = player4.score;
    if (player1.score == 0) {
      document.getElementById("4p-p1-snatch").innerText = "You lost.";
      document.getElementById("4p-p1-hiddencard").src = "./cards/no-cards.png";
    }
    if (player2.score == 0) {
      document.getElementById("4p-p2-snatch").innerText = "You lost.";
      document.getElementById("4p-p2-hiddencard").src = "./cards/no-cards.png";
    }
    if (player3.score == 0) {
      document.getElementById("4p-p3-snatch").innerText = "You lost.";
      document.getElementById("4p-p3-hiddencard").src = "./cards/no-cards.png";
    }
    if (player4.score == 0) {
      document.getElementById("4p-p4-snatch").innerText = "You lost.";
      document.getElementById("4p-p4-hiddencard").src = "./cards/no-cards.png";
    }
  }
}

// this lets each user open a card from their hidden deck using a specific key on the keyboard. the "opened card" will be pushed to player's tableCards array
function openCard(user) {
  user.tableCards.push(user.hiddenDeck.pop());
}

// this function is used in checkTableCardsValue(), will return the "allowSnatch" value
function countValue(array) {
  let counts = array.reduce((prev, curr) => {
    let count = prev.get(curr.food) || 0;
    prev.set(curr.food, curr.value + count);
    return prev;
  }, new Map());

  let tableCounts = [...counts].map(([key, value]) => {
    return { key, value };
  }); // this will give an array of objects that will have the food and their summed value as the key/value pairs //

  for (let i = 0; i < tableCounts.length; i++) {
    if (tableCounts[i].value === 5) {
      return (allowSnatch = "yes");
    }
    // this is to check if there's a count of "5" for any food cards on the table //
  }
}

// this is to check the value of the cards on the table (the other function called in this function will return the "allowSnatch" value)
function checkTableCardsValue() {
  if (selectedItem == "2") {
    if (player2.tableCards.length == 0 && player1.tableCards.length != 0) {
      // to catch when only player1 has open card but not player2 //
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (player2.tableCards.length != 0 && player1.tableCards.length == 0) {
      let currentTableCards = [
        player2.tableCards[player2.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (player1.tableCards.length != 0 && player2.tableCards.length != 0) {
      let currentTableCards = [];
      currentTableCards.push(
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1]
      );
      countValue(currentTableCards);
    }
  }
  if (selectedItem == "3") {
    if (
      player2.tableCards.length == 0 &&
      player3.tableCards.length == 0 &&
      player1.tableCards.length != 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player3.tableCards.length == 0 &&
      player2.tableCards.length != 0
    ) {
      let currentTableCards = [
        player2.tableCards[player2.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length != 0
    ) {
      let currentTableCards = [
        player3.tableCards[player3.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length != 0
    ) {
      let currentTableCards = [
        player2.tableCards[player2.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length == 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length != 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length != 0
    ) {
      let currentTableCards = [];
      currentTableCards.push(
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1]
      );
      countValue(currentTableCards);
    }
  }
  if (selectedItem == "4") {
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length == 0 &&
      player4.tableCards.length == 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length == 0 &&
      player4.tableCards.length == 0
    ) {
      let currentTableCards = [
        player2.tableCards[player2.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length == 0
    ) {
      let currentTableCards = [
        player3.tableCards[player3.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length == 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [
        player4.tableCards[player4.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length == 0 &&
      player4.tableCards.length == 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length == 0
    ) {
      let currentTableCards = [
        player2.tableCards[player2.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [
        player3.tableCards[player3.tableCards.length - 1],
        player4.tableCards[player4.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length == 0
    ) {
      let currentTableCards = [
        player1.tableCards[player4.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length == 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
        player4.tableCards[player4.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length == 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [
        player2.tableCards[player2.tableCards.length - 1],
        player4.tableCards[player4.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }

    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length == 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length == 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1],
        player4.tableCards[player4.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length == 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [
        player1.tableCards[player1.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
        player4.tableCards[player4.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length == 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [
        player2.tableCards[player2.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
        player4.tableCards[player4.tableCards.length - 1],
      ];
      countValue(currentTableCards);
    }
    if (
      player1.tableCards.length != 0 &&
      player2.tableCards.length != 0 &&
      player3.tableCards.length != 0 &&
      player4.tableCards.length != 0
    ) {
      let currentTableCards = [];
      currentTableCards.push(
        player1.tableCards[player1.tableCards.length - 1],
        player2.tableCards[player2.tableCards.length - 1],
        player3.tableCards[player3.tableCards.length - 1],
        player4.tableCards[player4.tableCards.length - 1]
      );
      countValue(currentTableCards);
    }
  }
}

// this is to acticate the snatch color which will trigger checkTableCardsValue function and awardCards function
window.addEventListener("keydown", (event) => {
  if (selectedItem == "2") {
    if (event.key == "z" && player1.score != 0) {
      document.getElementById("2p-p1-snatch").classList.add("snatch");
      snatchKeyPressed = "z";
      checkTableCardsValue();
      awardCards();
    }
    if (event.key == "/" && player2.score != 0) {
      document.getElementById("2p-p2-snatch").classList.add("snatch");
      snatchKeyPressed = "/";
      checkTableCardsValue();
      awardCards();
    }
  }
  if (selectedItem == "3") {
    if (event.key == "q" && player1.score != 0) {
      document.getElementById("3p-p1-snatch").classList.add("snatch");
      snatchKeyPressed = "q";
      checkTableCardsValue();
      awardCards();
    }
    if (event.key == "p" && player2.score != 0) {
      document.getElementById("3p-p2-snatch").classList.add("snatch");
      snatchKeyPressed = "p";
      checkTableCardsValue();
      awardCards();
    }
    if (event.key == "/" && player3.score != 0) {
      document.getElementById("3p-p3-snatch").classList.add("snatch");
      snatchKeyPressed = "/";
      checkTableCardsValue();
      awardCards();
    }
  }
  if (selectedItem == "4") {
    if (event.key == "q" && player1.score != 0) {
      document.getElementById("4p-p1-snatch").classList.add("snatch");
      snatchKeyPressed = "q";
      checkTableCardsValue();
      awardCards();
    }
    if (event.key == "p" && player2.score != 0) {
      document.getElementById("4p-p2-snatch").classList.add("snatch");
      snatchKeyPressed = "p";
      checkTableCardsValue();
      awardCards();
    }
    if (event.key == "/" && player3.score != 0) {
      document.getElementById("4p-p3-snatch").classList.add("snatch");
      snatchKeyPressed = "/";
      checkTableCardsValue();
      awardCards();
    }
    if (event.key == "z" && player4.score != 0) {
      document.getElementById("4p-p4-snatch").classList.add("snatch");
      snatchKeyPressed = "z";
      checkTableCardsValue();
      awardCards();
    }
  }
});

// this is to open the card, it will change the "open card" image on the screen as well
window.addEventListener("keydown", (event) => {
  if (selectedItem == "2") {
    if (event.key == "x" && player1.score != 0) {
      //p1 open card
      openCard(player1);
      updateScore(player1);
      let newCard = player1.tableCards[player1.tableCards.length - 1];
      document.getElementById("2p-p1-opencard").src = newCard.image;
    }
    if (event.key == "." && player2.score != 0) {
      //p2 open card
      openCard(player2);
      updateScore(player2);
      let newCard = player2.tableCards[player2.tableCards.length - 1];
      document.getElementById("2p-p2-opencard").src = newCard.image;
    }
    checkForWinner();
  }
  if (selectedItem == "3") {
    if (event.key == "w" && player1.score != 0) {
      //p1 open card
      openCard(player1);
      updateScore(player1);
      let newCard = player1.tableCards[player1.tableCards.length - 1];
      document.getElementById("3p-p1-opencard").src = newCard.image;
    }
    if (event.key == "o" && player2.score != 0) {
      //p2 open card
      openCard(player2);
      updateScore(player2);
      let newCard = player2.tableCards[player2.tableCards.length - 1];
      document.getElementById("3p-p2-opencard").src = newCard.image;
    }
    if (event.key == "." && player3.score != 0) {
      //p3 open card
      openCard(player3);
      updateScore(player3);
      let newCard = player3.tableCards[player3.tableCards.length - 1];
      document.getElementById("3p-p3-opencard").src = newCard.image;
    }
    checkForWinner();
  }
  if (selectedItem == "4") {
    if (event.key == "w" && player1.score != 0) {
      //p1 open card
      openCard(player1);
      updateScore(player1);
      let newCard = player1.tableCards[player1.tableCards.length - 1];
      document.getElementById("4p-p1-opencard").src = newCard.image;
    }
    if (event.key == "o" && player2.score != 0) {
      //p2 open card
      openCard(player2);
      updateScore(player2);
      let newCard = player2.tableCards[player2.tableCards.length - 1];
      document.getElementById("4p-p2-opencard").src = newCard.image;
    }
    if (event.key == "." && player3.score != 0) {
      //p3 open card
      openCard(player3);
      updateScore(player3);
      let newCard = player3.tableCards[player3.tableCards.length - 1];
      document.getElementById("4p-p3-opencard").src = newCard.image;
    }
    if (event.key == "x" && player4.score != 0) {
      //p4 open card
      openCard(player4);
      updateScore(player4);
      let newCard = player4.tableCards[player4.tableCards.length - 1];
      document.getElementById("4p-p4-opencard").src = newCard.image;
    }
    checkForWinner();
  }
});

// this will check which player wants to snatch, using the "snatchKeyPressed" value. AND will also check if the snatch should award the player points or deduct points from the player, using the "allowSnatch" value
// if snatch is successful it will shuffle the hiddenDeck of the player that won the table cards and reset the table cards showing on screen to the default card image
// if snatch not successful, the player who snatched will lose 1 hiddenDeck card to each player in the game and each player received a hiddenDeck card will have their hiddenDeck cards shuffled
// after which all players scores are updated, allowSnatch value is returned to "no" and the "snatch" button is reverted to colourless
function awardCards() {
  if (selectedItem == "2") {
    // if player1 snatched (check key pressed?) and if checkTableCardsValue has a 5
    if (snatchKeyPressed === "z" && allowSnatch === "yes") {
      player1.hiddenDeck = player1.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards
      );
      shuffleCardDeck(player1.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      document.getElementById("2p-p1-opencard").src = "./cards/card.png";
      document.getElementById("2p-p2-opencard").src = "./cards/card.png";
    }
    // if player1 snatched and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed == "z" && allowSnatch == "no") {
      player2.hiddenDeck.push(player1.hiddenDeck.pop());
      shuffleCardDeck(player2.hiddenDeck);
    }
    // if player2 snatched and if checkTableCardsValue has a 5
    if (snatchKeyPressed == "/" && allowSnatch == "yes") {
      player2.hiddenDeck = player2.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards
      );
      shuffleCardDeck(player2.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      document.getElementById("2p-p1-opencard").src = "./cards/card.png";
      document.getElementById("2p-p2-opencard").src = "./cards/card.png";
    }
    // if player2 snatched and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed == "/" && allowSnatch == "no") {
      player1.hiddenDeck.push(player2.hiddenDeck.pop());
      shuffleCardDeck(player1.hiddenDeck);
    }
    // wrap the above in their respective "if"s then
    updateScore(player1);
    updateScore(player2);
    allowSnatch = "no";
    setTimeout(() => {
      document.getElementById("2p-p1-snatch").classList.remove("snatch");
      document.getElementById("2p-p2-snatch").classList.remove("snatch");
    }, 200);
    checkForWinner();
  }
  if (selectedItem == "3") {
    // if player1 snatched (check key pressed?) and if checkTableCardsValue has a 5
    if (snatchKeyPressed === "q" && allowSnatch === "yes") {
      player1.hiddenDeck = player1.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards,
        player3.tableCards
      );
      shuffleCardDeck(player1.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      player3.tableCards = [];
      document.getElementById("3p-p1-opencard").src = "./cards/card.png";
      document.getElementById("3p-p2-opencard").src = "./cards/card.png";
      document.getElementById("3p-p3-opencard").src = "./cards/card.png";
    }
    // if player1 snatched and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed === "q" && allowSnatch === "no") {
      player2.hiddenDeck.push(player1.hiddenDeck.pop());
      shuffleCardDeck(player2.hiddenDeck);
      player3.hiddenDeck.push(player1.hiddenDeck.pop());
      shuffleCardDeck(player3.hiddenDeck);
    }
    // if player2 snatched and if checkTableCardsValue has a 5
    if (snatchKeyPressed === "p" && allowSnatch === "yes") {
      player2.hiddenDeck = player2.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards,
        player3.tableCards
      );
      shuffleCardDeck(player2.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      player3.tableCards = [];
      document.getElementById("3p-p1-opencard").src = "./cards/card.png";
      document.getElementById("3p-p2-opencard").src = "./cards/card.png";
      document.getElementById("3p-p3-opencard").src = "./cards/card.png";
    }
    // if player2 snatched and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed === "p" && allowSnatch === "no") {
      player1.hiddenDeck.push(player2.hiddenDeck.pop());
      shuffleCardDeck(player1.hiddenDeck);
      player3.hiddenDeck.push(player2.hiddenDeck.pop());
      shuffleCardDeck(player3.hiddenDeck);
    }
    // if player3 snatched and if checkTableCardsValue have a 5
    if (snatchKeyPressed === "/" && allowSnatch === "yes") {
      player3.hiddenDeck = player3.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards,
        player3.tableCards
      );
      shuffleCardDeck(player3.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      player3.tableCards = [];
      document.getElementById("3p-p1-opencard").src = "./cards/card.png";
      document.getElementById("3p-p2-opencard").src = "./cards/card.png";
      document.getElementById("3p-p3-opencard").src = "./cards/card.png";
    }
    // if player3 snatched and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed === "/" && allowSnatch === "no") {
      player1.hiddenDeck.push(player3.hiddenDeck.pop());
      shuffleCardDeck(player1.hiddenDeck);
      player2.hiddenDeck.push(player3.hiddenDeck.pop());
      shuffleCardDeck(player2.hiddenDeck);
    }
    // wrap the above in their respective "if"s then
    updateScore(player1);
    updateScore(player2);
    updateScore(player3);
    allowSnatch = "no";
    setTimeout(() => {
      document.getElementById("3p-p1-snatch").classList.remove("snatch");
      document.getElementById("3p-p2-snatch").classList.remove("snatch");
      document.getElementById("3p-p3-snatch").classList.remove("snatch");
    }, 200);
    checkForWinner();
  }
  if (selectedItem == "4") {
    // if player1 snatch (check key pressed?) and if checkTableCardsValue has a 5
    if (snatchKeyPressed === "q" && allowSnatch === "yes") {
      player1.hiddenDeck = player1.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards,
        player3.tableCards,
        player4.tableCards
      );
      shuffleCardDeck(player1.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      player3.tableCards = [];
      player4.tableCards = [];
      document.getElementById("4p-p1-opencard").src = "./cards/card.png";
      document.getElementById("4p-p2-opencard").src = "./cards/card.png";
      document.getElementById("4p-p3-opencard").src = "./cards/card.png";
      document.getElementById("4p-p4-opencard").src = "./cards/card.png";
    }
    // if player1 snatch and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed === "q" && allowSnatch === "no") {
      player2.hiddenDeck.push(player1.hiddenDeck.pop());
      shuffleCardDeck(player2.hiddenDeck);
      player3.hiddenDeck.push(player1.hiddenDeck.pop());
      shuffleCardDeck(player3.hiddenDeck);
      player4.hiddenDeck.push(player1.hiddenDeck.pop());
      shuffleCardDeck(player4.hiddenDeck);
    }
    // if player2 snatch and if checkTableCardsValue has a 5
    if (snatchKeyPressed === "p" && allowSnatch === "yes") {
      player2.hiddenDeck = player2.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards,
        player3.tableCards,
        player4.tableCards
      );
      shuffleCardDeck(player2.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      player3.tableCards = [];
      player4.tableCards = [];
      document.getElementById("4p-p1-opencard").src = "./cards/card.png";
      document.getElementById("4p-p2-opencard").src = "./cards/card.png";
      document.getElementById("4p-p3-opencard").src = "./cards/card.png";
      document.getElementById("4p-p4-opencard").src = "./cards/card.png";
    }
    // if player2 snatch and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed === "p" && allowSnatch === "no") {
      player1.hiddenDeck.push(player2.hiddenDeck.pop());
      shuffleCardDeck(player1.hiddenDeck);
      player3.hiddenDeck.push(player2.hiddenDeck.pop());
      shuffleCardDeck(player3.hiddenDeck);
      player4.hiddenDeck.push(player2.hiddenDeck.pop());
      shuffleCardDeck(player4.hiddenDeck);
    }
    // if player3 snatch and if checkTableCardsValue has a 5
    if (snatchKeyPressed === "/" && allowSnatch === "yes") {
      player3.hiddenDeck = player3.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards,
        player3.tableCards,
        player4.tableCards
      );
      shuffleCardDeck(player3.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      player3.tableCards = [];
      player4.tableCards = [];
      document.getElementById("4p-p1-opencard").src = "./cards/card.png";
      document.getElementById("4p-p2-opencard").src = "./cards/card.png";
      document.getElementById("4p-p3-opencard").src = "./cards/card.png";
      document.getElementById("4p-p4-opencard").src = "./cards/card.png";
    }
    // if player3 snatch and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed === "/" && allowSnatch === "no") {
      player1.hiddenDeck.push(player3.hiddenDeck.pop());
      shuffleCardDeck(player1.hiddenDeck);
      player2.hiddenDeck.push(player3.hiddenDeck.pop());
      shuffleCardDeck(player2.hiddenDeck);
      player4.hiddenDeck.push(player3.hiddenDeck.pop());
      shuffleCardDeck(player4.hiddenDeck);
    }
    // if player4 snatch and if checkTableCardsValue has a 5
    if (snatchKeyPressed === "z" && allowSnatch === "yes") {
      player4.hiddenDeck = player4.hiddenDeck.concat(
        player1.tableCards,
        player2.tableCards,
        player3.tableCards,
        player4.tableCards
      );
      shuffleCardDeck(player4.hiddenDeck);
      player1.tableCards = [];
      player2.tableCards = [];
      player3.tableCards = [];
      player4.tableCards = [];
      document.getElementById("4p-p1-opencard").src = "./cards/card.png";
      document.getElementById("4p-p2-opencard").src = "./cards/card.png";
      document.getElementById("4p-p3-opencard").src = "./cards/card.png";
      document.getElementById("4p-p4-opencard").src = "./cards/card.png";
    }
    // if player4 snatch and if checkTableCardsValue does not have a 5
    if (snatchKeyPressed === "z" && allowSnatch === "no") {
      player1.hiddenDeck.push(player4.hiddenDeck.pop());
      shuffleCardDeck(player1.hiddenDeck);
      player2.hiddenDeck.push(player4.hiddenDeck.pop());
      shuffleCardDeck(player2.hiddenDeck);
      player3.hiddenDeck.push(player4.hiddenDeck.pop());
      shuffleCardDeck(player3.hiddenDeck);
    }
    // wrap the above in their respective "if"s then
    updateScore(player1);
    updateScore(player2);
    updateScore(player3);
    updateScore(player4);
    allowSnatch = "no";
    setTimeout(() => {
      document.getElementById("4p-p1-snatch").classList.remove("snatch");
      document.getElementById("4p-p2-snatch").classList.remove("snatch");
      document.getElementById("4p-p3-snatch").classList.remove("snatch");
      document.getElementById("4p-p4-snatch").classList.remove("snatch");
    }, 200);
    checkForWinner();
  }
}

function checkForWinner() {
  if (selectedItem == "2") {
    if (player1.score == 0) {
      document.getElementById("2p-winner-1").innerText =
        "PLAYER 2 IS THE WINNER";
      document.getElementById("2p-winner-2").innerText =
        "PLAYER 2 IS THE WINNER";
    }
    if (player2.score == 0) {
      document.getElementById("2p-winner-1").innerText =
        "PLAYER 1 IS THE WINNER";
      document.getElementById("2p-winner-2").innerText =
        "PLAYER 1 IS THE WINNER";
    }
  }
  if (selectedItem == "3") {
    if (player1.score != 0 && player2.score == 0 && player3.score == 0) {
      document.getElementById("3p-winner-1").innerText =
        "PLAYER 1 IS THE WINNER";
      document.getElementById("3p-winner-2").innerText =
        "PLAYER 1 IS THE WINNER";
    }
    if (player1.score == 0 && player2.score != 0 && player3.score == 0) {
      document.getElementById("3p-winner-1").innerText =
        "PLAYER 2 IS THE WINNER";
      document.getElementById("3p-winner-2").innerText =
        "PLAYER 2 IS THE WINNER";
    }
    if (player1.score == 0 && player2.score == 0 && player3.score != 0) {
      document.getElementById("3p-winner-1").innerText =
        "PLAYER 3 IS THE WINNER";
      document.getElementById("3p-winner-2").innerText =
        "PLAYER 3 IS THE WINNER";
    }
  }
  if (selectedItem == "4") {
    if (
      player1.score != 0 &&
      player2.score == 0 &&
      player3.score == 0 &&
      player4.score == 0
    ) {
      document.getElementById("4p-winner-1").innerText =
        "PLAYER 1 IS THE WINNER";
      document.getElementById("4p-winner-2").innerText =
        "PLAYER 1 IS THE WINNER";
    }
    if (
      player1.score == 0 &&
      player2.score != 0 &&
      player3.score == 0 &&
      player4.score == 0
    ) {
      document.getElementById("4p-winner-1").innerText =
        "PLAYER 2 IS THE WINNER";
      document.getElementById("4p-winner-2").innerText =
        "PLAYER 2 IS THE WINNER";
    }
    if (
      player1.score == 0 &&
      player2.score == 0 &&
      player3.score != 0 &&
      player4.score == 0
    ) {
      document.getElementById("4p-winner-1").innerText =
        "PLAYER 3 IS THE WINNER";
      document.getElementById("4p-winner-2").innerText =
        "PLAYER 3 IS THE WINNER";
    }
    if (
      player1.score == 0 &&
      player2.score == 0 &&
      player3.score == 0 &&
      player4.score != 0
    ) {
      document.getElementById("4p-winner-1").innerText =
        "PLAYER 4 IS THE WINNER";
      document.getElementById("4p-winner-2").innerText =
        "PLAYER 4 IS THE WINNER";
    }
  }
}
