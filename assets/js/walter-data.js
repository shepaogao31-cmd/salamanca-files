/* =========================================================
   BREAKING BAD — THE HEISENBERG FILE
   Character data + relationship edges, centred on Walter White.
   Shares the network component with the Saul archive.
   ========================================================= */
window.WALTER_DATA = {
  centerId: "walter",
  mediaBase: "assets/img/bb/",

  meta: {
    title: { zh: "沃尔特·怀特人物关系档案", en: "The Walter White Relationship File" },
    docTitle: { zh: "沃尔特·怀特人物关系档案 · THE HEISENBERG FILE", en: "Walter White — The Heisenberg File" },
    years: "2008 — 2013",
    place: { zh: "阿尔伯克基 · 新墨西哥", en: "Albuquerque, New Mexico" }
  },

  groups: [
    { id: "all", zh: "全部", en: "ALL" },
    { id: "core", zh: "核心", en: "CORE" },
    { id: "family", zh: "家人", en: "FAMILY" },
    { id: "empire", zh: "帝国", en: "EMPIRE" },
    { id: "cartel", zh: "卡特尔", en: "CARTEL" },
    { id: "law", zh: "法律", en: "LAW" },
    { id: "outside", zh: "外围", en: "OUTSIDE" }
  ],

  characters: [
    {
      id: "walter", group: "core", initials: "WW", media: "3d", x: 600, y: 404, w: 210, h: 94,
      name: { zh: "沃尔特·怀特", en: "Walter White" },
      alias: { zh: "海森堡 / Heisenberg", en: "Heisenberg / Mr. White" },
      role: { zh: "高中化学教师 · 制毒师 · 本档案中心", en: "Chemistry teacher · meth cook · centre of the file" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "主角", en: "PROTAGONIST" },
      relation: { zh: "——", en: "—" },
      traits: {
        zh: ["自负", "精确", "控制欲", "自我欺骗"],
        en: ["Proud", "Exacting", "Controlling", "Self-deceiving"]
      },
      bio: {
        zh: "五十岁那年的一张肺癌诊断，把他推进了一辆房车。他告诉自己这是为了家人，可每一集里，他都在把家人推得更远一点。化学是他的天赋，也是他唯一诚实的语言。",
        en: "A lung-cancer diagnosis at fifty walked him into an RV. He told himself it was for his family, while every episode pushed them further away. Chemistry was his gift — and the only language he never lied in."
      },
      note: {
        zh: "他最后一次说真话，是在厨房里对妻子承认：“我做这些，是因为我喜欢。”",
        en: "The last true thing he said was to his wife in the kitchen: “I did it for me. I liked it.”"
      },
      quote: "I am the one who knocks.",
      quoteZh: "我就是敲门的那个。",
      audio: { file: "assets/audio/walter.mp3", type: "quote" }
    },

    {
      id: "jesse", group: "core", initials: "JP", media: "3d", x: 800, y: 470,
      name: { zh: "杰西·平克曼", en: "Jesse Pinkman" },
      alias: { zh: "Cap'n Cook / 小粉", en: "Cap'n Cook / Pinkman" },
      role: { zh: "制毒师 · 搭档", en: "Cook · partner" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "搭档", en: "PARTNER" },
      relation: { zh: "搭档 · 互相毁灭", en: "Partners · mutual ruin" },
      traits: {
        zh: ["冲动", "心软", "自毁", "忠诚"],
        en: ["Impulsive", "Soft-hearted", "Self-destructive", "Loyal"]
      },
      bio: {
        zh: "他是沃尔特课堂上最不专心的学生，也是唯一一个从头陪到尾的人。他每一次想抽身，都会被一句“我们是搭档”拉回来。",
        en: "The least attentive student in Walt's classroom, and the only one who stayed to the end. Every time he tried to leave, one sentence pulled him back: we're partners."
      },
      note: {
        zh: "最后他开车冲过铁门，笑得像个终于被允许离开的孩子。",
        en: "At the end he drives through the gate laughing, like a kid finally allowed to leave."
      },
      quote: "Yeah, Mr. White! Yeah, science!",
      quoteZh: "对，怀特老师！对，科学！",
      audio: { file: "assets/audio/jesse.mp3", type: "quote" }
    },

    {
      id: "skyler", group: "core", initials: "SW", media: "image", x: 400, y: 250,
      name: { zh: "斯凯勒·怀特", en: "Skyler White" },
      alias: { zh: "Skyler / 记账人", en: "Skyler / the bookkeeper" },
      role: { zh: "妻子 · 洗钱者", en: "Wife · money launderer" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "妻子", en: "WIFE" },
      relation: { zh: "夫妻 · 破裂", en: "Married · broken" },
      traits: {
        zh: ["清醒", "强硬", "隐忍", "求生"],
        en: ["Clear-eyed", "Hard", "Enduring", "Surviving"]
      },
      bio: {
        zh: "她是第一个起疑的人，也是最后一个被拖进来的人。洗钱、撒谎、点烟——她一步步学会用他的语言，来保护这个家。",
        en: "She was the first to suspect, and the last to be pulled in. Laundering, lying, lighting the cigarette — she learned his language step by step to protect the family."
      },
      note: {
        zh: "她最终明白：保护家庭的代价，是变成这个家里最危险的那个人。",
        en: "What she finally understood: the price of protecting a family is becoming the most dangerous person in it."
      },
      quote: "Someone has to protect this family from the man who protects this family.",
      quoteZh: "总得有人保护这个家，不被那个“保护这个家”的人毁掉。",
      audio: { file: "assets/audio/bb-skyler.mp3", type: "quote" }
    },

    {
      id: "hank", group: "family", initials: "HS", media: "3d", x: 250, y: 486,
      name: { zh: "汉克·施雷德", en: "Hank Schrader" },
      alias: { zh: "ASAC Schrader / DEA", en: "ASAC Schrader / DEA" },
      role: { zh: "缉毒局探员 · 姐夫", en: "DEA agent · brother-in-law" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "追捕者", en: "PURSUER" },
      relation: { zh: "姻亲 · 追捕", en: "In-law · manhunt" },
      traits: {
        zh: ["强硬", "直率", "执着", "脆弱"],
        en: ["Blunt", "Direct", "Dogged", "Fragile"]
      },
      bio: {
        zh: "他先是在沙漠里笑那个戴防毒面具的傻瓜，后来在厕所里翻开那本《草叶集》。职业自尊和家庭感情，最后撞在了同一个人身上。",
        en: "He laughed at the gas-mask idiot in the desert, then opened a copy of Leaves of Grass in a bathroom. His professional pride and his love for the family finally collided in one man."
      },
      note: {
        zh: "他死前那句“他十分钟前就决定了”，说的是沃尔特，也是在说他自己。",
        en: "His last line — “he made up his mind ten minutes ago” — was about Walt, and about himself."
      },
      quote: "You're the smartest guy I ever met, and you're too stupid to see he made up his mind ten minutes ago.",
      quoteZh: "你是我见过最聪明的人，却蠢到看不出他十分钟前就已经决定了。",
      audio: { file: "assets/audio/hank.mp3", type: "quote" }
    },

    {
      id: "marie", group: "family", initials: "MS", media: "image", x: 168, y: 330,
      name: { zh: "玛丽·施雷德", en: "Marie Schrader" },
      alias: { zh: "Marie / 汉克之妻", en: "Marie / Hank's wife" },
      role: { zh: "放射科技师 · 斯凯勒之妹", en: "Radiologic tech · Skyler's sister" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "家人", en: "FAMILY" },
      relation: { zh: "姻亲 · 姐妹", en: "In-law · sisters" },
      traits: {
        zh: ["敏感", "强势", "偏执", "护短"],
        en: ["Sensitive", "Forceful", "Fixated", "Fiercely loyal"]
      },
      bio: {
        zh: "她偷东西不为钱，只为那种“没人发现”的错觉。她比谁都早察觉斯凯勒在撒谎，却选择先站在家人这一边。",
        en: "She stole things not for the money but for the illusion that nobody noticed. She spotted Skyler's lies earlier than anyone, and chose the family anyway."
      },
      note: {
        zh: "紫色是她的颜色，也是这个家里唯一没人敢碰的东西。",
        en: "Purple is her colour — the one thing in that house nobody dared touch."
      },
      quote: "Family is all that matters. Everything else is just noise.",
      quoteZh: "家人最重要，其他都是噪音。",
      audio: { file: "assets/audio/bb-marie.mp3", type: "narration" }
    },

    {
      id: "waltjr", group: "family", initials: "WJ", media: "image", x: 250, y: 176,
      name: { zh: "小沃尔特·怀特", en: "Walter White Jr." },
      alias: { zh: "Flynn / 儿子", en: "Flynn / the son" },
      role: { zh: "高中生 · 儿子", en: "High-schooler · son" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "儿子", en: "SON" },
      relation: { zh: "父子", en: "Father · son" },
      traits: {
        zh: ["倔强", "崇拜", "幻灭"],
        en: ["Stubborn", "Adoring", "Disillusioned"]
      },
      bio: {
        zh: "他把父亲当成偶像，直到发现父亲才是这个家所有谎言的源头。他改口叫自己“弗林”，那是他能做的唯一反抗。",
        en: "He worshipped his father until he learned his father was the source of every lie in the house. He started calling himself Flynn — the only rebellion he had."
      },
      note: {
        zh: "他一直在等父亲亲口承认，可父亲只承认自己“喜欢”。",
        en: "He waited for his father to admit it. His father only admitted that he liked it."
      },
      quote: "Then why don't you just die already?",
      quoteZh: "那你怎么不干脆去死？",
      audio: { file: "assets/audio/bb-waltjr.mp3", type: "narration" }
    },

    {
      id: "gus", group: "empire", initials: "GF", media: "3d", x: 960, y: 200,
      name: { zh: "古斯·弗林", en: "Gustavo Fring" },
      alias: { zh: "Gus / 炸鸡兄弟", en: "Gus / Los Pollos Hermanos" },
      role: { zh: "连锁餐厅老板 · 集团首脑", en: "Restaurant owner · cartel boss" },
      season: { zh: "BB S2–S4", en: "BB S2–S4" },
      tag: { zh: "雇主", en: "EMPLOYER" },
      relation: { zh: "雇主 · 宿敌", en: "Employer · nemesis" },
      traits: {
        zh: ["克制", "耐心", "礼貌", "复仇"],
        en: ["Restrained", "Patient", "Courteous", "Vengeful"]
      },
      bio: {
        zh: "他给社区捐钱、给员工发奖金，也在地下实验室里用美工刀解决叛徒。他看中沃尔特的不是人品，是那 99.1% 的纯度。",
        en: "He donated to the community, paid his staff bonuses, and settled a traitor with a box cutter in the superlab. What he wanted from Walt wasn't character — it was 99.1% purity."
      },
      note: {
        zh: "他等了二十年，只为亲手杀掉那个毁掉他伙伴的人。",
        en: "He waited twenty years to kill the man who destroyed his partner with his own hands."
      },
      quote: "Never make the same mistake twice.",
      quoteZh: "同样的错误，绝不犯第二次。",
      audio: { file: "assets/audio/gus.mp3", type: "quote" }
    },

    {
      id: "mike", group: "empire", initials: "ME", media: "image", x: 890, y: 330,
      name: { zh: "迈克·埃门特劳特", en: "Mike Ehrmantraut" },
      alias: { zh: "Mike / 前费城警探", en: "Mike / former Philadelphia cop" },
      role: { zh: "清道夫 · 古斯的右手", en: "Cleaner · Gus's right hand" },
      season: { zh: "BB S2–S5", en: "BB S2–S5" },
      tag: { zh: "老手", en: "VETERAN" },
      relation: { zh: "对手 · 忌惮", en: "Adversary · wary respect" },
      traits: {
        zh: ["沉稳", "专业", "悲观", "有底线"],
        en: ["Steady", "Professional", "Bleak", "Principled"]
      },
      bio: {
        zh: "他处理尸体比处理账单还熟练。他唯一一次破例，是为了一个叫杰西的孩子；也正是那一次，让他成了沃尔特的障碍。",
        en: "He handled bodies more fluently than paperwork. He broke his own rules exactly once, for a kid named Jesse — and that made him an obstacle to Walt."
      },
      note: {
        zh: "他死在海边的椅子上，身边是一条河和半瓶啤酒。",
        en: "He died in a chair by the water, with a river and half a bottle of beer beside him."
      },
      quote: "No half measures.",
      quoteZh: "绝不留半手。",
      audio: { file: "assets/audio/mike.mp3", type: "quote" }
    },

    {
      id: "gale", group: "empire", initials: "GB", media: "image", x: 1046, y: 424,
      name: { zh: "盖尔·博蒂彻", en: "Gale Boetticher" },
      alias: { zh: "Gale / 化学博士", en: "Gale / the chemist" },
      role: { zh: "化学博士 · 制毒学徒", en: "Chemist · would-be cook" },
      season: { zh: "BB S3–S4", en: "BB S3–S4" },
      tag: { zh: "替补", en: "REPLACEMENT" },
      relation: { zh: "替代者", en: "The replacement" },
      traits: {
        zh: ["温文", "精确", "天真"],
        en: ["Gentle", "Precise", "Naive"]
      },
      bio: {
        zh: "他真心热爱化学，会在实验室里煮咖啡、写诗、引用惠特曼。他被选中，是因为他足够聪明——也足够无害。",
        en: "He genuinely loved chemistry: he brewed coffee in the lab, wrote poems, quoted Whitman. He was chosen for being clever enough — and harmless enough."
      },
      note: {
        zh: "他收到那本《草叶集》时还不知道，这本书后来要了两个人的命。",
        en: "When he was handed Leaves of Grass, he couldn't know the book would cost two lives."
      },
      quote: "I'm a chemist. I'm not a criminal.",
      quoteZh: "我是化学家，不是罪犯。",
      audio: { file: "assets/audio/bb-gale.mp3", type: "narration" }
    },

    {
      id: "lydia", group: "empire", initials: "LR", media: "image", x: 1000, y: 556, w: 202,
      name: { zh: "莉迪亚·罗达特-奎尔", en: "Lydia Rodarte-Quayle" },
      alias: { zh: "Lydia / 麦德林物流", en: "Lydia / Madrigal" },
      role: { zh: "跨国集团 · 物流主管", en: "Madrigal · logistics executive" },
      season: { zh: "BB S5", en: "BB S5" },
      tag: { zh: "买家", en: "BUYER" },
      relation: { zh: "生意伙伴", en: "Business partner" },
      traits: {
        zh: ["精致", "焦虑", "冷酷"],
        en: ["Polished", "Anxious", "Ice-cold"]
      },
      bio: {
        zh: "她穿套装、喝洋甘菊茶、谈论女儿，同时下命令杀掉一整仓库的人。她把洁癖和冷酷同时做到了极致。",
        en: "She wore suits, drank chamomile, talked about her daughter — and ordered a warehouse of people killed. Fastidiousness and cruelty, perfected at once."
      },
      note: {
        zh: "她唯一没算到的，是那杯茶里被她自己习惯掉的那点甜味。",
        en: "The one thing she didn't account for was the sweetener she'd stopped tasting in her own tea."
      },
      quote: "I have a daughter. I have a family.",
      quoteZh: "我有一个女儿，我有家人。",
      audio: { file: "assets/audio/bb-lydia.mp3", type: "narration" }
    },

    {
      id: "todd", group: "empire", initials: "TA", media: "image", x: 856, y: 664,
      name: { zh: "托德·阿尔奎斯特", en: "Todd Alquist" },
      alias: { zh: "Todd / 杰克团伙", en: "Todd / Jack's crew" },
      role: { zh: "制毒助手 · 打手", en: "Cook's assistant · muscle" },
      season: { zh: "BB S5", en: "BB S5" },
      tag: { zh: "同伙", en: "ACCOMPLICE" },
      relation: { zh: "同伙", en: "Accomplice" },
      traits: {
        zh: ["礼貌", "空洞", "服从"],
        en: ["Polite", "Hollow", "Obedient"]
      },
      bio: {
        zh: "他杀人前后都会说“请”和“谢谢”，语气平静得像在问天气。他没有恶意，也没有良心——这比恶意更难对付。",
        en: "He says please and thank you before and after killing, in the tone of a man discussing the weather. No malice, no conscience — harder to face than either."
      },
      note: {
        zh: "他收藏了一只雪茄罐，里面装的不是雪茄。",
        en: "He kept a cigar humidor. It didn't hold cigars."
      },
      quote: "Nothing personal.",
      quoteZh: "不针对你个人。",
      audio: { file: "assets/audio/bb-todd.mp3", type: "quote" }
    },

    {
      id: "tuco", group: "cartel", initials: "TS", media: "3d", x: 700, y: 120,
      name: { zh: "屠库·萨拉曼卡", en: "Tuco Salamanca" },
      alias: { zh: "Tuco / 疯子屠库", en: "Tuco / the wildcard" },
      role: { zh: "分销头目 · 第一个买家", en: "Distribution boss · the first buyer" },
      season: { zh: "BB S1–S2", en: "BB S1–S2" },
      tag: { zh: "客户", en: "CLIENT" },
      relation: { zh: "第一个买家 · 威胁", en: "First buyer · threat" },
      traits: {
        zh: ["躁狂", "多疑", "暴力"],
        en: ["Manic", "Paranoid", "Violent"]
      },
      bio: {
        zh: "他买下第一批货，也差点在客厅里打死两个来要钱的少年。沃尔特第一次见识“生意”的样子，是从他开始的。",
        en: "He bought the first batch, and nearly beat two boys to death in his living room over money. He was Walt's first look at what business really looked like."
      },
      note: {
        zh: "那声“紧、紧、紧”，是整部剧最早的警报。",
        en: "That “tight, tight, tight” was the first alarm the series ever rang."
      },
      quote: "Tight, tight, tight!",
      quoteZh: "紧、紧、紧！",
      audio: { file: "assets/audio/tuco.mp3", type: "quote" }
    },

    {
      id: "hector", group: "cartel", initials: "HS", media: "3d", x: 520, y: 120,
      name: { zh: "赫克托·萨拉曼卡", en: "Héctor Salamanca" },
      alias: { zh: "叮叮叔 / Tío Héctor", en: "Ding Ding / Tío Héctor" },
      role: { zh: "家族族长 · 集团元老", en: "Family patriarch · cartel elder" },
      season: { zh: "BB S2–S4", en: "BB S2–S4" },
      tag: { zh: "元老", en: "PATRIARCH" },
      relation: { zh: "死敌", en: "Nemesis" },
      traits: {
        zh: ["暴戾", "记仇", "威严"],
        en: ["Violent", "Vindictive", "Commanding"]
      },
      bio: {
        zh: "他不会说话，只有一只按铃。可当他走进那家炸鸡店，古斯的脸第一次变了颜色。",
        en: "He can't speak; he has a bell. But when he walked into that chicken restaurant, Gus's face changed colour for the first time."
      },
      note: {
        zh: "他最后的笑容，是一场同归于尽的交易。",
        en: "His last smile was a trade for mutual annihilation."
      },
      quote: "Ding! Ding! Ding!",
      quoteZh: "叮。叮。叮。",
      audio: { file: "assets/audio/hector.wav", type: "sound" }
    },

    {
      id: "saul", group: "law", initials: "SG", media: "3d", x: 430, y: 600,
      name: { zh: "索尔·古德曼", en: "Saul Goodman" },
      alias: { zh: "Jimmy McGill / 律师", en: "Jimmy McGill / counsel" },
      role: { zh: "辩护律师 · “清洁工”", en: "Criminal lawyer · the cleaner" },
      season: { zh: "BB S2–S5", en: "BB S2–S5" },
      tag: { zh: "律师", en: "COUNSEL" },
      relation: { zh: "律师 · 共谋", en: "Counsel · co-conspirator" },
      traits: {
        zh: ["能言善辩", "机敏", "贪婪", "讲义气"],
        en: ["Silver-tongued", "Quick", "Greedy", "Loyal"]
      },
      bio: {
        zh: "他替沃尔特编造身份、洗钱、找消失师。他嘴上说“我只看钱”，却一次次把自己也搭进去。",
        en: "He built identities, laundered money, found the disappearer. He said he only cared about the money, and kept putting himself on the line anyway."
      },
      note: {
        zh: "他给沃尔特起了“海森堡”这个名字，最后被这个名字毁掉。",
        en: "He gave Walt the name Heisenberg — and was ruined by it in the end."
      },
      quote: "Better call Saul! You have rights. The Constitution says you do.",
      quoteZh: "有事找索尔。你有权利——宪法说的。",
      audio: { file: "assets/audio/saul.mp3", type: "quote" }
    },

    {
      id: "jane", group: "outside", initials: "JM", media: "image", x: 250, y: 640,
      name: { zh: "简·马戈利斯", en: "Jane Margolis" },
      alias: { zh: "Jane / 插画师", en: "Jane / the illustrator" },
      role: { zh: "插画师 · 杰西的恋人", en: "Illustrator · Jesse's girlfriend" },
      season: { zh: "BB S2", en: "BB S2" },
      tag: { zh: "过客", en: "PASSER-BY" },
      relation: { zh: "杰西的恋人", en: "Jesse's lover" },
      traits: {
        zh: ["敏感", "清醒", "成瘾"],
        en: ["Sensitive", "Lucid", "Addicted"]
      },
      bio: {
        zh: "她告诉杰西“你不是坏人”，然后两个人一起躺回那张床上。她是杰西唯一一次真正想好好生活的原因。",
        en: "She told Jesse he wasn't a bad guy, and then they both lay back down on that bed. She was the one reason Jesse ever truly wanted a life."
      },
      note: {
        zh: "沃尔特站在床边看着她呛住，没有伸手。那是他第一次真正越线。",
        en: "Walt stood at the bed and watched her choke. He didn't reach out. That was the first line he truly crossed."
      },
      quote: "You're not a bad guy, Jesse.",
      quoteZh: "你不是坏人，杰西。",
      audio: { file: "assets/audio/bb-jane.mp3", type: "narration" }
    }
  ],

  edges: [
    { a: "walter", b: "jesse", type: "partner", label: { zh: "搭档 · 互相毁灭", en: "Partners · mutual ruin" } },
    { a: "walter", b: "skyler", type: "love", label: { zh: "夫妻 · 破裂", en: "Married · broken" } },
    { a: "walter", b: "hank", type: "pursuit", label: { zh: "姻亲 · 追捕", en: "In-law · manhunt" } },
    { a: "walter", b: "waltjr", type: "family", label: { zh: "父子", en: "Father · son" } },
    { a: "walter", b: "gus", type: "employ", label: { zh: "雇主 · 反目", en: "Employer · turned" } },
    { a: "walter", b: "mike", type: "rival", label: { zh: "对手 · 忌惮", en: "Adversary" } },
    { a: "walter", b: "gale", type: "rival", label: { zh: "替代者", en: "The replacement" } },
    { a: "walter", b: "lydia", type: "partner", label: { zh: "生意伙伴", en: "Business" } },
    { a: "walter", b: "todd", type: "crew", label: { zh: "同伙", en: "Crew" } },
    { a: "walter", b: "tuco", type: "client", label: { zh: "第一个买家", en: "First buyer" } },
    { a: "walter", b: "hector", type: "enemy", label: { zh: "死敌", en: "Nemesis" } },
    { a: "walter", b: "saul", type: "ally", label: { zh: "律师 · 共谋", en: "Counsel" } },

    { a: "skyler", b: "marie", type: "family", label: { zh: "姐妹", en: "Sisters" } },
    { a: "skyler", b: "saul", type: "law", label: { zh: "律师", en: "Lawyer" } },
    { a: "skyler", b: "waltjr", type: "family", label: { zh: "母子", en: "Mother · son" } },
    { a: "hank", b: "marie", type: "love", label: { zh: "夫妻", en: "Married" } },
    { a: "hank", b: "gus", type: "pursuit", label: { zh: "追查", en: "Investigation" } },
    { a: "hank", b: "tuco", type: "pursuit", label: { zh: "击毙", en: "Killed him" } },
    { a: "hank", b: "hector", type: "pursuit", label: { zh: "追查", en: "Investigation" } },
    { a: "jesse", b: "jane", type: "love", label: { zh: "恋人", en: "Lovers" } },
    { a: "jesse", b: "gale", type: "enemy", label: { zh: "同门 · 枪杀", en: "Peer · killed" } },
    { a: "jesse", b: "mike", type: "ally", label: { zh: "保护 · 师徒", en: "Protector" } },
    { a: "jesse", b: "todd", type: "enemy", label: { zh: "凶手", en: "Killer" } },
    { a: "gus", b: "mike", type: "employ", label: { zh: "心腹", en: "Right hand" } },
    { a: "gus", b: "gale", type: "employ", label: { zh: "门生", en: "Protégé" } },
    { a: "gus", b: "hector", type: "enemy", label: { zh: "血仇", en: "Blood feud" } },
    { a: "gus", b: "lydia", type: "partner", label: { zh: "供货 · 分销", en: "Supply" } }
  ],

  timeline: [
    {
      year: "2008",
      label: { zh: "诊断", en: "THE DIAGNOSIS" },
      title: { zh: "五十岁，肺癌三期", en: "Fifty, stage three" },
      text: {
        zh: "他算了一笔账：教书三十年，留不下什么。于是他去找从前的学生，坐进一辆房车。",
        en: "He did the arithmetic: thirty years of teaching would leave nothing behind. So he looked up an old student and got into an RV."
      }
    },
    {
      year: "2009",
      label: { zh: "搭档", en: "THE PARTNERSHIP" },
      title: { zh: "99.1% 的纯度", en: "99.1% pure" },
      text: {
        zh: "蓝色晶体在沙漠里结晶。他第一次被叫作“海森堡”，第一次发现被人害怕的感觉很好。",
        en: "Blue crystals in the desert. He was called Heisenberg for the first time, and discovered that being feared felt good."
      }
    },
    {
      year: "2010",
      label: { zh: "帝国", en: "THE EMPIRE" },
      title: { zh: "超级实验室", en: "The superlab" },
      text: {
        zh: "古斯给了他一个地下实验室、一份薪水和一个身份。他得到了想要的一切，然后开始想要更多。",
        en: "Gus gave him a lab under a laundry, a salary and a role. He got everything he wanted, then started wanting more."
      }
    },
    {
      year: "2011",
      label: { zh: "谎言", en: "THE LIE" },
      title: { zh: "家已经不像家", en: "The house stops being home" },
      text: {
        zh: "斯凯勒学会了洗钱，汉克学会了怀疑，杰西学会了沉默。所有人都在替他保密，所有人都在付代价。",
        en: "Skyler learned to launder, Hank learned to suspect, Jesse learned to say nothing. Everyone kept his secret; everyone paid for it."
      }
    },
    {
      year: "2012",
      label: { zh: "崩塌", en: "THE COLLAPSE" },
      title: { zh: "我做这些，是因为我喜欢", en: "I did it for me" },
      text: {
        zh: "沙漠、枪声、一个倒下的姐夫。他终于对妻子说了实话——不是为了家，是为了自己。",
        en: "A desert, gunfire, a brother-in-law on the ground. He finally told his wife the truth: not for the family — for himself."
      }
    }
  ],

  copy: {
    zh: {
      heroKicker: "档案编号 BB-2008 · 阿尔伯克基，新墨西哥",
      heroTitle: "沃尔特·怀特",
      heroSubCn: "人物关系档案",
      heroLead: "一个名字，五段人生。从高中化学教师，到沙漠里的制毒师，再到把整个家拖进深渊的海森堡——他不是突然变坏的，他是一步步说服自己的。",
      boardTitle: "谁在定义沃尔特·怀特",
      boardLead: "选中一张卡片，查看他与沃尔特之间的那条线：红色是爱，暗红是债，冷灰是法律。3D 档案可拖动旋转、滚轮或双指缩放；静态档案为原剧影像；每份档案都可播放台词。",
      legendEscape: "逃亡",
      relationLabel: "与沃尔特的关系",
      timelineTitle: "五段人生，一个名字",
      aboutTitle: "关于这份关系档案",
      aboutP1: "这是一份非官方的粉丝创作，围绕《绝命毒师》中的沃尔特·怀特展开。人物、剧情与台词版权归 AMC / Sony Pictures Television 及创作者所有。",
      aboutP2: "关系图只收录与沃尔特有直接或关键间接联系的人物，线不代表全部剧情，只代表这段关系在他生命里的重量。15 份档案中 7 位以 3D 重建、8 位保留原剧影像；台词音频为 AI 合成，并非演员原声。",
      aboutP3: "“海森堡”是维尔纳·海森堡的名字，也是沃尔特给自己签发的一张许可证。这份档案想记录的，是这张许可证的代价。",
      footer: "非官方粉丝作品 · 与 AMC / Sony Pictures Television 无关",
      back: "萨拉曼卡档案",
      "dossier.relation": "与沃尔特的关系 / RELATION"
    },
    en: {
      heroKicker: "File BB-2008 · Albuquerque, New Mexico",
      heroTitle: "Walter White",
      heroSubCn: "The relationship file",
      heroLead: "One name, five lives. From high-school chemistry teacher to a cook in the desert, to Heisenberg dragging a whole family down with him — he didn't turn bad overnight. He talked himself into it.",
      boardTitle: "Who defines Walter White",
      boardLead: "Select a card to trace the line back to Walt: red is love, dark red is debt, cold grey is the law. 3D files rotate by drag and zoom by scroll or pinch; still files are on-screen photographs; every file has a playable line.",
      legendEscape: "Escape",
      relationLabel: "Relation to Walter",
      timelineTitle: "Five lives, one name",
      aboutTitle: "About this file",
      aboutP1: "An unofficial fan project about Walter White from Breaking Bad. Characters, storylines and dialogue belong to AMC / Sony Pictures Television and the creators.",
      aboutP2: "The network includes only figures with a direct or decisive connection to Walt. A line is not the whole plot — it is the weight that relationship carried in his life. Seven of the fifteen files are 3D reconstructions, eight keep on-screen stills; the voice tracks are synthesized, not the actors' own.",
      aboutP3: "“Heisenberg” was a physicist's name, and the permit Walter issued himself. This file is about what that permit cost.",
      footer: "An unofficial fan project · not affiliated with AMC / Sony Pictures Television",
      back: "Salamanca files",
      "dossier.relation": "RELATION TO WALTER"
    }
  }
};

window.NETWORK_DATA = window.WALTER_DATA;
