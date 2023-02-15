document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".progress");
  const inputRange = document.getElementById("range");
  const currentValue = document.querySelector(".current-value");
  inputRange.addEventListener("input", () => {
    const value = parseInt(inputRange.value);
    progress.style.left = value + "%";
    currentValue.style.left = value + "%";
    currentValue.innerText = value;
  });
});
