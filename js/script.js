//Treehouse Techdegree: FSJS project 1 - A Random Quote Generator

// array of Quotes
var quotes= [
{
  quote: "If you don\'t like something change it.  If you can\'t change it change your attitude.",
  source:"Maya Angelou",
  citation: "keepinspiring.me, 2011",
},
{
  quote:"People die but legends live forever.",
  source: 'Tupac Shakur',
  

},
{
  quote: "Don\'t get mad at me for being the best of what I was created to be.",
  source:'Kevin Gates',
  year: '2016'

},
{
  quote:"There is only love. there is nothing else.",
  source:'Dena Botbyl',
  

},
{
  quote:"The best revenge is massive success.",
  source:'Frank Sinatra',

},
  {
   quote:"You know you\’re in love when you can\’t fall asleep because reality is finally better than your dreams.",
   source:"Dr.Suess",
   citation: "Keepinspiring.me, 2011"
  
  },

];


 //This function selects and return random quotes from the array
  function getRandomQuote(array) {
    return array[Math.floor(Math.random() * array.length)];
 }

// This function display quote array, and the first variable stores getRandomQuote function
 function printQuote() {
  //Call `getRandomQuote` and assign to `getQuote`
  var getQuote = getRandomQuote(quotes);
    //This variable stores the quote and source string
    var html = '';
    html += '<p class="quote">' + getQuote.quote + '</p>' + '<p class="source">' + getQuote.source;
    //Check if quote has citation property, if so add to html string.
    if (getQuote.hasOwnProperty('citation')) {
      html += '<span class="citation">' + getQuote.citation + '</span>';
    }
   //Check if quote has year property, add it to html string
    if (getQuote.hasOwnProperty('year')) {
      html += '<span class="year">' + getQuote.year + '</span>';
    }
    
      document.getElementById('quote-box').innerHTML = html;
  
    }


  
//"show another Quote" click button

document.getElementById('loadQuote').addEventListener("click", printQuote); 
  







