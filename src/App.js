/* eslint-disable no-undef*/
import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  // function handleClick() {
  //   /* eslint-disable no-undef*/
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //     const activeTabId = tabs[0].id;
  //     chrome.scripting.executeScript({
  //       target: { tabId: activeTabId },
  //       function: () => alert("hello"),
  //     });
  //   });
  // }

  // "VM335:1 Uncaught TypeError: Cannot read properties of undefined (reading 'query')"
  // function getTabId() {
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //     const activeTabId = tabs[0].id;
  //     return activeTabId;
  //   });
  // }

  const [text, setText] = useState("placeholder text");

  let pageTitle = "";

  function extractText() {
    // pageTitle = document.body.innerHTML;
    // console.log(pageTitle);

    const paragraphs = document.getElementsByTagName("p");
    const arr = [];

    for (let i = 0; i < paragraphs.length; i++) {
      arr.push(paragraphs[i].textContent);
    }
    //const array = Array.from(paragraphs);
    console.log(arr);
  }

  function handleExtractText() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: extractText,
      });
    });
  }

  return (
    <div className="App">
      <h1>Hello! Click to print text to the console</h1>
      <button onClick={handleExtractText}>Extract Text</button>
      {/* <button>Print Text</button>
      <div>{text}</div> */}
    </div>
  );
}

// <header className="App-header">

export default App;
