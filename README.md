# Salamanca Files / The McGill Network

三个互链的《风骚律师》/《绝命毒师》角色档案站点，纯静态、无构建步骤、离线可用。中英双语。

Three interlinked character archives for *Better Call Saul* / *Breaking Bad*. Static, build-free, works offline. Bilingual (中文 / English).

---

## 在线访问 / Live demo

直接点开，无需下载：

- **[萨拉曼卡档案 · Salamanca Files ↗](https://shepaogao31-cmd.github.io/salamanca-files/)**
- **[索尔关系网 · The McGill Network ↗](https://shepaogao31-cmd.github.io/salamanca-files/saul.html)**
- **[毒师档案 · The Heisenberg File ↗](https://shepaogao31-cmd.github.io/salamanca-files/walter.html)**

> 由 GitHub Pages 托管。若网络打不开，可下载本仓库后双击 `index.html` 本地打开，效果完全一致（3D 与音频都能离线运行）。

## 页面 / Pages

| 入口 | 在线打开 | 内容 |
| --- | --- | --- |
| `index.html` | [打开 ↗](https://shepaogao31-cmd.github.io/salamanca-files/) | **Salamanca Files** — 萨拉曼卡家族六位角色：赫克托、屠库、拉罗、马可、莱昂内、萨拉曼卡奶奶。含家族关系图、3D 半身像、结局剧透折叠。 |
| `saul.html` | [打开 ↗](https://shepaogao31-cmd.github.io/salamanca-files/saul.html) | **The McGill Network** — 以索尔为中心的人物关系网：15 位人物、27 条关系、阵营筛选、时间线、台词音频。 |
| `walter.html` | [打开 ↗](https://shepaogao31-cmd.github.io/salamanca-files/walter.html) | **The Heisenberg File** — 以沃尔特·怀特为中心的人物关系网：15 位人物、27 条关系、5 段时间线、台词音频。 |

三页导航互链，语言选择会记住。

## 本地运行 / Run locally

直接双击 `index.html` 即可，无需服务器。

```bash
# 或起一个本地服务器（可选）
python -m http.server 8000
# 打开 http://localhost:8000
```

## 技术 / Stack

- 原生 HTML / CSS / JavaScript，无框架、无打包
- [Three.js r128](https://threejs.org/) + GLTFLoader 渲染 3D
- 模型以 base64 内嵌在 `assets/models/*.js`，按需注入，因此 `file://` 下也能加载
- 台词音频为 AI 合成（edge-tts），非演员原声

```
.
├── index.html                 # 萨拉曼卡档案
├── saul.html                  # 索尔关系网
└── assets
    ├── css/style.css          # 萨拉曼卡站点样式
    ├── css/saul.css           # 索尔站点样式
    ├── js/app.js              # 萨拉曼卡：数据、双语、弹层
    ├── js/models.js           # Three.js 查看器（萨拉曼卡）
    ├── js/saul.js             # 索尔：关系图、档案、音频
    ├── js/saul-viewer.js      # Three.js 查看器（索尔）
    ├── js/saul-data.js        # 索尔站：15 位人物与关系数据
    ├── js/walter-data.js      # 毒师站：15 位人物与关系数据
    ├── js/gl-support.js       # WebGL 探测、降级与诊断
    ├── js/site-meta.js        # 作者署名与仓库链接
    ├── models/*.js            # 8 个 GLB 模型（base64）
    ├── img/                   # 卡片图与剧照
    └── audio/                 # 台词音频
```

## 3D 与兼容性 / 3D & compatibility

- 详情页可拖动旋转、滚轮或双指缩放，带自动旋转开关与视角重置
- 图形接口不可用时不会白屏，会给出原因和修复建议
- 页脚「3D 诊断」可查看 WebGL 状态、渲染器型号与一次真实的渲染测试
- 也可在地址后加 `?diag=1` 直接打开诊断

## 版权 / Credits & disclaimer

非官方粉丝作品，与 AMC / Sony Pictures Television 无关。人物、剧集、台词版权归原权利人所有。

3D 形象为基于原剧造型的粉丝再创作（3D 重建），不是官方模型，也不是演员的数字扫描。台词音频由 AI 合成，非演员原声。

Fan-made, unofficial, not affiliated with AMC or Sony Pictures Television. Characters, series and dialogue belong to their respective rights holders. The 3D busts are fan reconstructions based on the characters' on-screen looks — not official models, not digital scans of the actors. Voice tracks are synthesized.

## 作者 / Author

- GitHub：[@shepaogao31-cmd](https://github.com/shepaogao31-cmd)（高射炮）
- 仓库：[salamanca-files](https://github.com/shepaogao31-cmd/salamanca-files)

## License

代码以 [MIT](LICENSE) 授权。角色形象、剧照与台词不在此授权范围内。
