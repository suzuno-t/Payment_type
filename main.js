function calculate() {
  // 入力金額を取得
  let price = document.getElementById('price').value;

  // 各硬貨・紙幣の枚数を格納するオブジェクト
  let coins = {
    10000: 0,
    5000: 0,
    1000: 0,
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  // 10000円札、5000円札、1000円札を処理
  for (const denomination of [10000, 5000, 1000]) {
    while (price >= denomination) {
      coins[denomination]++;
      price -= denomination;
    }
  }

  // 100円玉、50円玉、10円玉、5円玉、1円玉を処理
  for (const denomination of [100, 50, 10, 5, 1]) {
    while (price >= denomination) {
      coins[denomination]++;
      price -= denomination;
    }
  }

  // 結果を表示
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <h2>各硬貨・紙幣の枚数</h2>
    <ul>
      <li>10000円札: ${coins[10000]}枚</li>
      <li>5000円札: ${coins[5000]}枚</li>
      <li>1000円札: ${coins[1000]}枚</li>
      <li>100円玉: ${coins[100]}枚</li>
      <li>50円玉: ${coins[50]}枚</li>
      <li>10円玉: ${coins[10]}枚</li>
      <li>5円玉: ${coins[5]}枚</li>
      <li>1円玉: ${coins[1]}枚</li>
    </ul>
  `;
}
function clearInput() {
  document.getElementById("price").value = "";
  document.getElementById("result").innerHTML = "";
}

