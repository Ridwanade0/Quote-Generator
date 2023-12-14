// variables
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector("#new-quote");

const quotes = [
    {
      quote: `"The only way to do great work is to love what you do."`,
      author: "Steve Jobs"
    },
    {
      quote: `"Be the change that you wish to see in the world."`,
      author: "Mahatma Gandhi"
    },
    {
      quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
      author: "Winston Churchill"
    },
    {
      quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
      author: "Robert Frost"
    },
    {
      quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
      author: "Franklin D. Roosevelt"
    },
    {
      quote: `"Believe you can and you're halfway there."`,
      author: "Theodore Roosevelt"
    },
    {
      quote: `"The best way to predict the future is to create it."`,
      author: "Peter Drucker"
    },
    {
      quote: `"Your time is limited, don't waste it living someone else's life."`,
      author: "Steve Jobs"
    },
    {
      quote: `"The future belongs to those who believe in the beauty of their dreams."`,
      author: "Eleanor Roosevelt"
    },
    {
      quote: `"Strive not to be a success, but rather to be of value."`,
      author: "Albert Einstein"
    },
    {
      quote: `"Do not wait to strike till the iron is hot, but make it hot by striking."`,
      author: "William Butler Yeats"
    },
    {
      quote: `"Happiness is not something ready made. It comes from your own actions."`,
      author: "Dalai Lama"
    },
    {
      quote: `"It does not matter how slowly you go as long as you do not stop."`,
      author: "Confucius"
    },
    {
      quote: `"The only source of knowledge is experience."`,
      author: "Albert Einstein"
    },
    {
      quote: `"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."`,
      author: "Buddha"
    },
    {
      quote: `"If you want to lift yourself up, lift up someone else."`,
      author: "Booker T. Washington"
    },
    {
      quote: `"The only person you are destined to become is the person you decide to be."`,
      author: "Ralph Waldo Emerson"
    },
    {
      quote: `"It always seems impossible until it's done."`,
      author: "Nelson Mandela"
    },
    {
      quote: `"Life is 10% what happens to us and 90% how we react to it."`,
      author: "Charles R. Swindoll"
    },
    {
      quote: `"The journey of a thousand miles begins with one step."`,
      author: "Lao Tzu"
    },
    {
      quote: `"A person who never made a mistake never tried anything new."`,
      author: "Albert Einstein"
    },
    {
      quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
      author: "Franklin D. Roosevelt"
    },
    {
      quote: `"Believe you can and you're halfway there."`,
      author: "Theodore Roosevelt"
    },
    {
      quote: `"The best way to predict the future is to create it."`,
      author: "Peter Drucker"
    },
    {
      quote: `"Your time is limited, don't waste it living someone else's life."`,
      author: "Steve Jobs"
    },
    {
      quote: `"The future belongs to those who believe in the beauty of their dreams."`,
      author: "Eleanor Roosevelt"
    },
    {
      quote: `"Strive not to be a success, but rather to be of value."`,
      author: "Albert Einstein"
    },
    {
      quote: `"Do not wait to strike till the iron is hot, but make it hot by striking."`,
      author: "William Butler Yeats"
    },
    {
      quote: `"Happiness is not something ready made. It comes from your own actions."`,
      author: "Dalai Lama"
    },
    {
      quote: `"It does not matter how slowly you go as long as you do not stop."`,
      author: "Confucius"
    }
  ];
  
  

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
});
