// create an Autosuggestion box
// create a suggetion area to the bottom of input box that shows suggestion list
// list is visible when the input box is in focus or the user types, it hides when the input box is blurred
// the list is populated with the suggestion list from the server
// getSuggestions(text); method will act as a mock server and will return random text based on the input with 0-200 mili sec latency and the api may fail
// if suggestion is clicked populate the input box with the value and bring input box in focus
// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;
console.log(document);
function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

(function () {
  const input = document.getElementById("search");
  const suggestionArea = document.getElementById("suggestion-area");

  const onFocus = () => {
    suggestionArea.style.display = "block";
  };

  const onBlur = (e) => {
    if (e.target === input || e.target === suggestionArea) return;
    suggestionArea.style.display = "none";
  };
  const onChange = (e) => {
    const { value } = e.target;
    processData(value);
  };

  const processData = async (value) => {
    suggestionArea.innerHTML = "";
    if (!value) {
      return;
    }
    try {
      const resp = await getSuggestions(value);
      if (resp.length > 0) {
        const list = document.createElement("ul");
        resp.forEach((item) => {
          const li = document.createElement("li");
          li.style.cursor = "pointer";
          li.innerText = item;
          list.appendChild(li);
        });
        suggestionArea.appendChild(list);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const onClick = (e) => {
    if (e.target === suggestionArea) {
      return;
    }
    const value = e.target.innerText;
    input.value = value;
    input.focus();
  };

  input.addEventListener("focus", onFocus);
  input.addEventListener("keyup", onChange);
  window.addEventListener("click", onBlur);
  suggestionArea.addEventListener("click", onClick);
})();
