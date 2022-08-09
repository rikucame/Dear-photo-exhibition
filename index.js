const members = [
  {
    name: "hana",
    displayName: "Hana✽*",
    mainVisual: "hana.jpg",
    direction: "vertical",
  },
  {
    name: "suto",
    displayName: "すとう しゅんすけ",
    mainVisual: "suto.jpg",
    direction: "vertical",
  },
  {
    name: "reo",
    displayName: "Reo",
    mainVisual: "reo.jpg",
    direction: "vertical",
  },
  {
    name: "aokichi",
    displayName: "あおきち",
    mainVisual: "aokichi.jpg",
    direction: "vertical",
  },
  {
    name: "mickan",
    displayName: "甘夏蜜柑",
    mainVisual: "mickan.jpg",
    direction: "vertical",
  },
  {
    name: "kojikoji",
    displayName: "こじこじ",
    mainVisual: "kojikoji.jpg",
    direction: "vertical",
  },
  {
    name: "rikkun",
    displayName: "Rikkun",
    mainVisual: "rikuto.jpg",
    direction: "horizontal",
  },
  {
    name: "yugra",
    displayName: "Yuki Okubo",
    mainVisual: "yugra.jpg",
    direction: "vertical",
  },
  {
    name: "suzuna",
    displayName: "すずな",
    mainVisual: "suzuna.jpg",
    direction: "horizontal",
  },
  {
    name: "yu",
    displayName: "ゆう",
    mainVisual: "yu.jpg",
    direction: "vertical",
  },
];

const today = new Date().getDate();
const mainVisuals = members.slice(0, today - 6).map((data) => {
  // 要素生成
  const wrap = document.createElement("div");
  const link = document.createElement("a");
  const image = document.createElement("img");
  const shadow = document.createElement("span");
  const name = document.createElement("p");

  // クラス設定
  wrap.className = "frame-wrap";
  link.className = "frame";
  image.className = `main-visual-image-${data.direction}`;
  shadow.className = "shadow";
  name.className = "name";

  // attributeの設定
  link.href = `./members/${data.name}.html`;
  image.src = `./images/main_visuals/${data.mainVisual}`;
  name.innerHTML = data.displayName;

  // 結合
  link.appendChild(image);
  link.appendChild(shadow);
  wrap.appendChild(link);
  wrap.appendChild(name);

  return wrap;
});

window.onload = () => {
  togleDisplayArrows();
  displayTodaysExhibitors();
};

const togleDisplayArrows = () => {
  const left = document.getElementById("left-arrow").classList;
  const right = document.getElementById("right-arrow").classList;
  // 初期化
  right.add("onDisplay");

  document.getElementById("film").onscroll = function () {
    scrollValue = this.scrollLeft;
    if (scrollValue < 10) {
      left.remove("onDisplay");
      right.add("onDisplay");
    } else if (scrollValue >= 10 && scrollValue < 1600) {
      left.add("onDisplay");
      right.add("onDisplay");
    } else if (scrollValue >= 1600) {
      left.add("onDisplay");
      right.remove("onDisplay");
    }
  };
};

const displayTodaysExhibitors = () => {
  const mainVisualsWrap = document.getElementById("mainVisualsWrap");
  mainVisuals.forEach((elm) => mainVisualsWrap.prepend(elm));
};
