// ポートフォリオ項目の配列
const portfolioItems = [
  "Webアプリ1", "Webアプリ2", "Webアプリ3", "Webアプリ4", "Webアプリ5",
  // 95個追加...
];

// ポートフォリオ項目をリストに表示する関数
function displayPortfolioItems() {
  const portfolioList = document.getElementById("portfolio-items");
  portfolioItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    portfolioList.appendChild(listItem);
  });
}

// ジョークを表示する関数
function displayJoke() {
  const jokes = [
    "プログラミングは、バグを見つけて、それを修正するプロセスです。",
    "コードを書くのは簡単です。問題は、それを動作させることです。",
    "ソフトウェア開発者は、ユーザーが望んでいるものを作るのではなく、ユーザーが必要としているものを作ります。"
  ];
  const jokeDisplay = document.getElementById("joke-display");
  jokeDisplay.textContent = jokes[Math.floor(Math.random() * jokes.length)];
}

// ページ読み込み時に関数を呼び出す
window.onload = () => {
  displayPortfolioItems();
  displayJoke();
};
