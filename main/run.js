#!/usr/bin/env node
import readline from "readline";
import generateHtml from "./createHTML.js"; // مطمئن شو export شده

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function main() {
  const validModes = ["normal", "chat", "videostepbystep"];

  const ready = await ask("Is your README.md ready? (y/n): ");
  if (ready.toLowerCase() !== "y") {
    console.log("❌ Create README.md before run the command.");
    rl.close();
    return;
  }

  let mode = (await ask("Enter mode (normal/chat/videoStepbyStep): ")).toLowerCase();
  if (!validModes.includes(mode)) {
    console.log("❌ Invalid mode. Please choose one of:", validModes.join(", "));
    rl.close();
    return;
  }

  const videoId = await ask("Enter videoId: ");
  if (!videoId) {
    console.log("❌ videoId is required. Please provide a valid value.");
    rl.close();
    return;
  }

  const titleHTML = await ask("Enter titleHTML : ");
  const extraBoxContent = await ask("Enter extraBoxContent (optional): ");

  rl.close();

  try {
    generateHtml({
      mode,
      videoId,
      titleHTML,
      extraBoxContent,
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

main();