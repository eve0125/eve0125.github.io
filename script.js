/* .js files add interaction to your website */

/* Fact Button */

var button = document.getElementById('button');

var quote = document.getElementById('quote');

var quoteList = ["False confessions are one of the leading causes of wrongful convictions.",
                 "Since the 1980s, six studies  have documented about 250 interrogation-induced false confessions.",
                 "Only 22 states require the recording of an interrogation. ",
                "Studies find that even in cases involving confessions proven to be false, juries convict in 73-81% of the cases."];

var counter = 0;

function displayQuote() {
  quote.innerHTML = quoteList[counter];
  counter++;
  const element = document.querySelector("#quote");
  element.style.background = "white";
  if (counter >= quoteList.length) {
    counter = 0;
  }
}

button.addEventListener("click", displayQuote);
