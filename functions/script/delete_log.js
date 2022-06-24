const { Logging } = require("@google-cloud/logging");

// Creates a client
const logging = new Logging();

/**
 * TODO(developer): Uncomment the following line to run the code.
 */
const logName =
  "projects/react-revision-b736a/logs/cloudfunctions.googleapis.com%2Fcloud-functions";

const log = logging.log(logName);

async function deleteLog() {
  console.log("start");
  // Deletes a logger and all its entries.
  // Note that a deletion can take several minutes to take effect.
  // See https://googleapis.dev/nodejs/logging/latest/Log.html#delete
  // await log.delete();
  console.log(`Deleted log: ${logName}`);
  console.log("end");
}
deleteLog();
