const quotes = [
    {
      quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
      author: "나폴레옹",
    },
    {
      quote: "신은 용기있는자를 결코 버리지 않는다.",
      author: "켄러",
    },
    {
      quote: "피할수 없으면 즐겨라.",
      author: "로버트 엘리엇",
    },
    {
      quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
      author: "F.스콧 핏제랄드",
    },
    {
      quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다",
      author: "이소룡",
    },
    {
      quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
      author: "헬렌 켈러",
    },
    {
      quote: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
      author: "생떽쥐베리",
    },
    {
      quote: "가난은 가난하다고 느끼는 곳에 존재한다.",
      author: "에머슨",
    },
    {
      quote: "문제점을 찾지 말고 해결책을 찾으라.",
      author: "헨리포드",
    },
    {
      quote: "인생의 뜻을 세우는데 있어 늦은 때라곤 없다.",
      author: "볼드윈",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = `-${todaysQuote.author}-`;