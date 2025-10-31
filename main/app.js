const greetings = [
  "🌹 سلام و عرض ادب و احترام 🌹",
  "🙏 درود بی‌پایان خدمت شما بزرگوار 🙏",
  "🌸 روز بخیر و شادی همراه لحظه‌هاتون 🌸",
  "💐 درود و ارادت تقدیم حضورتون 💐",
  "🌟 سلامی سرشار از انرژی مثبت 🌟",
  "🕊️ درود و آرامش برای شما نازنین 🕊️",
  "🌞 روزتون روشن و دل‌هاتون سبز 🌞",
  "🌺 سلامی صمیمانه و پر از مهربونی 🌺",
  "💎 درود ناب و ارزشمند برای شما 💎",
  "🌷 روز بخیر، دلتون همیشه بهاری 🌷",
  "🎉 سلامی پر از شادی و لبخند 🎉",
  "🍀 درود سبز و پر از خوشبختی 🍀",
  "🌈 روزی رنگین‌کمانی براتون آرزو دارم 🌈",
  "⚡ سلامی پر از انرژی و انگیزه ⚡",
  "📖 درود به شما فرهیخته و دانا 📖",
  "🎶 سلامی از جنس نغمه و آرامش 🎶",
  "🌍 روز بخیر جهانی و پر از امید 🌍",
  "🔥 درود پرحرارت و پرانرژی 🔥",
  "💫 سلامی درخشان و ناب 💫",
  "🌹 درود و آرزوی بهترین‌ها برای شما 🌹",
  "🙌 سلامی همراه با احترام ویژه 🙌",
  "🎁 روز بخیر با بهترین آرزوها 🎁",
  "💖 سلامی پر از محبت و دوستی 💖",
  "🌿 درود سبز و پرنشاط 🌿",
  "🪄 سلامی جادویی و پرامید 🪄",
  "🕯️ روز بخیر و روشن مثل شمع 🕯️",
  "🏆 سلامی همراه با موفقیت 🏆",
  "🖋️ درود اهل قلم و اندیشه 🖋️",
  "🧿 سلامی خوش‌یُمن و دلنشین 🧿",
  "🪷 روز بخیر آرامش‌بخش و ناب 🪷",
  "🌊 سلامی خنک و دلپذیر مثل دریا 🌊",
  "🐦 درود سبک‌بال و رها مثل پرنده 🐦",
  "🧡 سلامی گرم از دل صمیمیت 🧡",
  "💭 روز بخیر پر از اندیشه‌های زیبا 💭",
  "🎇 سلامی روشن مثل آسمون پرستاره 🎇",
  "🍎 درود شیرین مثل سیب 🍎",
  "🌻 روز بخیر مثل گل‌های آفتابگردان 🌻",
  "🤲 سلام و دعای خیر همراهتون 🤲",
  "🎀 درود لطیف و دلنشین مثل نسیم 🎀",
];

function getRandomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

