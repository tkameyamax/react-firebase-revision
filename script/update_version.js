const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
admin.initializeApp();
(async () => {
  console.log("start");
  const db = getFirestore();
  const today = new Date();
  const dateString = today.toUTCString();
  await db.collection("configs").doc("version").set({ value: dateString });

  console.log("complete");
})();
