const quiz = [
  {
    question: '日本の初代総理大臣は？',
    answers: [
      '大隈重信',
      '伊藤博文',
      '桂太郎',
      '山縣有朋'
    ],
    correct: '伊藤博文'
  },
  {
    question: '平安京に遷都した天皇は？',
    answers: [
      '聖武天皇',
      '桓武天皇',
      '朱雀天皇',
      '平城天皇'
    ],
    correct: '桓武天皇'
  },
  {
    question: '関ヶ原の戦いは西暦何年？',
    answers: [
      '1550',
      '1580',
      '1600',
      '1620'
    ],
    correct: '1600'
  },
  {
    question: '徳川第三代将軍は誰？',
    answers: [
      '徳川家康',
      '徳川家光',
      '徳川秀忠',
      '徳川綱吉'
    ],
    correct: '徳川家光'
  },
  {
    question: '日本における終戦記念日は？',
    answers: [
      '7月30日',
      '8月6日',
      '8月10日',
      '8月15日'
    ],
    correct: '8月15日'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題分の選択肢を定義
const setUpQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  };
};

setUpQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }

  quizIndex++;
  if(quizIndex < quizLength){
    setUpQuiz();
  }else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};
//ボタンをクリックしたら正誤を判定する
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}
