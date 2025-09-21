import fs from "fs";
import path from "path";

function addPostToAppJs({ videoId, titleHTML }) {
  const appPath = path.resolve("./base/app.js");
  if (!fs.existsSync(appPath)) {
    console.warn("⚠️ فایل app.js پیدا نشد:", appPath);
    return;
  }

  let content = fs.readFileSync(appPath, "utf-8");

  // پیدا کردن آرایه posts
  const postsMatch = content.match(/const posts = \[(.*?)\];/s);
  if (!postsMatch) {
    console.warn("⚠️ آرایه posts پیدا نشد در app.js");
    return;
  }

  let postsContent = postsMatch[1].trim();

  // پیدا کردن آخرین id
  const ids = [...postsContent.matchAll(/id:\s*(\d+)/g)].map((m) =>
    parseInt(m[1], 10)
  );
  const lastId = ids.length ? Math.max(...ids) : 0;
  const newId = lastId + 1;

  // ساخت آیتم جدید
  const newPost = `
  {
    id: ${newId},
    title: "${titleHTML}",
    link: "./${videoId}/response.html",
    cover: "./${videoId}/cover.jpg"
  }`;

  // اضافه کردن به آخر آرایه قبل از ]
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
  console.log("✅ new post add to base/app.js successfully", newId, titleHTML);
}

function convertLinesToHtml(lines) {
  const result = [];
  let inAnswer = false;
  let insideDiv = false;
  let divBuffer = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    // شروع بخش جواب
    if (line.startsWith("# جواب")) {
      inAnswer = true;
      continue;
    }

    // قبل از رسیدن به جواب را نادیده بگیر
    if (!inAnswer) continue;

    // شروع بلاک div
    if (line.startsWith("<div")) {
      insideDiv = true;
      divBuffer.push(line);
      continue;
    }

    // داخل بلاک div
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

    // عکس تکی
    if (line.startsWith("<img")) {
      result.push(line);
      continue;
    }

    // متن بولد
    const withStrong = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    result.push(`<p>${withStrong}</p>`);
  }

  return result.join("\n");
}



