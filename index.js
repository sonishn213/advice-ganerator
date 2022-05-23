const Api_link = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const advice = document.querySelector("#adviceText");
  const response = await fetch(Api_link);
  const data = await response.json();

  advice.textContent = await data.slip.advice;
}
