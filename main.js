function calculate() {
  // 入力金額を取得
  let price = document.getElementById('price').value;

  // 各硬貨・紙幣の枚数を格納するオブジェクト
  let coins = {
    10000: 0,
    5000: 0,
    1000: 0,
    500: 0,
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  // 各硬貨・紙幣の画像ファイルパス
  const coinImages = {
    10000: "./10000yen.png",
    5000: "./5000yen.png",
    1000: "./1000yen.png",
    500: "./500yen.png",
    100: "./100yen.png",
    50: "./50yen.png",
    10: "./10yen.png",
    5: "./5yen.png",
    1: "./1yen.png",
  };

  const images = document.querySelectorAll('img');
  for (const image of images) {
    image.width = 50;
    image.height = 50;
  }

  // 10000円札、5000円札、1000円札を処理
  for (const denomination of [10000, 5000, 1000]) {
    while (price >= denomination) {
      coins[denomination]++;
      price -= denomination;
    }
  }

  // 500円玉、100円玉、50円玉、10円玉、5円玉、1円玉を処理
  for (const denomination of [500,100, 50, 10, 5, 1]) {
    while (price >= denomination) {
      coins[denomination]++;
      price -= denomination;
    }
  }

  // 結果を表示
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = "";

  for (const denomination of Object.keys(coins)) {
    const coinImage = coinImages[denomination];
    const count = coins[denomination];

    for (let i = 0; i < count; i++) {
      const liElement = document.createElement('li');
      liElement.innerHTML = `<img src="${coinImage}" alt="${denomination}円">`;
      resultElement.appendChild(liElement);
    }
  }
}
function clearInput() {
  document.getElementById("price").value = "";
  document.getElementById("result").innerHTML = "";
}

