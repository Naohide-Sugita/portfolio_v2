// �|�[�g�t�H���I���ڂ̔z��
const portfolioItems = [
  "Web�A�v��1", "Web�A�v��2", "Web�A�v��3", "Web�A�v��4", "Web�A�v��5",
  // 95�ǉ�...
];

// �|�[�g�t�H���I���ڂ����X�g�ɕ\������֐�
function displayPortfolioItems() {
  const portfolioList = document.getElementById("portfolio-items");
  portfolioItems.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    portfolioList.appendChild(listItem);
  });
}

// �W���[�N��\������֐�
function displayJoke() {
  const jokes = [
    "�v���O���~���O�́A�o�O�������āA������C������v���Z�X�ł��B",
    "�R�[�h�������̂͊ȒP�ł��B���́A����𓮍삳���邱�Ƃł��B",
    "�\�t�g�E�F�A�J���҂́A���[�U�[���]��ł�����̂����̂ł͂Ȃ��A���[�U�[���K�v�Ƃ��Ă�����̂����܂��B"
  ];
  const jokeDisplay = document.getElementById("joke-display");
  jokeDisplay.textContent = jokes[Math.floor(Math.random() * jokes.length)];
}

// �y�[�W�ǂݍ��ݎ��Ɋ֐����Ăяo��
window.onload = () => {
  displayPortfolioItems();
  displayJoke();
};