const posts = [{
    id: 1,
    title: "در تاریخ پیامبر اسلام وجود ندارد",
    cover: "main/routes/muhammad-is-not-in-history/evidence/1.png",
    link: "main/routes/muhammad-is-not-in-history/response.html",
  },
  {
    id: 2,
    title: "ازدواج جنجالی پیامبر با دختر بچه 9 ساله",
    cover: "main/routes/Marred-Muhammad-with-girl-9year-old/cover.jpg",
    link: "main/routes/Marred-Muhammad-with-girl-9year-old/response.html",
  },
  {
    id: 3,
    title: "پاسخ خسرو پرویز به محمد",
    cover:
      "main/routes/Khosrow-Parviz's-response-to-Muhammad's-letter/cover.jpg",
    link: "main/routes/Khosrow-Parviz's-response-to-Muhammad's-letter/response.html",
  },
  {
    id: 4,
    title: "محمد شورش گر یا مسیح",
    cover: "main/routes/Jesus-vs-Muhammad/cover.jpg",
    link: "main/routes/Jesus-vs-Muhammad/response.html",
  },
  {
    id: 5,
    title: "دروغی به نام بهشت !",
    cover: "main/routes/Behasht-in-qatar/cover.png",
    link: "main/routes/Behasht-in-qatar/response.html",
  },
  {
    id: 6,
    title: "تجـاوز به دختران ایرانی توسط اعراب",
    cover: "main/routes/forty-daughters-of-Fahraj/cover.png",
    link: "main/routes/forty-daughters-of-Fahraj/response.html",
  },
  {
    id: 7,
    title: "قران تحریف شده ! 1400 سال دروغ گفتن",
    cover: "main/routes/is-it-real-quran/cover.jpg",
    link: "main/routes/is-it-real-quran/response.html",
  },
  {
    id: 8,
    title: "دروغ های شاخدار معجزات پیامبر",
    cover: "main/routes/no-mojesa-in-quran/cover.jpg",
    link: "main/routes/no-mojesa-in-quran/response.html",
  },
  {
    id: 9,
    title: "چالش بزرگ اسلام توسط قار مرموز",
    cover: "main/routes/islam-in-challange/cover.jpg",
    link: "main/routes/islam-in-challange/response.html",
  },
  {
    id: 10,
    title: "اسلام و قرآن فقط برای عرب هاست",
    cover: "main/routes/islam-just-for-arab/cover.jpg",
    link: "main/routes/islam-just-for-arab/response.html",
  },
  {
    id: 11,
    title: "شکست قرآن توسط هوش مصنوعی",
    cover: "main/routes/Ai-Excellence/cover.png",
    link: "main/routes/Ai-Excellence/response.html",
  },
  {
    id: 12,
    title: "124,000 پیامبررر گاف عجیب اسلام",
    cover: "main/routes/124-prophet-of-islam-whattt/cover.png",
    link: "main/routes/124-prophet-of-islam-whattt/response.html",
  },
  {
    id: 13,
    title: "تناقضات قرآن در مورد خلقت انسان",
    cover: "main/routes/Quran-contradictions-on-human-creation/cover.jpg",
    link: "main/routes/Quran-contradictions-on-human-creation/response.html",
  },
  {
    id: 14,
    title: "خنده دار ترین سوتی قران دریای شیرین",
    cover: "main/routes/Quran-varse--sweet-water/cover.png",
    link: "main/routes/Quran-varse--sweet-water/response.html",
  },
  {
    id: 15,
    title: "داستان عجیب خلقت ، اشتباه بزرگ قران",
    cover: "main/routes/strange-story-of-creation/cover.png",
    link: "main/routes/strange-story-of-creation/response.html",
  },
  {
    id: 16,
    title: "ازدواج با خواهر و مادر در اسلام",
    cover: "main/routes/marred-with-mother-or-sister-in-islam/cover.png",
    link: "main/routes/marred-with-mother-or-sister-in-islam/response.html",
  },
  {
    id: 17,
    title: "معجزه دروغین اصحاب کهف",
    cover: "main/routes/ashab-kaff/cover.png",
    link: "main/routes/ashab-kaff/response.html",
  },
  {
    id: 18,
    title: "حجر الاسود ، آلت زنانه است ؟",
    cover: "main/routes/hajarasvad-is-woman-psy/cover.jpg",
    link: "main/routes/hajarasvad-is-woman-psy/response.html",
  },
  {
    id: 19,
    title: "پاره شدن آسمان ، اشتباه علمی قرآن",
    cover: "main/routes/broken-gallxy/cover.png",
    link: "main/routes/broken-gallxy/response.html",
  },
  {
    id: 20,
    title: "صحبت درمورد شراب و حوری",
    cover: "main/routes/nymph-and-liquor/cover.png",
    link: "main/routes/nymph-and-liquor/response.html",
  },
  {
    id: 21,
    title: "چرا نام پدر پیامبر عبدالله بوده مگر الله را محمد معرفی نکرده",
    cover: "main/routes/no-I-do-Allah/cover.png",
    link: "main/routes/no-I-do-Allah/response.html",
  },
  {
    id: 22,
    title: "سوتی بزرگ قران همه موجودات را جفت افریدیم",
    cover: "main/routes/pairs-In-Creation/cover.png",
    link: "main/routes/pairs-In-Creation/response.html",
  },
  {
    id: 23,
    title: "تناقضات علمی قرآن ، کوه ها میخ های زمینند",
    cover: "main/routes/mountains-stabilizers/cover.jpg",
    link: "main/routes/mountains-stabilizers/response.html",
  },
  {
    id: 24,
    title: "توصیه پیامبر به خودن آب مگس",
    cover: "main/routes/fly-in-drink-muhammad-say/cover.png",
    link: "main/routes/fly-in-drink-muhammad-say/response.html",
  },
  {
    id: 25,
    title: "خطرات مرگبار روزه گرفتن",
    cover: "main/routes/fasting-autophagy/cover.png",
    link: "main/routes/fasting-autophagy/response.html",
  },
  {
    id: 26,
    title: "چرا حضرت محمد این تعداد ازدواج داشته",
    cover: "main/routes/why-did-muhammad-have-so-many-marriages/cover.png",
    link: "main/routes/why-did-muhammad-have-so-many-marriages/response.html",
  },
  {
    id: 27,
    title: "صحبت درمورد حجاب در قرآن ",
    link: "main/routes/islam-is-require/response.html",
    cover: "main/routes/islam-is-require/cover.png",
  },
  {
    id: 28,
    title: "اگه هر چیزی خالق داره ، خدا رو کی خلق کرده ؟",
    link: "main/routes/who-create-god/response.html",
    cover: "main/routes/who-create-god/cover.png",
  },
  {
    id: 29,
    title: "خاورمیانه منطقه پیغمبر خیز و البته بدبختی خیز",
    link: "main/routes/MiddleEast-is-home-prophet/response.html",
    cover: "main/routes/MiddleEast-is-home-prophet/cover.png",
  },
  {
    id: 30,
    title: "نماز نمیخونم ، به سالمندان کمک میکنم",
    link: "main/routes/i-am-not-reading-namaz-becuase-im-help-old-women/response.html",
    cover:
      "main/routes/i-am-not-reading-namaz-becuase-im-help-old-women/cover.png",
  },
  {
    id: 31,
    title: "صحبت درمورد قلب و مغز در قرآن",
    link: "main/routes/heart-or-brain-chat/response.html",
    cover: "main/routes/heart-or-brain-chat/cover.jpg",
  },
  {
    id: 32,
    title: "رستم یا نوح ؟ قهرمانان شاهنامه یا قرآن ؟",
    link: "main/routes/real-superhiro-quran-or-shahnameh/response.html",
    cover: "main/routes/real-superhiro-quran-or-shahnameh/cover.jpg",
  },
  {
    id: 33,
    title: "در دنیا قرآن های مختلفی وجود داره",
    link: "main/routes/just-one-quran-or-not/response.html",
    cover: "main/routes/just-one-quran-or-not/cover.jpg",
  },
  {
    id: 34,
    title: "هیچ انسان سالمی با خواندن قرآن مسلمان نمی‌شود",
    link: "main/routes/no-iman-with-read-quran/response.html",
    cover: "main/routes/no-iman-with-read-quran/cover.jpg",
  },
  {
    id: 35,
    title: "قلب مرکز تفکره ؟ اشتباه علمی قرآن",
    link: "main/routes/heart-or-brain-verse-quran/response.html",
    cover: "main/routes/heart-or-brain-verse-quran/cover.jpg",
  },
  {
    id: 36,
    title: "خود آدم باعقلش میتونه به چیزایی که در قرآن وجود داره برسه",
    link: "main/routes/empty-quran/response.html",
    cover: "main/routes/empty-quran/cover.jpg",
  },
  {
    id: 37,
    title: "رابطه زن مسلمان با 72 مرد بهشتی",
    link: "main/routes/the-72-virgins-of-paradise/response.html",
    cover: "main/routes/the-72-virgins-of-paradise/cover.jpg",
  },
  {
    id: 38,
    title: "مکالمه درمورد اینکه قران ساخته دست بشره",
    link: "main/routes/quran-create-by-human/response.html",
    cover: "main/routes/quran-create-by-human/cover.jpg",
  },
  {
    id: 39,
    title: "هیچ قرآنی توی قرن اول اسلام نبوده",
    link: "main/routes/quran-after-200year-islam/response.html",
    cover: "main/routes/quran-after-200year-islam/cover.png",
  },
  {
    id: 40,
    title: "مراحل شکل گیری جنین درقرآن کپی برداری ازجالینوسه",
    link: "main/routes/quran-is-copy-paste-arasto/response.html",
    cover: "main/routes/quran-is-copy-paste-arasto/cover.jpg",
  },
  {
    id: 41,
    title: "مسلمانان بت پرستند ، چون دارن مکه رو میپرستن",
    link: "main/routes/is-it-maccae-god/response.html",
    cover: "main/routes/is-it-maccae-god/cover.png",
  },
  {
    id: 42,
    title: "چرا خدایی که میدونه من جهنمیم منو خلق میکنه",
    link: "main/routes/why-allah-create-me/response.html",
    cover: "main/routes/why-allah-create-me/cover.jpg",
  },
  {
    id: 43,
    title: "صحبت انسان با مورچه",
    link: "main/routes/human-talk-ant/response.html",
    cover: "main/routes/human-talk-ant/cover.png",
  },
  {
    id: 44,
    title: "اسلام من یا اسلام عربستان",
    link: "main/routes/islam-iran-or-arabstan/response.html",
    cover: "main/routes/islam-iran-or-arabstan/cover.jpg",
  },
  {
    id: 45,
    title: "مثال های کشکی قرآن",
    link: "main/routes/Muhammad-talk-about-fly/response.html",
    cover: "main/routes/Muhammad-talk-about-fly/cover.jpg",
  },
  {
    id: 46,
    title: "اسلام مروج برده داری بود",
    link: "main/routes/islam-created-slavery/response.html",
    cover: "main/routes/islam-created-slavery/cover.jpg",
  },
  {
    id: 47,
    title: "آیا در اسلام ارتباط با زن شوهر دار درسته ؟",
    link: "main/routes/marrying-a-married-woman/response.html",
    cover: "main/routes/marrying-a-married-woman/cover.jpg",
  },
  {
    id: 48,
    title: "ازدواج پیامبر با همسر پسر خوانده اش",
    link: "main/routes/Muhammad-marriage-to-his-adopted-son/response.html",
    cover: "main/routes/Muhammad-marriage-to-his-adopted-son/cover.jpg",
  },
  {
    id: 49,
    title: "گاف بزرگ قرآن ، زمین تخته",
    link: "main/routes/flat-earth-in-quran/response.html",
    cover: "main/routes/flat-earth-in-quran/evidence/9.jpg",
  },
  {
    id: 50,
    title: "قوانین ضد انسانی اسلام",
    link: "main/routes/mortad-sangsar/response.html",
    cover: "main/routes/mortad-sangsar/cover.jpg",
  },
  {
    id: 51,
    title: "محدودیتی به اسم حجاب",
    link: "main/routes/hijab/response.html",
    cover: "main/routes/hijab/cover.jpg"
  },
  {
    id: 52,
    title: "دو تا قرآن متفاوت",
    link: "main/routes/two-diffrend-quran/response.html",
    cover: "main/routes/two-diffrend-quran/cover.jpg"
  },
  {
    id: 53,
    title: "شکست قرآن در مقابل علم",
    link: "main/routes/sun-moving/response.html",
    cover: "main/routes/sun-moving/cover.jpg"
  },
  {
    id: 54,
    title: "چرا دیه زن نصف مرده",
    link: "main/routes/die-woman/response.html",
    cover: "main/routes/die-woman/cover.jpg"
  },
  {
    id: 55,
    title: "از عجایب خالق آسمان و زمین",
    link: "main/routes/funny-rules-islam/response.html",
    cover: "main/routes/funny-rules-islam/cover.jpg"
  },
  {
    id: 56,
    title: "زناتونو بزنید ،دستور عجیب قرآن",
    link: "main/routes/kick-your-wife-in-quran/response.html",
    cover: "main/routes/kick-your-wife-in-quran/cover.jpg"
  },
  {
    id: 57,
    title: "ازدواج پیامبر با زن یهود",
    link: "main/routes/married-muhammad-woman-jews/response.html",
    cover: "main/routes/married-muhammad-woman-jews/cover.jpg"
  },
  {
    id: 58,
    title: "نماز یا ذات پاک ؟",
    link: "main/routes/namaz-zat/response.html",
    cover: "main/routes/namaz-zat/cover.jpg"
  },
  {
    id: 59,
    title: "قهرمانان شاهنامه یا قرآن 2",
    link: "main/routes/real-superhiro-quran-or-shahnameh2/response.html",
    cover: "main/routes/real-superhiro-quran-or-shahnameh2/cover.jpg"
  },
  {
    id: 60,
    title: "کودک همسری در قرآن",
    link: "main/routes/kids-divorce/response.html",
    cover: "main/routes/kids-divorce/cover.jpg"
  },
  {
    id: 61,
    title: "اشتباه علمی قران درمورد پوست انسان",
    link: "main/routes/skin-change/response.html",
    cover: "main/routes/skin-change/cover.jpg"
  },
  {
    id: 62,
    title: "آیا سرنوشت آدم ها از قبل نوشته شده",
    link: "main/routes/result-before-born/response.html",
    cover: "main/routes/result-before-born/cover.jpg"
  },
  {
    id: 63,
    title: "تناقضات علمی قرآن، همه چیز را زوج آفریده",
    link: "main/routes/everything-is-pair/response.html",
    cover: "main/routes/everything-is-pair/cover.jpg"
  },
  {
    id: 64,
    title: "تا حالا دقت کردین هر چی بی پول و فقیره، مذهبی و دینداره",
    link: "main/routes/muslims-are-poor/response.html",
    cover: "main/routes/muslims-are-poor/cover.jpg"
  },
  {
    id: 65,
    title: "شکست قران ، سوره توپ قلقلی",
    link: "main/routes/verse-ball-circle/response.html",
    cover: "main/routes/verse-ball-circle/cover.jpg"
  },
  {
    id: 66,
    title: "آیا محمد پیامبره ؟",
    link: "main/routes/is-it-muhammad-real-messager/response.html",
    cover: "main/routes/is-it-muhammad-real-messager/cover.jpg"
  },
  {
    id: 67,
    title: "این اسلام واقعی کجاست ؟",
    link: "main/routes/islamic-envoy/response.html",
    cover: "main/routes/islamic-envoy/cover.jpg"
  },
  {
    id: 68,
    title: "صحبت درمورد شراب و حوری",
    link: "main/routes/nymph-and-liquor/response.html",
    cover: "main/routes/nymph-and-liquor/cover.jpg"
  },
  {
    id: 69,
    title: "دعا یا دکتر ؟",
    link: "main/routes/science-or-religion/response.html",
    cover: "main/routes/science-or-religion/cover.jpg"
  },
  {
    id: 70,
    title: "معجزه دروغین آهن در قرآن",
    link: "main/routes/foregin-iron/response.html",
    cover: "main/routes/foregin-iron/cover.jpg"
  },
  {
    id: 71,
    title: "بچه ها روزی میارن",
    link: "main/routes/child-have-money/response.html",
    cover: "main/routes/child-have-money/cover.jpg"
  },
  {
    id: 72,
    title: "کی این همه جهان رو ساخته",
    link: "main/routes/who-create-worlds/response.html",
    cover: "main/routes/who-create-worlds/cover.jpg"
  },
  {
    id: 73,
    title: "دروغ مسلمون ها در شهادتین",
    link: "main/routes/shahadat-without-see/response.html",
    cover: "main/routes/shahadat-without-see/cover.jpg"
  },
  {
    id: 74,
    title: "اسلام اوردن ایرانی ها با زور شمشیره",
    link: "main/routes/iran-islam-sword/response.html",
    cover: "main/routes/iran-islam-sword/cover.jpg"
  },
];

const container = document.querySelector(".container");
posts
  .slice()
  .reverse()
  .forEach(({ link, cover, title }) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
    <a href="${link}">
      <img src="${cover}" alt="${title}" />
      <div class="gradient"></div>
      <div class="text">${title}</div>
    </a>
    <div class="actions">
      <button class="like-btn" onclick="likeItem(this)">لایک</button>
      <button class="dislike-btn" onclick="dislikeItem(this)">دیس‌لایک & ارسال بازخورد</button>
    </div>
  `;
    container.appendChild(item);
  });

function dislikeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramMessage = `${getRandomGreeting()}  
من پست «${postTitle}» شما رو 👎 دیس‌لایک کردم.  

📌 دلیل من اینکه : `;

  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";
  telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
    telegramMessage
  )}`;

  document.body.appendChild(telegramLink);
  telegramLink.click();
  document.body.removeChild(telegramLink);
}

function likeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramMessage = `${getRandomGreeting()}  
من پست «${postTitle}» شما رو ❤️ لایک کردم.  

💭 نظرم درباره‌ی پست : `;

  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";
  telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
    telegramMessage
  )}`;

  document.body.appendChild(telegramLink);
  telegramLink.click();
  document.body.removeChild(telegramLink);
}
