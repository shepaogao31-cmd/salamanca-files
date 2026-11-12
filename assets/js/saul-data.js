/* =========================================================
   BETTER CALL SAUL — THE McGILL NETWORK
   Character data + relationship edges
   ========================================================= */
window.SAUL_DATA = {
  meta: {
    title: { zh: "索尔·古德曼人物关系档案", en: "The Saul Goodman Relationship File" },
    years: "2002 — 2010",
    place: { zh: "阿尔伯克基 · 新墨西哥", en: "Albuquerque, New Mexico" }
  },

  groups: [
    { id: "all", zh: "全部", en: "ALL" },
    { id: "core", zh: "核心", en: "CORE" },
    { id: "law", zh: "法律界", en: "LAW" },
    { id: "cartel", zh: "卡特尔", en: "CARTEL" },
    { id: "meth", zh: "冰毒线", en: "METH" },
    { id: "support", zh: "外围", en: "OUTSIDE" }
  ],

  characters: [
    {
      id: "saul", group: "core", initials: "SG", media: "3d",
      name: { zh: "吉米·麦吉尔", en: "Jimmy McGill" },
      alias: { zh: "索尔·古德曼 / 吉恩·塔卡维奇", en: "Saul Goodman / Gene Takavic" },
      role: { zh: "辩护律师 · 本档案中心", en: "Criminal defense attorney · center of the file" },
      season: { zh: "BCS S1–S6 · BB S2–S5", en: "BCS S1–S6 · BB S2–S5" },
      tag: { zh: "主角", en: "PROTAGONIST" },
      relation: { zh: "——", en: "—" },
      traits: {
        zh: ["能言善辩", "自我说服", "机敏", "渴望被爱"],
        en: ["Silver-tongued", "Self-persuading", "Quick", "Starving for love"]
      },
      bio: {
        zh: "从 HHM 邮件室的收发员，到芝加哥天窗下的“滑头吉米”，再到霓虹灯箱上的索尔·古德曼。他聪明、勤奋、极度缺爱，也极度擅长说服自己：下一次会不一样。",
        en: "From the HHM mailroom to Chicago sunroofs, from Slippin' Jimmy to the neon sign that reads Saul Goodman. Clever, hard-working, desperate for love — and endlessly able to convince himself that next time will be different."
      },
      note: {
        zh: "他一生都在证明哥哥错了，最后却活成了哥哥最害怕的样子。",
        en: "He spent a lifetime proving his brother wrong, then became the very thing his brother feared."
      },
      quote: "Better call Saul! You have rights. The Constitution says you do.",
      quoteZh: "有事，找索尔。你有权利——宪法说的。",
      audio: { file: "assets/audio/saul.mp3", type: "quote" },
      x: 600, y: 404, w: 210, h: 94
    },
    {
      id: "kim", group: "core", initials: "KW", media: "3d",
      name: { zh: "金·韦克斯勒", en: "Kim Wexler" },
      alias: { zh: "Kim / 韦克斯勒-麦吉尔", en: "Kim / Wexler-McGill" },
      role: { zh: "律师 · 合伙人 · 恋人", en: "Attorney · partner · lover" },
      season: { zh: "BCS S1–S6", en: "BCS S1–S6" },
      tag: { zh: "共谋者", en: "CONSPIRATOR" },
      relation: { zh: "恋人 · 搭档", en: "Lover · partner" },
      traits: {
        zh: ["清醒", "克制", "冒险", "忠诚"],
        en: ["Clear-eyed", "Controlled", "Reckless", "Loyal"]
      },
      bio: {
        zh: "从 HHM 的邮件室一路考出律师执照，是吉米唯一平等的同谋。她比他更清醒，也比他更敢于承认自己享受那些骗局。",
        en: "She worked her way from the HHM mailroom to a law license, and became the only equal partner Jimmy ever had. She saw more clearly than he did — and was braver about admitting she enjoyed the con."
      },
      note: {
        zh: "她离开不是因为不爱，而是因为她知道再往前一步，两个人都会消失。",
        en: "She didn't leave because she stopped loving him. She left because she knew one more step would erase them both."
      },
      quote: "You don't save me. I save me.",
      quoteZh: "你不用救我。我自己救我自己。",
      audio: { file: "assets/audio/kim.mp3", type: "quote" },
      x: 430, y: 262
    },
    {
      id: "chuck", group: "law", initials: "CM", media: "3d",
      name: { zh: "查克·麦吉尔", en: "Chuck McGill" },
      alias: { zh: "Charles McGill / 哥哥", en: "Charles McGill / older brother" },
      role: { zh: "HHM 创始人 · 兄长", en: "HHM co-founder · brother" },
      season: { zh: "BCS S1–S3", en: "BCS S1–S3" },
      tag: { zh: "兄长", en: "BROTHER" },
      relation: { zh: "兄弟 · 决裂", en: "Brothers · broken" },
      traits: {
        zh: ["傲慢", "嫉妒", "精确", "自毁"],
        en: ["Proud", "Envious", "Exacting", "Self-destructive"]
      },
      bio: {
        zh: "阿尔伯克基最受尊敬的法律头脑之一，也是把“电”当成敌人的人。他真心相信吉米不配当律师，并且有能力让这句话变成事实。",
        en: "One of Albuquerque's most respected legal minds — and a man who believed electricity was attacking him. He sincerely believed Jimmy did not deserve to be a lawyer, and he had the power to make that true."
      },
      note: {
        zh: "他给了弟弟一份工作，却从没给过他一次真正的尊重。",
        en: "He gave his brother a job. He never once gave him respect."
      },
      quote: "You're not a real lawyer.",
      quoteZh: "你根本不是个真正的律师。",
      audio: { file: "assets/audio/chuck.mp3", type: "quote" },
      x: 264, y: 150
    },
    {
      id: "howard", group: "law", initials: "HH", media: "image",
      name: { zh: "霍华德·哈姆林", en: "Howard Hamlin" },
      alias: { zh: "Howard / HHM 合伙人", en: "Howard / HHM partner" },
      role: { zh: "HHM 合伙人 · 门面", en: "HHM partner · the face of the firm" },
      season: { zh: "BCS S1–S6", en: "BCS S1–S6" },
      tag: { zh: "对手", en: "RIVAL" },
      relation: { zh: "宿怨 · 债主", en: "Grudge · creditor" },
      traits: {
        zh: ["体面", "自负", "守规矩", "迟来的良知"],
        en: ["Presentable", "Vain", "By the book", "Late conscience"]
      },
      bio: {
        zh: "西装永远笔挺，笑容永远得体。他按查克的意志行事，又在查克死后试图做一个体面的人；吉米把这两件事都算成了罪。",
        en: "An immaculate suit and an immaculate smile. He carried out Chuck's wishes, then tried to be a decent man after Chuck was gone. Jimmy counted both as crimes."
      },
      note: {
        zh: "他不是坏人，只是站错了队，又在错误的时间出现在错误的房间。",
        en: "He wasn't a villain. He stood on the wrong side, and was in the wrong room at the wrong hour."
      },
      quote: "You've mistaken my kindness for weakness.",
      quoteZh: "你把我的善意当成了软弱。",
      audio: { file: "assets/audio/howard.mp3", type: "quote" },
      x: 196, y: 330
    },
    {
      id: "francesca", group: "law", initials: "FL", media: "image",
      name: { zh: "弗朗西斯卡·利迪", en: "Francesca Liddy" },
      alias: { zh: "Francesca / 前台", en: "Francesca / the front desk" },
      role: { zh: "秘书 · 事务所前台", en: "Secretary · front desk" },
      season: { zh: "BCS S1–S6 · BB S2–S5", en: "BCS S1–S6 · BB S2–S5" },
      tag: { zh: "见证者", en: "WITNESS" },
      relation: { zh: "雇主 · 雇员", en: "Employer · employee" },
      traits: {
        zh: ["务实", "冷淡", "守口如瓶", "有限的忠诚"],
        en: ["Practical", "Dry", "Discreet", "Limited loyalty"]
      },
      bio: {
        zh: "她见过邮件室里的吉米，也见过把现金塞满墙缝的索尔。她是这间事务所唯一从开头坐到结尾的人。",
        en: "She knew Jimmy from the mailroom and Saul from the walls stuffed with cash. She is the only person who sat in that office from beginning to end."
      },
      note: {
        zh: "她被要求销毁一切，包括那些她从未被允许问出口的问题。",
        en: "She was told to destroy everything — including the questions she was never allowed to ask."
      },
      quote: "He was a lawyer once. Then he became a brand.",
      quoteZh: "他曾经是个律师，后来成了一个招牌。",
      audio: { file: "assets/audio/francesca.mp3", type: "narration" },
      x: 612, y: 146
    },
    {
      id: "mike", group: "meth", initials: "ME", media: "image",
      name: { zh: "迈克·埃门特劳特", en: "Mike Ehrmantraut" },
      alias: { zh: "Mike / 前费城警探", en: "Mike / former Philadelphia cop" },
      role: { zh: "调查员 · 清道夫", en: "Investigator · cleaner" },
      season: { zh: "BCS S1–S6 · BB S2–S5", en: "BCS S1–S6 · BB S2–S5" },
      tag: { zh: "盟友", en: "ALLY" },
      relation: { zh: "合作 · 尊重", en: "Working allies · mutual respect" },
      traits: {
        zh: ["沉稳", "专业", "悲观", "有底线"],
        en: ["Steady", "Professional", "Bleak", "Principled"]
      },
      bio: {
        zh: "他不喜欢吉米，但从不轻视他。两个人共享同一套悲观的世界观：规则是给有退路的人准备的。",
        en: "He didn't like Jimmy, but he never underestimated him. The two shared the same bleak worldview: rules are for people with somewhere else to go."
      },
      note: {
        zh: "迈克是索尔唯一不敢撒谎的人，因为他知道迈克一眼就能看穿。",
        en: "Mike was the one man Saul never dared lie to. Mike would have seen it instantly."
      },
      quote: "No half measures.",
      quoteZh: "绝不留半手。",
      audio: { file: "assets/audio/mike.mp3", type: "quote" },
      x: 812, y: 300
    },
    {
      id: "gus", group: "meth", initials: "GF", media: "3d",
      name: { zh: "古斯·弗林", en: "Gustavo Fring" },
      alias: { zh: "Gus / 炸鸡兄弟", en: "Gus / Los Pollos Hermanos" },
      role: { zh: "连锁餐厅老板 · 集团首脑", en: "Restaurant owner · cartel boss" },
      season: { zh: "BCS S3–S6 · BB S2–S4", en: "BCS S3–S6 · BB S2–S4" },
      tag: { zh: "雇主", en: "EMPLOYER" },
      relation: { zh: "雇主 · 威胁", en: "Employer · threat" },
      traits: {
        zh: ["克制", "耐心", "礼貌", "复仇"],
        en: ["Restrained", "Patient", "Courteous", "Vengeful"]
      },
      bio: {
        zh: "他把暴力藏在一尘不染的厨房后面。对索尔，他总是礼貌、准时、结账清楚——这让一切更可怕。",
        en: "He kept violence behind a spotless kitchen. With Saul he was always polite, punctual and paid in full — which made it worse."
      },
      note: {
        zh: "他从不威胁，他只是让你自己算出后果。",
        en: "He never threatened. He let you do the arithmetic yourself."
      },
      quote: "Never make the same mistake twice.",
      quoteZh: "同样的错误，绝不犯第二次。",
      audio: { file: "assets/audio/gus.mp3", type: "quote" },
      x: 1002, y: 214
    },
    {
      id: "nacho", group: "cartel", initials: "NV", media: "image",
      name: { zh: "纳乔·瓦尔加", en: "Nacho Varga" },
      alias: { zh: "Ignacio Varga / 纳乔", en: "Ignacio Varga / Nacho" },
      role: { zh: "卡特尔成员 · 屠库手下", en: "Cartel man · Tuco's crew" },
      season: { zh: "BCS S1–S6", en: "BCS S1–S6" },
      tag: { zh: "客户", en: "CLIENT" },
      relation: { zh: "客户 · 被保护者", en: "Client · the one he tried to save" },
      traits: {
        zh: ["隐忍", "求生", "孝顺", "决绝"],
        en: ["Enduring", "Surviving", "Filial", "Resolved"]
      },
      bio: {
        zh: "他想把父亲和自己从这门生意里摘出去，于是不断向更危险的人借力。索尔是他少数几次真心想帮的人。",
        en: "He wanted to get his father and himself out of the business, and kept borrowing leverage from more dangerous men. Saul was one of the few people he genuinely tried to save."
      },
      note: {
        zh: "索尔对他的承诺，是整个系列里最接近良知的一次交易。",
        en: "Saul's promise to him is the closest thing to a conscience in the whole series."
      },
      quote: "You get me out of here today... or you're a dead man.",
      quoteZh: "今天把我弄出去……不然你就是个死人。",
      audio: { file: "assets/audio/nacho.mp3", type: "quote" },
      x: 1044, y: 432
    },
    {
      id: "lalo", group: "cartel", initials: "LS", media: "3d",
      name: { zh: "拉罗·萨拉曼卡", en: "Lalo Salamanca" },
      alias: { zh: "Eduardo “Lalo” Salamanca", en: "Eduardo “Lalo” Salamanca" },
      role: { zh: "萨拉曼卡家族 · 墨西哥操盘手", en: "Salamanca family · operator in Mexico" },
      season: { zh: "BCS S4–S6", en: "BCS S4–S6" },
      tag: { zh: "追猎者", en: "HUNTER" },
      relation: { zh: "客户 · 追杀者", en: "Client · hunter" },
      traits: {
        zh: ["迷人", "好奇", "残忍", "耐心"],
        en: ["Charming", "Curious", "Cruel", "Patient"]
      },
      bio: {
        zh: "他笑着走进索尔的办公室，付了七百万保释金，然后记住了一切。当索尔在沙漠里听见那声“Tell me again”，他的余生就再也没安静过。",
        en: "He walked into Saul's office smiling, posted seven million in bail, and remembered everything. When Saul heard “tell me again” in the desert, the rest of his life stopped being quiet."
      },
      note: {
        zh: "拉罗是唯一让索尔在说出自己名字时声音发抖的人。",
        en: "Lalo is the only man who made Saul's voice shake while saying his own name."
      },
      quote: "I'm Lalo.",
      quoteZh: "我是拉罗。",
      audio: { file: "assets/audio/lalo.mp3", type: "quote" },
      x: 900, y: 574
    },
    {
      id: "tuco", group: "cartel", initials: "TS", media: "3d",
      name: { zh: "屠库·萨拉曼卡", en: "Tuco Salamanca" },
      alias: { zh: "Tuco / 疯子屠库", en: "Tuco / the wildcard" },
      role: { zh: "家族分销头目", en: "Family distribution boss" },
      season: { zh: "BCS S1–S2 · BB S1–S2", en: "BCS S1–S2 · BB S1–S2" },
      tag: { zh: "客户", en: "CLIENT" },
      relation: { zh: "第一个大客户", en: "His first big client" },
      traits: {
        zh: ["躁狂", "多疑", "暴力", "家族崇拜"],
        en: ["Manic", "Paranoid", "Violent", "Clannish"]
      },
      bio: {
        zh: "索尔第一次真正见识卡特尔，是在屠库的客厅里。他用一段关于“法律”的即兴演讲换回了自己和两个滑板少年的腿。",
        en: "Saul met the cartel in Tuco's living room. He talked his way — and two skateboarders' legs — out of it with an improvised sermon about the law."
      },
      note: {
        zh: "那天他学到的不是法律有用，而是嘴有用。",
        en: "What he learned that day wasn't that the law works. It's that a mouth works."
      },
      quote: "Tight, tight, tight!",
      quoteZh: "紧、紧、紧！",
      audio: { file: "assets/audio/tuco.mp3", type: "quote" },
      x: 1082, y: 650
    },
    {
      id: "hector", group: "cartel", initials: "HS", media: "3d",
      name: { zh: "赫克托·萨拉曼卡", en: "Héctor Salamanca" },
      alias: { zh: "叮叮叔 / Tío Héctor", en: "Ding Ding / Tío Héctor" },
      role: { zh: "家族族长 · 集团元老", en: "Family patriarch · cartel elder" },
      season: { zh: "BCS S1–S6 · BB S2–S4", en: "BCS S1–S6 · BB S2–S4" },
      tag: { zh: "元老", en: "PATRIARCH" },
      relation: { zh: "对手 · 阴影", en: "Adversary · shadow" },
      traits: {
        zh: ["暴戾", "记仇", "威严", "旧派"],
        en: ["Violent", "Vindictive", "Commanding", "Old-world"]
      },
      bio: {
        zh: "中风之后，他只剩眼睛和一只按铃，却依然能让整个房间安静。索尔在他面前第一次意识到：有些人不需要说话也能定你的罪。",
        en: "After the stroke he had only his eyes and a brass bell, and still could silence a room. In front of him Saul learned that some men can convict you without a word."
      },
      note: {
        zh: "铃声是索尔记忆里最廉价也最昂贵的音效。",
        en: "That bell is the cheapest sound in Saul's memory, and the most expensive."
      },
      quote: "Ding! Ding! Ding!",
      quoteZh: "叮。叮。叮。",
      audio: { file: "assets/audio/hector.wav", type: "sound" },
      x: 782, y: 690
    },
    {
      id: "walter", group: "meth", initials: "WW", media: "image",
      name: { zh: "沃尔特·怀特", en: "Walter White" },
      alias: { zh: "海森堡 / Mr. White", en: "Heisenberg / Mr. White" },
      role: { zh: "化学教师 · 制毒师", en: "Chemistry teacher · meth cook" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "客户", en: "CLIENT" },
      relation: { zh: "最重要的客户", en: "His most important client" },
      traits: {
        zh: ["自负", "算计", "控制欲", "迟来的恐惧"],
        en: ["Proud", "Calculating", "Controlling", "Late fear"]
      },
      bio: {
        zh: "他带着一袋现金和一套自以为是的道德走进索尔的办公室。索尔给了他一个新身份、一套洗钱方案，以及一条通往帝国的路。",
        en: "He walked into Saul's office with a bag of cash and a self-made moral code. Saul gave him a new identity, a money-laundering scheme, and a road to an empire."
      },
      note: {
        zh: "索尔一直以为自己在利用沃尔特，直到发现自己已经下不了车。",
        en: "Saul thought he was using Walt, until he realized he could no longer get off the ride."
      },
      quote: "I am the one who knocks.",
      quoteZh: "我就是敲门的那个。",
      audio: { file: "assets/audio/walter.mp3", type: "quote" },
      x: 452, y: 652
    },
    {
      id: "jesse", group: "meth", initials: "JP", media: "image",
      name: { zh: "杰西·平克曼", en: "Jesse Pinkman" },
      alias: { zh: "Jesse / Cap'n Cook", en: "Jesse / Cap'n Cook" },
      role: { zh: "制毒师 · 搭档", en: "Cook · partner" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "朋友", en: "FRIEND" },
      relation: { zh: "客户 · 朋友", en: "Client · friend" },
      traits: {
        zh: ["冲动", "心软", "自责", "忠诚"],
        en: ["Impulsive", "Soft-hearted", "Guilt-ridden", "Loyal"]
      },
      bio: {
        zh: "索尔替他处理过房子、钱、尸体和良心。他嘴上叫他“孩子”，心里也确实把他当成了一个需要被捞出来的人。",
        en: "Saul handled his house, his money, his bodies and his conscience. He called him “kid,” and meant it more than he admitted."
      },
      note: {
        zh: "在所有人都把杰西当工具时，索尔至少替他难过过一次。",
        en: "When everyone else treated Jesse as a tool, Saul at least grieved for him once."
      },
      quote: "Yeah, Mr. White! Yeah, science!",
      quoteZh: "对，怀特老师！对，科学！",
      audio: { file: "assets/audio/jesse.mp3", type: "quote" },
      x: 292, y: 704
    },
    {
      id: "hank", group: "meth", initials: "HS", media: "image",
      name: { zh: "汉克·施雷德", en: "Hank Schrader" },
      alias: { zh: "ASAC Schrader / DEA", en: "ASAC Schrader / DEA" },
      role: { zh: "缉毒局探员", en: "DEA agent" },
      season: { zh: "BB S1–S5", en: "BB S1–S5" },
      tag: { zh: "追捕者", en: "PURSUER" },
      relation: { zh: "对手 · 交易对象", en: "Adversary · occasional deal" },
      traits: {
        zh: ["强硬", "直率", "执着", "脆弱"],
        en: ["Blunt", "Direct", "Dogged", "Fragile"]
      },
      bio: {
        zh: "他追的是海森堡，却总在索尔的办公室门外打转。两个人互相看不上，又在某些时刻不得不做交易。",
        en: "He was hunting Heisenberg, and kept circling Saul's office door. They despised each other, and still did business when it suited them."
      },
      note: {
        zh: "索尔最怕的不是汉克的枪，而是汉克的笔记本。",
        en: "What Saul feared wasn't Hank's gun. It was Hank's notebook."
      },
      quote: "You're the smartest guy I ever met, and you're too stupid to see he made up his mind ten minutes ago.",
      quoteZh: "你是我见过最聪明的人，却蠢到看不出他十分钟前就已经决定了。",
      audio: { file: "assets/audio/hank.mp3", type: "quote" },
      x: 158, y: 520
    },
    {
      id: "ed", group: "support", initials: "EG", media: "image",
      name: { zh: "埃德·加尔布雷思", en: "Ed Galbraith" },
      alias: { zh: "消失师 / The Disappearer", en: "The Disappearer" },
      role: { zh: "身份伪造 · 消失服务", en: "New identities · disappearance" },
      season: { zh: "BCS S4–S6 · BB S4–S5", en: "BCS S4–S6 · BB S4–S5" },
      tag: { zh: "出口", en: "EXIT" },
      relation: { zh: "服务提供者", en: "Service provider" },
      traits: {
        zh: ["冷静", "专业", "不问问题", "守规矩"],
        en: ["Calm", "Professional", "Unquestioning", "By the rules"]
      },
      bio: {
        zh: "他卖的是“从此没有这个人”。吸尘器店的后面有一间房，进去的人会换一个名字、一座城市和一段人生。",
        en: "He sells the absence of a person. Behind the vacuum shop is a room where a name, a city and a life are exchanged for new ones."
      },
      note: {
        zh: "索尔走进那间房时是索尔，出来时是吉恩——这才是他真正的判决。",
        en: "Saul walked into that room and Gene walked out. That was the real verdict."
      },
      quote: "I can give you a new name, a new city, a new life. After that, you don't look back.",
      quoteZh: "我可以给你一个新名字、一座新城市、一段新人生。之后，别回头。",
      audio: { file: "assets/audio/ed.mp3", type: "narration" },
      x: 470, y: 84
    },
  ],

  edges: [
    { a: "saul", b: "kim", type: "love", label: { zh: "恋人 · 共谋", en: "Lovers · partners in crime" } },
    { a: "saul", b: "chuck", type: "family", label: { zh: "兄弟 · 决裂", en: "Brothers · estranged" } },
    { a: "saul", b: "howard", type: "rival", label: { zh: "宿怨", en: "Grudge" } },
    { a: "saul", b: "francesca", type: "employ", label: { zh: "雇主 · 雇员", en: "Employer" } },
    { a: "saul", b: "mike", type: "ally", label: { zh: "合作 · 尊重", en: "Allies" } },
    { a: "saul", b: "gus", type: "employ", label: { zh: "雇主 · 威胁", en: "Employer · threat" } },
    { a: "saul", b: "nacho", type: "client", label: { zh: "客户", en: "Client" } },
    { a: "saul", b: "lalo", type: "client", label: { zh: "客户 · 追杀", en: "Client · hunter" } },
    { a: "saul", b: "tuco", type: "client", label: { zh: "第一个大客户", en: "First big client" } },
    { a: "saul", b: "walter", type: "partner", label: { zh: "合伙人", en: "Business partner" } },
    { a: "saul", b: "jesse", type: "ally", label: { zh: "客户 · 朋友", en: "Client · friend" } },
    { a: "saul", b: "hank", type: "rival", label: { zh: "对手", en: "Adversary" } },
    { a: "saul", b: "ed", type: "escape", label: { zh: "消失", en: "Disappearance" } },
    { a: "kim", b: "chuck", type: "law", label: { zh: "HHM 同僚", en: "HHM colleagues" } },
    { a: "kim", b: "howard", type: "law", label: { zh: "上司 · 对手", en: "Boss · rival" } },
    { a: "chuck", b: "howard", type: "partner", label: { zh: "合伙人", en: "Partners" } },
    { a: "mike", b: "gus", type: "employ", label: { zh: "效力", en: "In service" } },
    { a: "mike", b: "nacho", type: "ally", label: { zh: "暗中合作", en: "Quiet alliance" } },
    { a: "mike", b: "jesse", type: "ally", label: { zh: "保护 · 师徒", en: "Protector" } },
    { a: "nacho", b: "lalo", type: "enemy", label: { zh: "叛徒 · 死敌", en: "Betrayer · enemy" } },
    { a: "nacho", b: "tuco", type: "crew", label: { zh: "手下", en: "Crew" } },
    { a: "lalo", b: "gus", type: "enemy", label: { zh: "死敌", en: "Blood enemy" } },
    { a: "tuco", b: "hector", type: "family", label: { zh: "叔侄", en: "Uncle · nephew" } },
    { a: "hector", b: "lalo", type: "family", label: { zh: "叔侄", en: "Uncle · nephew" } },
    { a: "walter", b: "jesse", type: "partner", label: { zh: "搭档 · 互相毁灭", en: "Partners · mutual ruin" } },
    { a: "hank", b: "walter", type: "pursuit", label: { zh: "追捕", en: "Manhunt" } },
    { a: "gus", b: "walter", type: "employ", label: { zh: "雇主", en: "Employer" } }
  ],

  timeline: [
    {
      year: "2002",
      label: { zh: "邮件室", en: "THE MAILROOM" },
      title: { zh: "吉米·麦吉尔", en: "Jimmy McGill" },
      text: {
        zh: "在 HHM 的邮件室推车，晚上在社区大学读法律。他还没学会恨自己的姓。",
        en: "Pushing a mail cart at HHM, studying law at night. He hasn't learned to hate his own name yet."
      }
    },
    {
      year: "2004",
      label: { zh: "改名", en: "THE NAME" },
      title: { zh: "索尔·古德曼", en: "Saul Goodman" },
      text: {
        zh: "“S'all good, man.” 一句玩笑变成招牌：亮色西装、霓虹灯箱、永不关机的一元店式正义。",
        en: "“S'all good, man.” A joke becomes a brand: loud suits, neon, and cut-price justice that never closes."
      }
    },
    {
      year: "2008",
      label: { zh: "卡特尔", en: "THE CARTEL" },
      title: { zh: "七百万保释金", en: "Seven million in bail" },
      text: {
        zh: "拉罗走进他的办公室。索尔挣到了职业生涯最大的一笔钱，也把自己写进了萨拉曼卡的名单。",
        en: "Lalo walks into his office. Saul earns the biggest fee of his career — and writes his name onto a Salamanca list."
      }
    },
    {
      year: "2009",
      label: { zh: "冰毒帝国", en: "THE EMPIRE" },
      title: { zh: "海森堡的律师", en: "Counsel to Heisenberg" },
      text: {
        zh: "他为沃尔特和杰西处理钱、身份和尸体。办公室越亮，他离自己越远。",
        en: "He handles money, identities and bodies for Walt and Jesse. The brighter the office, the further he gets from himself."
      }
    },
    {
      year: "2010",
      label: { zh: "消失", en: "THE EXIT" },
      title: { zh: "吉恩·塔卡维奇", en: "Gene Takavic" },
      text: {
        zh: "吸尘器店后门，一条新名字。奥马哈的肉桂卷柜台后面，索尔学会不说话。",
        en: "A back room behind a vacuum shop, and a new name. Behind a Cinnabon counter in Omaha, Saul learns to say nothing."
      }
    }
  ]
};
