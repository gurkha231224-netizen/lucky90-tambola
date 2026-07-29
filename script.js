import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function loadGame() {

  const q = query(
    collection(db, "games"),
    orderBy("createdAt", "desc"),
    limit(1)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    document.getElementById("game").innerHTML =
      "<h3>No game available</h3>";
    return;
  }

  const game = snapshot.docs[0].data();

  document.getElementById("game").innerHTML = `
    <h2>${game.name}</h2>
    <p>Ticket Price: ₹${game.price}</p>
    <p>Total Tickets: ${game.tickets}</p>
    <p>Date: ${game.date}</p>
    <p>Time: ${game.time}</p>
  `;

  document.getElementById("bookBtn").href =
    "https://wa.me/" +
    game.whatsapp +
    "?text=I want to book a Lucky 90 Tambola ticket.";
}

loadGame();
