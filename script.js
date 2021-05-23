//reference Button using querySelector()
const button = document.querySelector(".cta");
//reference textarea
const inputText = document.querySelector("textarea");
//reference output div
const output = document.querySelector(".output");
//concept of callbacks in javascript

//the mock url
const valyrian = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return valyrian + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured ", error);
  alert("server is down bruhh");
}

function callback() {
  console.log("callback");

  //read the value of the textarea / input
  const mainText = inputText.value;

  //calling server for processing
  fetch(getTranslationURL(mainText))
    .then((response) => response.json())
    .then((json) => {
      const translatedText = json.contents.translated;
      //output
      output.textContent = translatedText;
    })
    .catch(errorHandler);
}

//add event listener to button
button.addEventListener("click", callback);
