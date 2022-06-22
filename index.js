const Api_link = "https://api.adviceslip.com/advice";

const dice = document.querySelector("#dice");
window.onload = () => {
  dice.addEventListener("click", (e) => {
    getAdvice();
  });
};
async function getAdvice() {
  const advice = document.querySelector("#adviceText");
  advice.textContent = "Loading...";
  let response = await fetch(Api_link);
  let data = await response.json();
  fetchedData(await data);
  advice.textContent = data.slip.advice;
}
function fetchedData(data) {
  console.log(data);
}