export default function generateHtml({
  mode = "normal",
  path: fileName = "README.md",
  videoId,
  extraBoxContent = "",
  titleHTML,
}) {
  const rootDir = path.resolve("./"); // مسیر روت پروژه

  // مسیر ورودی بر اساس videoId
  if (!videoId) {
    throw new Error("❌ videoId اجباری هست");
  }

  let inputDir = path.join(rootDir, videoId);
  const absPath = path.join(inputDir, fileName);

  if (!fs.existsSync(absPath)) {
    throw new Error(`❌ فایل پیدا نشد: ${absPath}`);
  }
  const mdContent = fs.readFileSync(absPath, "utf-8");


  // مسیر ورودی
  if (
    mode.toLowerCase() === "normal" ||
    mode.toLowerCase() === "videostepbystep"
  ) {
    if (!videoId) throw new Error("❌ videoId اجباری هست در این حالت");
    inputDir = path.join(rootDir, videoId);
  }

  if (!fs.existsSync(absPath)) {
    throw new Error(`❌ فایل پیدا نشد: ${absPath}`);
  }

  // مسیر خروجی
  let outputDir = rootDir;
  if (
    mode.toLowerCase() === "normal" ||
    mode.toLowerCase() === "videostepbystep"
  ) {
    outputDir = path.join(rootDir, videoId);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const evidenceDir = path.join(outputDir, "evidence");
    if (!fs.existsSync(evidenceDir)) {
      fs.mkdirSync(evidenceDir);
    }
  }

  // ------------------ حالت chat ------------------
  if (mode.toLowerCase() === "chat") {
  const lines = mdContent.split("\n").filter((line) => line.trim() !== "");
  const messages = lines.map((line) => {
    const [senderRaw, ...textParts] = line.split(":");
    const sender = senderRaw.trim().toLowerCase();
    const text = textParts.join(":").trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;
      const readTime = wordCount * 250;

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
  <title>چت</title>
  <link rel="stylesheet" href="../../chats/chat.css">
</head>
<body>
  <div class="chat-container" id="chat"></div>
  <audio id="sendSound" src=" ../../chats/public/get.wav" controls style="display:none;"></audio>
  <audio id="receiveSound" src=" ../../chats/public/send.mp3" controls style="display:none;"></audio>
  <script src="../../chats/chat.js"></script>
  <script>
    const messages = ${JSON.stringify(messages, null, 2)};
    initChat(messages);
  </script>
</body>
</html>`;

    const outputDir = path.join(rootDir, videoId);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const outPath = path.join(outputDir, "response.html");
    fs.writeFileSync(outPath, html, "utf-8");
    console.log("✅ html chat created , address : ", outPath);

    // پاک کردن README.md فقط در مسیر videoId
    const readmePath = path.join(outputDir, "README.md");
    if (fs.existsSync(readmePath)) fs.unlinkSync(readmePath);

    // اضافه کردن به app.js
    addPostToAppJs({ videoId, titleHTML: titleHTML || videoId });
    return;
  }

  // ------------------ حالت normal ------------------
  if (mode.toLowerCase() === "normal") {
    if (!videoId) throw new Error("❌ videoId اجباری هست در حالت normal");

    const lines = mdContent.split("\n").filter((line) => line.trim() !== "");
    const bodyContent = convertLinesToHtml(lines);

    const extraHtml = extraBoxContent
      ? `<div id="extraBox" class="extra-box hidden mt-2">
           <h2>نکات تکمیلی</h2>
           <ul>${extraBoxContent}</ul>
         </div>`
      : "";

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

    <!-- ادعا -->
    <div class="card card--claim">
      <h2>ادعا</h2>
      <video id="${videoId}" src="./claim.mp4" controls></video>
    </div>

    <!-- جواب -->
    <div id="answerBox" class="reveal card card--answer mt-2">
      <h2>جواب</h2>
      ${bodyContent}
    </div>

    <!-- نکات تکمیلی -->
    ${extraHtml}

    <!-- پیام هشدار -->
    <div id="hint" class="watch-hint mt-2">
      <span>برای مشاهده جواب و نکات تکمیلی، ابتدا ویدیو را کامل ببینید.</span>
    </div>

  </div>

  <script src="../../base.js"></script>
  <script>
    setLocalItem({
      keyName: "${videoId}",
      videoId: "${videoId}",
      answerId: "answerBox",
      hintId: "extraBox",
      watchHintId: "hint"
    });
  </script>
</body>
</html>`;

    const outPath = path.join(outputDir, "response.html");
    fs.writeFileSync(outPath, html, "utf-8");
    console.log("✅ html template created in address :", outPath);
    fs.unlinkSync(absPath);

    // ← این خط اضافه کن
    addPostToAppJs({ videoId, titleHTML: pageTitle });

    return;
  }

  // ------------------ حالت videostepbystep ------------------
  if (mode.toLowerCase() === "videostepbystep") {
    const parts = mdContent.split(/^# ادعا/m).slice(1);
    const steps = [];

    const sectionsHtml = parts
      .map((block, idx) => {
        const number = idx + 1;
        const lines = block.split("\n").filter((l) => l.trim() !== "");

        // 🎬 ویدیو ادعا
        const claimVideoLine = lines.find((l) => l.includes("<video"));
        const claimVideo = claimVideoLine
          ? claimVideoLine.replace(
              /<video(.*?)>/,
              `<video id="claim${number}" data-key="claim--part${number}"$1>`
            )
          : "";

        // 💡 جواب
        const answerIdx = lines.findIndex((l) => l.startsWith("# جواب"));
        const answerContentLines =
          answerIdx >= 0 ? lines.slice(answerIdx + 1) : [];
        const answerContent = convertLinesToHtml(answerContentLines);

        steps.push({ videoId: `claim${number}`, answerId: `answer${number}` });

        return `
    <!-- ========== بخش ${number} ========== -->
    <div id="section${number}" class="section ${number > 1 ? "hidden" : ""}">
      <div class="card card--claim">
        <h2>ادعا ${number}</h2>
        <div class="video-wrapper">
          ${claimVideo}
        </div>
      </div>

      <div id="answer${number}" class="reveal card card--answer">
        <h2>جواب ${number}</h2>
        ${answerContent}
      </div>
    </div>`;
      })
      .join("\n");

    const extraHtml = extraBoxContent
      ? `<div id="extraBox" class="extra-box">
           <h2>نکات تکمیلی</h2>
           <ul>${extraBoxContent}</ul>
         </div>`
      : "";

    const pageTitle = titleHTML || "ویدیو چند بخشی";

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
    <h1 class="page-title">${pageTitle}</h1>
    <div id="hint" class="watch-hint" aria-live="polite">
      برای دیدن پاسخ و ادامه، ویدیوها را به ترتیب کامل تماشا کنید.
    </div>

    ${sectionsHtml}
    ${extraHtml}
  </div>

  <script src="../../base.js"></script>
  <script>
    const steps = ${JSON.stringify(steps, null, 2)};
    setLocalItemStep({ watchHintId: "hint", videoId: "${videoId}", steps });
  </script>
</body>
</html>`;

    const outPath = path.join(outputDir, "response.html");
    fs.writeFileSync(outPath, html, "utf-8");
    console.log("✅ html multiply video created in address :", outPath);
    fs.unlinkSync(absPath);
    // ← این خط اضافه کن
    addPostToAppJs({ videoId, titleHTML: pageTitle });
    return;
  }
}
