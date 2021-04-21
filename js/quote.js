fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const range = data.length;
    const randomNum = Math.floor(Math.random() * (range + 1));
    const randomQuoteText = data[randomNum].text;
    const randomQuoteAuthor = data[randomNum].author;
    document.getElementById("quote-text").innerHTML =
      '"' + randomQuoteText + '"';
    if (randomQuoteAuthor === "null") {
      document.getElementById("quote-author").innerHTML = "-Anonymus-";
    } else {
      document.getElementById("quote-author").innerHTML =
        "-" + randomQuoteAuthor + "-";
    }
  });
