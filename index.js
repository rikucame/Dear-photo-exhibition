window.onload = () => {
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  rightArrow.classList.add("onDisplay");
  document.getElementById("film").onscroll = function () {
    scrollValue = this.scrollLeft;
    if (scrollValue < 10) {
      leftArrow.classList.remove("onDisplay");
      rightArrow.classList.add("onDisplay");
    } else if (scrollValue >= 10 && scrollValue < 1600) {
      leftArrow.classList.add("onDisplay");
      rightArrow.classList.add("onDisplay");
    } else if (scrollValue >= 1600) {
      leftArrow.classList.add("onDisplay");
      rightArrow.classList.remove("onDisplay");
    }
  };
  displayTodaysExhibitors();
};

const displayTodaysExhibitors = () => {
  const mainVisualsWrap = document.getElementById("mainVisualsWrap");

  const today = new Date().getDay();
  const maxNum = today - 5;
  members.slice(0, maxNum).map((member) => {
    mainVisualsWrap.prepend(generateMainVisual(member));
  });
};

const generateMainVisual = (data) => {
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
};

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
    mainVisual: "suto.jpeg",
    direction: "vertical",
  },
  {
    name: "reo",
    displayName: "Reo",
    mainVisual: "reo.jpg",
    direction: "horizontal",
  },
  {
    name: "aokichi",
    displayName: "あおきち",
    mainVisual: "aokichi.jpeg",
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
    mainVisual: "suzuna.jpeg",
    direction: "horizontal",
  },
  {
    name: "yu",
    displayName: "ゆう",
    mainVisual: "yu.jpg",
    direction: "vertical",
  },
];
