import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  });

export const helloWorld2 = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    functions.logger.info("Hello logs2!", { structuredData: true });
    response.send("Hello from Firebase!");
  });
