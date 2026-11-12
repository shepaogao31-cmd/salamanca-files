/* =========================================================
   SALAMANCA FILES — interface, bilingual content, interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- copy ---------------- */

  var I18N = {
    "nav.homeAria": { zh: "返回首页", en: "Back to top" },
    "nav.aria": { zh: "主导航", en: "Main navigation" },
    "nav.files": { zh: "成员档案", en: "Member Files" },
    "nav.tree": { zh: "家族关系", en: "Bloodline" },
    "nav.about": { zh: "档案说明", en: "Colophon" },
    "nav.open": { zh: "打开档案", en: "Open File" },
    "lang.aria": { zh: "语言切换 / Language", en: "Language / 语言切换" },

    "hero.kicker": { zh: "档案编号 0317 · 阿尔伯克基，新墨西哥", en: "DOSSIER Nº 0317 · ALBUQUERQUE, NM" },
    "hero.titleTop": { zh: "萨拉曼卡", en: "The Family" },
    "hero.titleMain": { zh: "SALAMANCA", en: "SALAMANCAS" },
    "hero.lede": {
      zh: "在阿尔伯克基的荒漠里，家族不是靠血缘维系，而是靠恐惧、忠诚，以及一声铃响。",
      en: "In the desert outside Albuquerque, family is held together not by blood, but by fear, loyalty, and the sound of a bell."
    },
    "hero.cta1": { zh: "打开第一份档案", en: "Open the first file" },
    "hero.cta2": { zh: "查看家族关系", en: "View the bloodline" },
    "hero.meta1": { zh: "成员档案", en: "Member files" },
    "hero.meta2": { zh: "可旋转 3D 形象", en: "Rotatable 3D pieces" },
    "hero.meta3": { zh: "1992—2004", en: "1992—2004" },
    "hero.imgAlt": {
      zh: "赫克托·萨拉曼卡的原剧造型 3D 重建半身像",
      en: "A 3D reconstruction bust of Héctor Salamanca based on his on-screen look"
    },
    "hero.caption": {
      zh: "<span>图 01</span> 赫克托·萨拉曼卡 · 原剧造型 3D 重建 / 灯光渲染",
      en: "<span>FIG. 01</span> Héctor Salamanca · Reference-based 3D reconstruction / lighting render"
    },
    "hero.scroll": { zh: "向下滚动 · 打开档案", en: "Scroll to open the file" },
    "hero.mottoSub": { zh: "血会呼唤血。", en: "Blood calls blood." },

    "intro.title": { zh: "六份档案，<br>一条血脉。", en: "Six files.<br>One bloodline." },
    "intro.lede": {
      zh: "从轮椅上的族长，到沙漠公路上的双胞胎处刑人——萨拉曼卡家族用最原始的方式经营生意：把恐惧做成家规。",
      en: "From the patriarch in his wheelchair to the twin executioners on a desert highway, the Salamancas run their business the old way: they turn fear into a family rule."
    },
    "intro.copy": {
      zh: "这里收录六位主要成员。每一件 3D 形象都以原剧角色造型为参考，通过 3D 重建或浮雕化处理生成，并以暗色灯光重新渲染；它们不是 AMC 官方模型，也不是演员的数字扫描。点击档案，拖动模型，从任意角度审视这个家族。",
      en: "Six members are collected here. Each 3D piece is reconstructed from the characters' original on-screen looks, then re-lit for this archive. These are not official AMC models or digital scans of the actors. Open a file, drag the model, and study the family from any angle."
    },
    "intro.stat1": { zh: "MAIN MEMBERS<br>主要成员", en: "MAIN MEMBERS<br>In the files" },
    "intro.stat2": { zh: "SERIES<br>两部剧集", en: "SERIES<br>Breaking Bad / Better Call Saul" },
    "intro.stat3": { zh: "RULE<br>家族至上", en: "RULE<br>Family above all" },
    "intro.confidential": {
      zh: "<span>机密</span> 仅供家族内部使用 · 禁止复制",
      en: "<span>CONFIDENTIAL</span> FOR FAMILY USE ONLY · DO NOT COPY"
    },

    "files.title": { zh: "成员档案", en: "Member Files" },
    "files.note": {
      zh: "点击卡片 · 打开档案<br>拖动模型 · 环视检视",
      en: "Tap a card · open the file<br>Drag the model · inspect in 3D"
    },
    "files.noscript": { zh: "请启用 JavaScript 以查看 3D 角色档案。", en: "Please enable JavaScript to view the 3D character files." },
    "files.cta": { zh: "查阅档案", en: "Open file" },
    "files.noWebgl": {
      zh: "此浏览器未启用 WebGL，3D 形象暂不可用。",
      en: "WebGL is unavailable in this browser; the 3D figures cannot be rendered."
    },
    "files.assetMissing": {
      zh: "3D 模型文件未加载，请检查 assets 目录。",
      en: "The 3D model files did not load. Check the assets folder."
    },

    "interlude.text": {
      zh: "在萨拉曼卡家，沉默比枪更响。<br>而一声铃响，足够让整间屋子停止呼吸。",
      en: "In this family, silence is louder than a gun.<br>And one ring of the bell is enough to stop the room from breathing."
    },

    "tree.title": { zh: "家族关系", en: "Bloodline" },
    "tree.intro": {
      zh: "简化示意，只列出主要登场成员。<br>在这个家里，称呼从来不只是称呼。",
      en: "A simplified diagram of the main on-screen members.<br>In this house, a title is never just a title."
    },
    "tree.aria": { zh: "萨拉曼卡家族关系示意图", en: "Simplified Salamanca family tree" },
    "tree.roleMatriarch": { zh: "家族之母", en: "MATRIARCH" },
    "tree.nameAbuelita": { zh: "萨拉曼卡奶奶", en: "Abuelita" },
    "tree.smallAbuelita": { zh: "ABUELITA", en: "萨拉曼卡奶奶" },
    "tree.rolePatriarch": { zh: "族长 / 叔父", en: "PATRIARCH / UNCLE" },
    "tree.nameHector": { zh: "赫克托", en: "Héctor" },
    "tree.smallHector": { zh: "HÉCTOR", en: "赫克托" },
    "tree.roleGhost": { zh: "其他支系", en: "OTHER BRANCHES" },
    "tree.nameGhost": { zh: "——", en: "——" },
    "tree.smallGhost": { zh: "UNSEEN", en: "未登场" },
    "tree.roleTuco": { zh: "孙辈 / 分销", en: "GRANDSON / DISTRIBUTION" },
    "tree.nameTuco": { zh: "屠库", en: "Tuco" },
    "tree.smallTuco": { zh: "TUCO", en: "屠库" },
    "tree.roleLalo": { zh: "孙辈 / 操盘", en: "GRANDSON / OPERATIONS" },
    "tree.nameLalo": { zh: "拉罗", en: "Lalo" },
    "tree.smallLalo": { zh: "LALO", en: "拉罗" },
    "tree.roleMarco": { zh: "孙辈 / 处刑", en: "GRANDSON / ENFORCER" },
    "tree.nameMarco": { zh: "马可", en: "Marco" },
    "tree.smallMarco": { zh: "MARCO", en: "马可" },
    "tree.roleLeonel": { zh: "孙辈 / 处刑", en: "GRANDSON / ENFORCER" },
    "tree.nameLeonel": { zh: "莱昂内", en: "Leonel" },
    "tree.smallLeonel": { zh: "LEONEL", en: "莱昂内" },
    "tree.foot": {
      zh: "<span>血缘示意</span> 赫克托是四人的叔父，四人互为表亲；未包含未登场或未具名支系 · 点击节点打开档案",
      en: "<span>SIMPLIFIED BLOODLINE</span> Héctor is their uncle; the four are cousins. Unseen or unnamed branches omitted · select a node to open its file"
    },

    "about.title": { zh: "关于这份档案", en: "About this dossier" },
    "about.p1": {
      zh: "这是一份非官方的粉丝创作图鉴，面向《绝命毒师》与《风骚律师》的观众。页面中的人物、剧情与台词版权归 AMC / Sony Pictures Television 及相关创作者所有。",
      en: "This is an unofficial fan-made character index for viewers of Breaking Bad and Better Call Saul. Characters, storylines and dialogue belong to AMC / Sony Pictures Television and the original creators."
    },
    "about.p2": {
      zh: "所有 3D 形象都以《风骚律师》与《绝命毒师》中的原剧造型为参考，通过 3D 重建生成，再以暗色灯光重新渲染。细节经过风格化处理，并非 AMC 官方模型或演员的数字扫描。页面不联网即可浏览，桌面端与移动端均可拖拽旋转。",
      en: "Every 3D piece is reconstructed from the characters' original on-screen looks in Better Call Saul and Breaking Bad, then re-lit for this archive. Details are stylised; these are not official AMC models or digital scans of the actors. The page works offline, and the models can be rotated on desktop and mobile."
    },
    "about.relief": {
      zh: "马可与莱昂内是双胞胎，用两尊独立建模很难看出差别，因此这两位保留原剧影像：暗调剧照装进金属档案框，作为一页案卷照片存档，而不是再塑一尊似像非像的模型。",
      en: "Marco and Leonel are identical twins, and two separate reconstructions would blur them together. These two keep the original on-screen stills instead, mounted like a photograph in a case file rather than turned into another almost-right model."
    },
    "about.dtBuilt": { zh: "建造", en: "Built with" },
    "about.ddBuilt": { zh: "Three.js · 原生 HTML / CSS / JS", en: "Three.js · vanilla HTML / CSS / JS" },
    "about.dtImage": { zh: "图像", en: "Imagery" },
    "about.ddImage": { zh: "原剧造型 3D 重建 / 原剧影像", en: "Reference-based 3D / on-screen stills" },
    "about.dtNote": { zh: "提示", en: "Note" },
    "about.dtAuthor": { zh: "作者", en: "Author" },
    "about.dtSource": { zh: "源码", en: "Source" },
    "about.ddNote": { zh: "档案含剧情结局剧透，已折叠处理", en: "Contains ending spoilers, hidden by default" },

    "footer.tagline": { zh: "萨拉曼卡家族档案 · 非官方粉丝作品", en: "The Salamanca family files · An unofficial fan project" },
    "footer.note": {
      zh: "人物与剧集版权归原权利人所有。<br>3D 形象为基于原剧造型的粉丝再创作。",
      en: "Characters and series © their respective rights holders.<br>3D likenesses are fan-made reconstructions based on the series' look."
    },
    "footer.top": { zh: "回到顶部", en: "Back to top" },
    "footer.glCheck": { zh: "3D 诊断", en: "3D check" },

    "modal.closeAria": { zh: "关闭档案", en: "Close file" },
    "modal.stageStatus": { zh: "拖动旋转", en: "Drag to rotate" },
    "modal.statusPhoto": { zh: "档案照片", en: "ARCHIVE PRINT" },
    "modal.hintPhoto": { zh: "原剧影像 · 档案照片", en: "On-screen still · archive print" },
    "modal.placeholder": { zh: "正在载入 3D 人物…", en: "Loading 3D figure…" },
    "modal.hintMain": { zh: "拖动旋转", en: "Drag to rotate" },
    "modal.hintZoom": { zh: "· 滚轮缩放", en: "· Scroll to zoom" },
    "modal.auto": { zh: "自动旋转", en: "Auto rotate" },
    "modal.reset": { zh: "重置视角", en: "Reset view" },
    "modal.metaRole": { zh: "身份", en: "Role" },
    "modal.metaFaction": { zh: "阵营", en: "Faction" },
    "modal.metaEra": { zh: "活跃", en: "Active" },
    "modal.traits": { zh: "性格特征", en: "Traits" },
    "modal.style": { zh: "标志性风格", en: "Signature style" },
    "modal.spoiler": { zh: "结局档案 · 点击解密", en: "Ending file · reveal" },
    "modal.prev": { zh: "上一位", en: "Previous" },
    "modal.next": { zh: "下一位", en: "Next" },

    "meta.title": {
      zh: "萨拉曼卡家族档案 · SALAMANCA FILES",
      en: "Salamanca Family Files · A Better Call Saul 3D Dossier"
    },
    "meta.description": {
      zh: "《风骚律师》萨拉曼卡家族主要角色图鉴：赫克托、屠库、拉罗、马可、莱昂内与萨拉曼卡奶奶的原剧造型 3D 重建档案。",
      en: "A bilingual 3D character dossier of the Salamanca family from Better Call Saul: Héctor, Tuco, Lalo, Marco, Leonel and Abuelita, reconstructed from their on-screen looks."
    },
    "lang.status": { zh: "当前语言：中文", en: "Current language: English" }
  };

  /* ---------------- character dossier ---------------- */

  var CHARACTERS = [
    {
      id: "hector",
      num: "01",
      accent: "#d6a552",
      tagZh: "族长",
      tagEn: "PATRIARCH",
      name: { zh: "赫克托·萨拉曼卡", en: "Héctor Salamanca" },
      latin: "HÉCTOR SALAMANCA",
      alias: { zh: "叮叮叔 / Tío Héctor", en: "Ding Ding / Tío Héctor" },
      role: { zh: "家族族长 · 集团元老", en: "Family Patriarch · Cartel Elder" },
      faction: { zh: "萨拉曼卡家族 / 华雷斯集团", en: "Salamanca Family / Juárez Cartel" },
      era: { zh: "《风骚律师》S2–S6 · 《绝命毒师》S2–S4", en: "Better Call Saul S2–S6 · Breaking Bad S2–S4" },
      tagline: { zh: "他不必开口。铃声落下，就是判决。", en: "He doesn't need to speak. When the bell rings, the verdict is in." },
      summary: {
        zh: "赫克托靠旧派的规矩与绝对的恐惧撑起萨拉曼卡的名号。中风之后，他被困在自己的身体里，只剩眼神与一只黄铜按铃还能动——可他的权威没有衰减半分。轮椅不是弱点，是王座。",
        en: "Héctor built the Salamanca name on old-world discipline and absolute fear. After a stroke leaves him trapped inside his own body, able to move only his eyes and a brass call bell, his authority does not weaken by a single degree. The wheelchair is not a weakness. It is a throne."
      },
      traits: {
        zh: ["记仇", "暴戾", "控制欲", "旧派尊严"],
        en: ["Vindictive", "Domineering", "Controlling", "Old-school"]
      },
      style: {
        zh: ["草帽与浅色瓜亚贝拉衬衫", "轮椅与黄铜按铃", "白色鬓发与浓密胡须", "鹰隼般的凝视"],
        en: ["Straw hat and guayabera", "Wheelchair and brass bell", "White side hair, heavy mustache", "A hawk's stare"]
      },
      quote: "Ding! Ding! Ding!",
      quoteTranslation: { zh: "叮。叮。叮。", en: "" },
      quoteNote: {
        zh: "手按铃是他唯一剩下的语言，也是所有人最不想听到的最后一句话。",
        en: "The bell is the only language he has left — and the last thing anyone wants to hear."
      },
      cardQuote: { zh: "“叮。叮。叮。”", en: "“Ding! Ding! Ding!”" },
      fate: {
        zh: "在养老院中与古斯·弗林同归于尽。",
        en: "Dies in a retirement home, taking Gustavo Fring with him."
      }
    },
    {
      id: "tuco",
      num: "02",
      accent: "#c47a4a",
      tagZh: "狂徒",
      tagEn: "WILDCARD",
      name: { zh: "屠库·萨拉曼卡", en: "Tuco Salamanca" },
      latin: "TUCO SALAMANCA",
      alias: { zh: "屠库 / 疯子屠库", en: "Tuco / The Wildcard" },
      role: { zh: "家族分销头目 · 阿尔伯克基", en: "Distribution Boss · Albuquerque" },
      faction: { zh: "萨拉曼卡家族", en: "Salamanca Family" },
      era: { zh: "《风骚律师》S1–S2 · 《绝命毒师》S1–S2", en: "Better Call Saul S1–S2 · Breaking Bad S1–S2" },
      tagline: { zh: "他的情绪可以在一个音节之间翻转。那就是警告。", en: "His mood can turn on a syllable. That's the warning." },
      summary: {
        zh: "屠库把家族的地面生意经营成一场高烧：喧闹、多疑、致命。他可以在同一口气里拥抱你、再打断你。家族是神圣的，其他一切都可以随时作废。",
        en: "Tuco runs the family's street trade like a fever dream: loud, paranoid, lethal. He can embrace a man and break him in the same breath. Family is sacred; everything else is disposable."
      },
      traits: {
        zh: ["躁狂", "多疑", "残暴", "家族崇拜"],
        en: ["Manic", "Paranoid", "Violent", "Family-worshipping"]
      },
      style: {
        zh: ["短寸头与山羊胡", "印花衬衫与银链", "随手可及的枪", "蓝冰毒"],
        en: ["Cropped hair, goatee", "Patterned shirt, silver chain", "A gun within reach", "Blue meth"]
      },
      quote: "Tight, tight, tight!",
      quoteTranslation: { zh: "紧、紧、紧！", en: "" },
      quoteNote: {
        zh: "他说这句话时正盯着自己的货，像在祈祷，也像在预告失控。",
        en: "Said over his own product — a prayer, a threat, and a warning that he is already slipping."
      },
      cardQuote: { zh: "“Tight, tight, tight!”", en: "“Tight, tight, tight!”" },
      fate: {
        zh: "与汉克·施雷德在沙漠枪战中被击毙。",
        en: "Killed by Hank Schrader in a desert shootout after kidnapping Walt and Jesse."
      }
    },
    {
      id: "lalo",
      num: "03",
      accent: "#b65a4a",
      tagZh: "操盘手",
      tagEn: "OPERATOR",
      name: { zh: "拉罗·萨拉曼卡", en: "Lalo Salamanca" },
      latin: "LALO SALAMANCA",
      alias: { zh: "爱德华多·“拉罗”·萨拉曼卡 / Lalo", en: "Eduardo “Lalo” Salamanca" },
      role: { zh: "家族在墨西哥的操盘手 · 谈判与处刑", en: "Cartel Operator · Mexico" },
      faction: { zh: "萨拉曼卡家族 / 华雷斯集团", en: "Salamanca Family / Juárez Cartel" },
      era: { zh: "《风骚律师》S4–S6", en: "Better Call Saul S4–S6" },
      tagline: { zh: "他笑得越礼貌，你离坟墓越近。", en: "The more polite the smile, the closer the grave." },
      summary: {
        zh: "拉罗是家族最迷人的门面，也是最锋利的刀。他带着真诚的好奇提问，记住每一个回答，然后不失礼貌地结束一个人。他把生意当成手艺，把目击者当成未完成的工序。",
        en: "Lalo is the family's charming face and its sharpest blade. He asks questions with genuine curiosity, remembers every answer, and ends a man without losing his manners. He treats the business as a craft — and every witness as unfinished work."
      },
      traits: {
        zh: ["迷人", "耐心", "好奇", "冷酷"],
        en: ["Magnetic", "Patient", "Inquisitive", "Ice-cold"]
      },
      style: {
        zh: ["油亮背头与灰白鬓角", "红蓝花卉衬衫、敞领", "修剪整齐的胡须", "礼貌的西班牙语"],
        en: ["Slicked-back hair, grey temples", "Red-and-blue floral shirt", "A neatly trimmed mustache", "Courteous Spanish"]
      },
      quote: "I'm Lalo.",
      quoteTranslation: { zh: "我是拉罗。", en: "" },
      quoteNote: {
        zh: "一次最简单的自我介绍，听起来却像结案陈词。",
        en: "A simple introduction. Somehow it sounds like a closing argument."
      },
      cardQuote: { zh: "“I'm Lalo.”", en: "“I'm Lalo.”" },
      fate: {
        zh: "在洗衣厂地下与古斯·弗林决斗，被枪杀。",
        en: "Killed by Gustavo Fring in the underground laundry after their duel."
      }
    },
    {
      id: "marco",
      num: "04",
      accent: "#a3abb0",
      tagZh: "处刑人",
      tagEn: "EXECUTIONER",
      name: { zh: "马可·萨拉曼卡", en: "Marco Salamanca" },
      latin: "MARCO SALAMANCA",
      alias: { zh: "马可 / 双胞胎之一", en: "Marco / One of the Twins" },
      role: { zh: "家族处刑人 · 双胞胎", en: "Family Executioner · The Twins" },
      faction: { zh: "萨拉曼卡家族", en: "Salamanca Family" },
      era: { zh: "《绝命毒师》S3 · 《风骚律师》S5–S6", en: "Breaking Bad S3 · Better Call Saul S5–S6" },
      tagline: { zh: "他们不交谈。他们只完成。", en: "They don't talk. They finish." },
      summary: {
        zh: "马可与双胞胎兄弟像一个整体行动：同样的西装，同样的沉默，同样的目的。他们不是谈判者，也不是士兵，而是家族对“不敬”的回应——一句用血写成、无需开口的判决。",
        en: "Marco and his twin move as one organism: same suit, same silence, same purpose. They are not negotiators or soldiers. They are the family's answer to disrespect — a sentence written in blood and delivered without a word."
      },
      traits: {
        zh: ["沉默", "仪式感", "服从", "冷血"],
        en: ["Silent", "Ritualistic", "Obedient", "Ruthless"]
      },
      style: {
        zh: ["剃青头与短山羊胡", "灰色西装与印花衬衫", "银色骷髅 / 擦亮的靴尖", "与莱昂内近乎同步的步伐"],
        en: ["Shaved head, short goatee", "Grey suit, patterned shirt", "Silver skull / polished boot tips", "Lockstep with Leonel"]
      },
      quote: "……",
      quoteTranslation: { zh: "", en: "" },
      quoteNote: {
        zh: "在双胞胎的世界里，沉默不是空白，是倒计时。",
        en: "In the twins' world, silence is not empty. It is a countdown."
      },
      cardQuote: { zh: "“……”", en: "“……”" },
      fate: {
        zh: "在停车场枪战中被汉克击毙。",
        en: "Shot by Hank Schrader in the hospital parking lot."
      }
    },
    {
      id: "leonel",
      num: "05",
      accent: "#8f9fa4",
      tagZh: "处刑人",
      tagEn: "EXECUTIONER",
      name: { zh: "莱昂内·萨拉曼卡", en: "Leonel Salamanca" },
      latin: "LEONEL SALAMANCA",
      alias: { zh: "莱昂内 / 双胞胎之一", en: "Leonel / One of the Twins" },
      role: { zh: "家族处刑人 · 双胞胎", en: "Family Executioner · The Twins" },
      faction: { zh: "萨拉曼卡家族", en: "Salamanca Family" },
      era: { zh: "《绝命毒师》S3 · 《风骚律师》S5–S6", en: "Breaking Bad S3 · Better Call Saul S5–S6" },
      tagline: { zh: "一个人倒下，另一个会继续走完。", en: "One falls. The other keeps walking." },
      summary: {
        zh: "马可走到哪里，莱昂内就跟到哪里——穿过沙漠、医院和紧锁的门。他是一份威胁中更安静的那一半，精确到近乎仪式。复仇对他而言不是情绪，是行程表。",
        en: "Where Marco goes, Leonel follows — through deserts, hospitals and locked doors. He is the quieter half of a single threat, methodical to the point of ritual. Revenge is not an emotion for him. It is an itinerary."
      },
      traits: {
        zh: ["执拗", "精准", "耐心", "复仇"],
        en: ["Unyielding", "Precise", "Patient", "Vengeful"]
      },
      style: {
        zh: ["剃青头与短山羊胡", "深灰西装与黑衬衫", "斧头 / 黑手套", "与马可近乎同步的步伐"],
        en: ["Shaved head, short goatee", "Charcoal suit, black shirt", "Axe / black gloves", "Lockstep with Marco"]
      },
      quote: "……",
      quoteTranslation: { zh: "", en: "" },
      quoteNote: {
        zh: "两个共享同一意图的人之间，不需要语言。",
        en: "No words are needed between two men who share the same intent."
      },
      cardQuote: { zh: "“……”", en: "“……”" },
      fate: {
        zh: "马可死后，他在医院病床上被迈克终结。",
        en: "After Marco's death, he is killed by Mike Ehrmantraut in his hospital bed."
      }
    },
    {
      id: "abuelita",
      num: "06",
      accent: "#7f9fb4",
      tagZh: "家族之母",
      tagEn: "MATRIARCH",
      name: { zh: "萨拉曼卡奶奶", en: "Abuelita" },
      latin: "ABUELITA",
      alias: { zh: "Mamá Salamanca / 祖母", en: "Mamá Salamanca / Grandmother" },
      role: { zh: "家族之母 · 萨拉曼卡宅邸", en: "Family Matriarch · Salamanca House" },
      faction: { zh: "萨拉曼卡家族", en: "Salamanca Family" },
      era: { zh: "《风骚律师》S1（提及于 S5）", en: "Better Call Saul S1 (mentioned in S5)" },
      tagline: { zh: "她递给你糖果，也知道尸体被埋在哪里。", en: "She offers you candy. She also knows where the bodies went." },
      summary: {
        zh: "她是赫克托的母亲，也是屠库、拉罗、马可与莱昂内的祖母。萨拉曼卡奶奶在老宅的扶手椅里统治着家族的日常：永远开着的电视剧、对孙辈毫无保留的溺爱。她的忠诚绝对而挑剔——为了家人，她可以对警察面不改色地撒谎；对外人，她只留一扇锁着的门。",
        en: "She is Héctor's mother and the grandmother of Tuco, Lalo, Marco and Leonel. Abuelita rules the family's domestic world from a worn armchair, surrounded by telenovelas and unstinting affection for her grandsons. Her loyalty is absolute and selective: for family, she will lie to the police without blinking; for outsiders, she has only a locked door."
      },
      traits: {
        zh: ["慈爱", "护短", "精明", "家族至上"],
        en: ["Devoted", "Indulgent", "Shrewd", "Clannish"]
      },
      style: {
        zh: ["深色头发向后挽起", "蓝色针织开衫", "浅蓝碎花上衣与金心吊坠", "永远开着的电视剧"],
        en: ["Dark hair pulled back", "Blue knitted cardigan", "Floral blouse, gold heart pendant", "The television always on"]
      },
      quote: "Mijo...",
      quoteTranslation: { zh: "孩子……", en: "My boy…" },
      quoteNote: {
        zh: "一句亲昵的称呼，能让房间变软，也能让对话结束。",
        en: "A term of endearment that can soften a room — or end a conversation."
      },
      cardQuote: { zh: "“Mijo...”", en: "“Mijo...”" },
      fate: {
        zh: "在《风骚律师》第五季中被暗示已经离世，具体时间未明。",
        en: "Her death is implied by season 5 of Better Call Saul; the exact timing is unknown."
      }
    }
  ];

  /* ---------------- state / dom ---------------- */

  var state = {
    lang: "zh",
    portraits: {},
    current: 0,
    live: null,
    liveInit: false,
    open: false,
    auto: true,
    lastFocus: null,
    noWebgl: false,
    portraitsStarted: false,
    stageStatus: "idle",
    scrollY: 0
  };

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var dom = {
    html: document.documentElement,
    grid: $("#files-grid"),
    modal: $("#modal"),
    panel: $(".modal__panel"),
    stageCanvas: $("#stage-canvas"),
    stagePlaceholder: $("#stage-placeholder"),
    close: $(".modal__close"),
    info: $("#modal-info"),
    langButtons: $$("[data-lang-btn]"),
    nav: $("#site-nav"),
    bar: $("#scroll-bar"),
    cardCount: $(".files__count")
  };

  function t(key) {
    var entry = I18N[key];
    if (!entry) return "";
    return entry[state.lang] || entry.zh || "";
  }

  function tObj(obj) {
    if (!obj) return "";
    return obj[state.lang] || obj.zh || "";
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function charById(id) {
    for (var i = 0; i < CHARACTERS.length; i++) if (CHARACTERS[i].id === id) return CHARACTERS[i];
    return null;
  }

  function charIndex(id) {
    for (var i = 0; i < CHARACTERS.length; i++) if (CHARACTERS[i].id === id) return i;
    return 0;
  }

  function cardAlt(c) {
    return state.lang === "zh"
      ? c.name.zh + "的原剧造型 3D 重建形象"
      : "3D reconstruction of " + c.name.en;
  }

  function openLabel(c) {
    return state.lang === "zh" ? "打开" + c.name.zh + "的档案" : "Open the file for " + c.name.en;
  }

  /* ---------------- static translation ---------------- */

  function applyLanguage(lang, opts) {
    var options = opts || {};
    state.lang = lang === "en" ? "en" : "zh";
    state.current = state.current || 0;

    dom.html.setAttribute("lang", state.lang === "zh" ? "zh-CN" : "en");
    dom.html.setAttribute("data-lang", state.lang);

    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (I18N[key]) el.textContent = t(key);
    });
    $$("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (I18N[key]) el.innerHTML = t(key);
    });
    $$("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (I18N[key]) el.setAttribute("aria-label", t(key));
    });
    $$("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (I18N[key]) el.setAttribute("alt", t(key));
    });

    dom.langButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-lang-btn") === state.lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    document.title = t("meta.title");
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.description"));

    renderCards();
    if (state.open) renderModal(CHARACTERS[state.current], true);
    if (state.noWebgl) disableLiveStage();
    updateStageStatus();

    if (!options.silent) {
      try { localStorage.setItem("salamanca-lang", state.lang); } catch (err) { /* noop */ }
    }
  }

  /* ---------------- cards ---------------- */

  function renderCards() {
    if (!dom.grid) return;
    var html = CHARACTERS.map(function (c, i) {
      var url = state.portraits[c.id];
      var hasImage = !!url;
      var alt = escapeHTML(cardAlt(c));
      var label = escapeHTML(openLabel(c));
      var tag = state.lang === "zh" ? c.tagEn + " / " + c.tagZh : c.tagEn;
      var isPhoto = c.id === "marco" || c.id === "leonel";
      var badge = isPhoto ? (state.lang === "zh" ? "原剧影像" : "ON-SCREEN") : "3D";

      return '' +
        '<article class="file-card reveal" data-open="' + c.id + '" role="button" tabindex="0" ' +
        'aria-label="' + label + '" style="--accent:' + c.accent + ';--reveal-delay:' + (i * 70) + 'ms">' +
          '<div class="file-card__media">' +
            '<div class="portrait-skeleton" data-skeleton="' + c.id + '"></div>' +
            '<img data-portrait="' + c.id + '" alt="' + alt + '"' + (hasImage ? ' src="' + url + '"' : "") + ' loading="lazy" decoding="async">' +
            '<span class="file-card__num">' + c.num + '</span>' +
            '<span class="file-card__badge" data-badge>' + badge + '</span>' +
            '<span class="file-card__tag">' + escapeHTML(tag) + '</span>' +
            '<span class="file-card__scan" aria-hidden="true"></span>' +
          '</div>' +
          '<div class="file-card__body">' +
            '<p class="file-card__en">' + c.latin + '</p>' +
            '<h3 class="file-card__name">' + escapeHTML(c.name[state.lang]) + '</h3>' +
            '<p class="file-card__role">' + escapeHTML(c.role[state.lang]) + '</p>' +
            '<p class="file-card__quote">' + escapeHTML(c.cardQuote[state.lang]) + '</p>' +
            '<div class="file-card__foot">' +
              '<span class="file-card__cta">' + t("files.cta") + '</span>' +
              '<svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.3"/></svg>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join("");

    dom.grid.innerHTML = html;
    $$(".file-card", dom.grid).forEach(function (card) {
      if (revealObserver) revealObserver.observe(card);
    });
    if (dom.cardCount) dom.cardCount.textContent = "/ " + (CHARACTERS.length < 10 ? "0" : "") + CHARACTERS.length;

    if (state.lang === "en") {
      dom.grid.classList.add("is-en");
    } else {
      dom.grid.classList.remove("is-en");
    }
    startPortraits();
  }

  /* ---------------- portraits ---------------- */

  function markFallback(id) {
    $$('[data-skeleton="' + id + '"]').forEach(function (sk) { sk.classList.add("is-hidden"); });
    $$('img[data-portrait="' + id + '"]').forEach(function (img) {
      img.style.display = "none";
      var wrap = img.parentElement;
      if (wrap && !wrap.querySelector(".media-fallback")) {
        var c = charById(id);
        var fallback = document.createElement("div");
        fallback.className = "media-fallback";
        fallback.setAttribute("aria-hidden", "true");
        fallback.innerHTML = "<span>" + c.num + "</span><small>3D SIGNAL LOST</small>";
        wrap.appendChild(fallback);
      }
    });
  }

  function applyPortrait(id, url) {
    if (!url) {
      state.portraits[id] = null;
      markFallback(id);
      return;
    }
    state.portraits[id] = url;
    $$('img[data-portrait="' + id + '"]').forEach(function (img) {
      img.style.display = "";
      img.classList.remove("is-loaded");
      if (img.getAttribute("src") !== url) img.src = url;
      var reveal = function () {
        img.classList.add("is-loaded");
        var photo = img.closest(".dossier-card__photo") || img.closest(".file-card__media");
        if (photo) {
          var sk = photo.querySelector(".portrait-skeleton");
          if (sk) sk.classList.add("is-hidden");
        }
      };
      if (img.complete && img.naturalWidth) {
        reveal();
      } else {
        img.addEventListener("load", reveal, { once: true });
        img.addEventListener("error", function () { markFallback(id); }, { once: true });
      }
    });
  }

  function startPortraits() {
    CHARACTERS.forEach(function (c) {
      applyPortrait(c.id, "assets/img/" + c.id + ".jpg");
    });
  }

  function disableLiveStage(kind) {
    var prev = dom.stageCanvas ? dom.stageCanvas.querySelector(".gl-fallback") : null;
    var useKind = kind || (prev ? prev.getAttribute("data-gl-kind") : "webgl");
    if (dom.stagePlaceholder) {
      var label = dom.stagePlaceholder.querySelector("span");
      if (label) label.textContent = useKind === "missing" ? t("files.assetMissing") : t("files.noWebgl");
    }
    var hint = $(".stage__hint");
    var controls = $(".stage__controls");
    if (hint) hint.style.display = "none";
    if (controls) controls.style.display = "none";
    var status = $("#stage-status");
    if (status) status.textContent = useKind === "missing" ? "ASSET OFFLINE" : "WEBGL OFFLINE";
    if (window.GLSupport && dom.stageCanvas) {
      window.GLSupport.mountFallback(dom.stageCanvas, {
        kind: useKind,
        onRetry: retryLiveStage
      });
    }
  }

  function retryLiveStage() {
    if (!dom.stageCanvas) return;
    if (window.GLSupport) window.GLSupport.clearFallback(dom.stageCanvas);
    state.noWebgl = false;
    state.live = null;
    state.liveInit = false;
    var hint = $(".stage__hint");
    var controls = $(".stage__controls");
    if (hint) hint.style.display = "";
    if (controls) controls.style.display = "";
    var live = ensureLive();
    if (live && !live.isFallback) {
      var c = CHARACTERS[state.current];
      live.start();
      if (c) live.setCharacter(c.id);
      live.setAuto(state.auto);
      live.resize();
    } else if (state.noWebgl) {
      disableLiveStage();
    }
  }

  /* ---------------- modal ---------------- */

  function setText(sel, value) {
    var el = $(sel);
    if (el) el.textContent = value;
  }

  var PHOTO_IDS = { marco: true, leonel: true };

  function isPhotoChar(id) {
    return !!PHOTO_IDS[id];
  }

  function applyStageMode(c) {
    if (!c) return;
    var isPhoto = isPhotoChar(c.id);
    if (dom.stageCanvas) {
      dom.stageCanvas.classList.toggle("is-photo-mode", isPhoto);
      if (isPhoto) {
        if (window.GLSupport) window.GLSupport.clearFallback(dom.stageCanvas);
        dom.stageCanvas.classList.add("is-ready");
      } else if (state.noWebgl && window.GLSupport) {
        var existing = dom.stageCanvas.querySelector(".gl-fallback");
        var kind = existing ? existing.getAttribute("data-gl-kind") : "webgl";
        window.GLSupport.mountFallback(dom.stageCanvas, { kind: kind, onRetry: retryLiveStage });
      }
    }
    var photo = $("#photo-stage");
    if (photo) {
      photo.hidden = !isPhoto;
      if (isPhoto) {
        var img = $("#photo-stage-img");
        if (img) {
          var src = "assets/img/" + c.id + ".jpg";
          if (img.getAttribute("src") !== src) img.src = src;
          img.alt = (state.lang === "zh" ? "原剧影像：" : "On-screen still of ") + c.name[state.lang];
        }
        var cap = $("#photo-stage-cap");
        if (cap) {
          cap.textContent = (state.lang === "zh" ? "原剧影像 · " : "ON-SCREEN STILL · ") + c.latin;
        }
      }
    }
    var mode = $("#stage-mode");
    if (mode) mode.textContent = isPhoto ? (state.lang === "zh" ? "原剧影像" : "ON-SCREEN") : "LIVE 3D";
    var hint = $("#hint-main");
    if (hint) hint.textContent = isPhoto ? t("modal.hintPhoto") : t("modal.hintMain");
    var zoom = $(".hint-zoom");
    if (zoom) zoom.style.display = isPhoto ? "none" : "";
    var controls = $(".stage__controls");
    if (controls) controls.style.display = isPhoto ? "none" : "";
    updateStageStatus();
  }

  function renderModal(c, keepScroll) {
    if (!c) return;
    var scroll = keepScroll ? dom.info.scrollTop : 0;

    setText("#modal-num", c.num);
    setText("#modal-en", c.latin);
    setText("#modal-en-full", c.latin);
    setText("#modal-name", c.name[state.lang]);
    setText("#modal-alias", c.alias[state.lang]);
    setText("#modal-tagline", c.tagline[state.lang]);
    setText("#modal-role", c.role[state.lang]);
    setText("#modal-faction", c.faction[state.lang]);
    setText("#modal-era", c.era[state.lang]);
    setText("#modal-summary", c.summary[state.lang]);
    setText("#modal-quote", c.quote);
    setText("#modal-quote-cn", c.quoteTranslation[state.lang] || "");
    setText("#modal-quote-note", c.quoteNote[state.lang]);
    setText("#modal-fate", c.fate[state.lang]);
    setText("#modal-count", c.num + " / 06");

    dom.panel.style.setProperty("--accent", c.accent);
    dom.info.style.setProperty("--accent", c.accent);

    var traits = $("#modal-traits");
    if (traits) {
      traits.innerHTML = c.traits[state.lang].map(function (x) {
        return "<li>" + escapeHTML(x) + "</li>";
      }).join("");
    }
    var styles = $("#modal-style");
    if (styles) {
      styles.innerHTML = c.style[state.lang].map(function (x) {
        return "<li>" + escapeHTML(x) + "</li>";
      }).join("");
    }

    var spoiler = $(".spoiler");
    if (spoiler && !keepScroll) spoiler.open = false;

    var canvas = dom.stageCanvas ? dom.stageCanvas.querySelector("canvas") : null;
    if (canvas) canvas.setAttribute("aria-label", (state.lang === "zh" ? "可交互 3D 模型：" : "Interactive 3D model of ") + c.name[state.lang]);

    applyStageMode(c);
    dom.info.scrollTop = scroll;
  }

  function ensureLive() {
    if (state.live || state.noWebgl) return state.live;
    if (!window.SalamancaModels) {
      state.noWebgl = true;
      disableLiveStage("missing");
      return null;
    }
    if (!window.SalamancaModels.isSupported()) {
      state.noWebgl = true;
      disableLiveStage("webgl");
      return null;
    }
    if (!dom.stageCanvas) return null;
    try {
      state.live = window.SalamancaModels.createLive(dom.stageCanvas, {
        auto: state.auto,
        onRetry: retryLiveStage,
        onStatus: function (status) {
          state.stageStatus = status;
          updateStageStatus();
        }
      });
      state.liveInit = true;
      if (state.live && state.live.isFallback) {
        state.noWebgl = true;
        state.live = null;
        var status2 = $("#stage-status");
        if (status2) status2.textContent = "3D OFFLINE";
        return null;
      }
      updateRotateButton();
    } catch (err) {
      console.error("Live 3D init failed", err);
      state.noWebgl = true;
      disableLiveStage("webgl");
    }
    return state.live;
  }

  function updateStageStatus() {
    var status = $("#stage-status");
    if (!status) return;
    var current = CHARACTERS[state.current];
    if (current && isPhotoChar(current.id)) {
      status.textContent = t("modal.statusPhoto");
      return;
    }
    if (state.stageStatus === "loading") status.textContent = "LOADING 3D";
    else if (state.stageStatus === "error") status.textContent = "3D OFFLINE";
    else status.textContent = t("modal.stageStatus");
  }

  function updateRotateButton() {
    var btn = $("#btn-rotate");
    if (!btn) return;
    btn.classList.toggle("is-on", state.auto);
    btn.setAttribute("aria-pressed", state.auto ? "true" : "false");
  }

  function openModal(id, trigger) {
    var c = charById(id);
    if (!c) return;
    state.lastFocus = trigger || document.activeElement;
    state.current = charIndex(id);
    state.open = true;
    state.stageStatus = "loading";

    renderModal(c, false);
    dom.modal.hidden = false;
    document.body.classList.add("is-locked");
    updateStageStatus();

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (isPhotoChar(c.id)) {
          if (state.live) state.live.stop();
          state.stageStatus = "ready";
          updateStageStatus();
          if (dom.close) dom.close.focus({ preventScroll: true });
          return;
        }
        var live = ensureLive();
        if (live) {
          live.start();
          live.setCharacter(c.id);
          live.setAuto(state.auto);
          live.resize();
        }
        if (dom.close) dom.close.focus({ preventScroll: true });
      });
    });
  }

  function closeModal() {
    if (!state.open) return;
    state.open = false;
    if (state.live) state.live.stop();
    dom.modal.hidden = true;
    document.body.classList.remove("is-locked");
    var last = state.lastFocus;
    if (last && last.focus && document.contains(last)) {
      last.focus({ preventScroll: true });
    }
    state.lastFocus = null;
  }

  function goCharacter(delta) {
    var next = (state.current + delta + CHARACTERS.length) % CHARACTERS.length;
    state.current = next;
    var c = CHARACTERS[next];
    renderModal(c, false);
    if (isPhotoChar(c.id)) {
      if (state.live) state.live.stop();
      state.stageStatus = "ready";
      updateStageStatus();
      if (dom.info) dom.info.scrollTop = 0;
      return;
    }
    state.stageStatus = "loading";
    updateStageStatus();
    requestAnimationFrame(function () {
      var live = ensureLive();
      if (live) {
        live.start();
        live.setCharacter(c.id);
        live.setAuto(state.auto);
        live.resize();
      }
    });
    if (dom.info) dom.info.scrollTop = 0;
  }

  function trapFocus(e) {
    if (!state.open || e.key !== "Tab") return;
    var focusables = $$('button, [href], input, select, textarea, summary, [tabindex]:not([tabindex="-1"])', dom.panel)
      .filter(function (el) {
        return !el.disabled && el.offsetParent !== null;
      });
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /* ---------------- reveal / scroll ---------------- */

  var revealObserver = null;

  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.06 });

    $$(".reveal").forEach(function (el) { revealObserver.observe(el); });
  }

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (dom.nav) dom.nav.classList.toggle("is-scrolled", y > 16);
    if (dom.bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
      dom.bar.style.width = pct + "%";
    }
  }

  /* ---------------- events ---------------- */

  function bindEvents() {
    document.addEventListener("click", function (e) {
      var opener = e.target.closest("[data-open]");
      if (opener) {
        e.preventDefault();
        openModal(opener.getAttribute("data-open"), opener);
        return;
      }
      if (e.target.closest("[data-close]")) {
        e.preventDefault();
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (!state.open) {
        if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("file-card")) {
          e.preventDefault();
          openModal(e.target.getAttribute("data-open"), e.target);
        }
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      trapFocus(e);
    });

    dom.langButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var lang = button.getAttribute("data-lang-btn");
        if (lang === state.lang) return;
        applyLanguage(lang);
      });
    });

    var next = $("#btn-next");
    var prev = $("#btn-prev");
    if (next) next.addEventListener("click", function () { goCharacter(1); });
    if (prev) prev.addEventListener("click", function () { goCharacter(-1); });

    var rotate = $("#btn-rotate");
    if (rotate) {
      rotate.addEventListener("click", function () {
        state.auto = !state.auto;
        updateRotateButton();
        if (state.live) state.live.setAuto(state.auto);
      });
    }

    var reset = $("#btn-reset");
    if (reset) {
      reset.addEventListener("click", function () {
        if (state.live) state.live.reset();
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    window.addEventListener("keydown", function (e) {
      if (!state.open) return;
      if (e.key === "ArrowRight" && document.activeElement && document.activeElement.closest(".modal__nav")) {
        goCharacter(1);
      }
      if (e.key === "ArrowLeft" && document.activeElement && document.activeElement.closest(".modal__nav")) {
        goCharacter(-1);
      }
    });

    var stage = dom.stageCanvas;
    if (stage) {
      stage.addEventListener("pointerenter", function () {
        var status = $("#stage-status");
        if (status && !state.noWebgl) status.textContent = state.lang === "zh" ? "拖动以旋转" : "DRAG TO ROTATE";
      });
    }
  }

  /* ---------------- boot ---------------- */

  function init() {
    var stored = null;
    try { stored = localStorage.getItem("salamanca-lang"); } catch (err) { /* noop */ }
    state.lang = stored === "en" ? "en" : "zh";

    initReveal();
    bindEvents();
    applyLanguage(state.lang, { silent: true });
    onScroll();

    startPortraits();

    $$(".file-card").forEach(function (card) {
      card.addEventListener("focus", function () {
        card.classList.add("is-visible");
      });
    });

    // If a stored language exists, keep the toggle honest.
    dom.langButtons.forEach(function (button) {
      var active = button.getAttribute("data-lang-btn") === state.lang;
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
