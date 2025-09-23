import fs from "fs";
import path from "path";

function addPostToAppJs({ videoId, titleHTML }) {
  const appPath = path.resolve("./main/app.js");
  if (!fs.existsSync(appPath)) {
    console.warn("⚠️ فایل app.js پیدا نشد:", appPath);
    return;
  }

  let content = fs.readFileSync(appPath, "utf-8");

  const postsMatch = content.match(/const posts = \[(.*?)\];/s);
  if (!postsMatch) {
    console.warn("⚠️ آرایه posts پیدا نشد در app.js");
    return;
  }

  let postsContent = postsMatch[1].trim();

  const ids = [...postsContent.matchAll(/id:\s*(\d+)/g)].map((m) =>
    parseInt(m[1], 10)
  );
  const lastId = ids.length ? Math.max(...ids) : 0;
  const newId = lastId + 1;

  // مسیر دقیق مشابه پروژه
  const newPost = `
  {
    id: ${newId},
    title: "${titleHTML}",
    link: "main/routes/${videoId}/response.html",
    cover: "main/routes/${videoId}/cover.jpg"
  }`;

  if (postsContent.endsWith(",")) {
    postsContent += newPost + ",";
  } else {
    postsContent += "," + newPost;
  }

  const newContent = content.replace(
    /const posts = \[.*?\];/s,
    `const posts = [${postsContent}\n];`
  );

  fs.writeFileSync(appPath, newContent, "utf-8");
  console.log("✅ new post add to main/app.js successfully", newId, titleHTML);
}

function convertLinesToHtml(lines) {
  const result = [];
  let insideDiv = false;
  let divBuffer = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    // بلاک div یا img مستقیم
    if (line.startsWith("<div")) {
      insideDiv = true;
      divBuffer.push(line);
      continue;
    }

    if (insideDiv) {
      divBuffer.push(line);
      if (line.endsWith("</div>")) {
        result.push(divBuffer.join("\n"));
        divBuffer = [];
        insideDiv = false;
      }
      continue;
    }

    // heading h4
    if (line.startsWith("####")) {
      result.push(`<h4>${line.replace(/^####\s*/, "")}</h4>`);
      continue;
    }

    // heading h3
    if (line.startsWith("###")) {
      result.push(`<h3>${line.replace(/^###\s*/, "")}</h3>`);
      continue;
    }

    // عکس
    if (line.startsWith("<img")) {
      result.push(line);
      continue;
    }

    // بولد
    const withStrong = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    result.push(`<p>${withStrong}</p>`);
  }

  return result.join("\n");
}

// ------------------ در generateHtml ------------------
export default function generateHtml({
  mode = "normal",
  fileName = "README.md",
  videoId,
  titleHTML,
}) {
  const rootDir = path.resolve("./");
  if (!videoId) throw new Error("❌ videoId اجباری هست");

  const inputDir = path.join(rootDir, "main/routes", videoId);
  const absPath = path.join(inputDir, fileName);

  if (!fs.existsSync(absPath)) throw new Error(`❌ فایل پیدا نشد: ${absPath}`);

  const mdContent = fs.readFileSync(absPath, "utf-8");
  const outputDir = inputDir;

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  // ------------------ حالت chat ------------------
  if (mode.toLowerCase() === "chat") {
    const lines = mdContent.split("\n").filter((l) => l.trim() !== "");
    const messages = lines.map((line) => {
      const [senderRaw, ...textParts] = line.split(":");
      const sender = senderRaw.trim().toLowerCase();
      const text = textParts.join(":").trim();
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      const readTime = wordCount * 275;
      return {
        sender,
        text: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
        readTime,
      };
    });

    const html = `<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <title>${titleHTML || videoId}</title>
  <link rel="stylesheet" href="../../chats/chat.css">
</head>
<body>
  <div class="chat-container" id="chat"></div>
  <audio id="sendSound" src="../../chats/public/send.mp3" controls style="display:none;"></audio>
  <audio id="receiveSound" src="../../chats/public/get.wav" controls style="display:none;"></audio>
  <script src="../../chats/chat.js"></script>
  <script>
    const messages = ${JSON.stringify(messages, null, 2)};
    initChat(messages);
  </script>
</body>
</html>`;

    const outPath = path.join(outputDir, "response.html");
    fs.writeFileSync(outPath, html, "utf-8");

    // حذف README.md فقط در مسیر videoId
    if (fs.existsSync(absPath)) fs.unlinkSync(absPath);

    addPostToAppJs({ videoId, titleHTML: titleHTML || videoId });
    console.log("✅ html chat created , address:", outPath);
    return;
  }

  // ------------------ حالت normal ------------------
  const lines = mdContent.split("\n").filter((l) => l.trim() !== "");
  const bodyContent = convertLinesToHtml(lines);
  const pageTitle = titleHTML || videoId;

  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="../../base.css">
</head>
<body>
  <div class="container">
    <div id="answerBox" class="reveal card card--answer mt-2">
      <h2>جواب</h2>
      ${bodyContent}
    </div>
    <div class="extra-box">
      <h2>نکات تکمیلی</h2>
      <ul>
       <!-- <li>sss</li> -->
       <!-- <li>sss</li> -->
       <!-- <li>sss</li> -->
      </ul>
    </div>
  </div>
  <script src="../../base.js"></script>
</body>
</html>`;

  const outPath = path.join(outputDir, "response.html");
  fs.writeFileSync(outPath, html, "utf-8");

  const evidenceDir = path.join(outputDir, "evidence");
  if (!fs.existsSync(evidenceDir)) fs.mkdirSync(evidenceDir);

  // حذف README.md بعد از تولید html
  if (fs.existsSync(absPath)) fs.unlinkSync(absPath);

  addPostToAppJs({ videoId, titleHTML: pageTitle });
  console.log("✅ html normal created in address:", outPath);
}
