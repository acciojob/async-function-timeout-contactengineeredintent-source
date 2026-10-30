//your JS code here. If required.
let submitBtn = document.querySelector("#btn");
let outputTag = document.querySelector("#output");

submitBtn.addEventListener("click", () => {
  let textMsg = document.querySelector("#text").value;
  let delayValue = Number(document.querySelector("#delay").value);
  displayMsg(textMsg, delayValue);
});

async function displayMsg(textMsg, delayValue) {
  try {
    let response = await promiseOne(textMsg, delayValue);
    outputTag.textContent = `${response}`;
  } catch (error) {
    console.log(error);
  }
}

let promiseOne = (textMsg, delayValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${textMsg}`);
    }, delayValue);
  });
};
