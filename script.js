const questions = document.querySelectorAll(".faq");
const minusIcons = document.querySelectorAll(".minus");
const plusIcons = document.querySelectorAll(".plus");
const answers = document.querySelectorAll(".answers");

function hideFaqs() {
  minusIcons.forEach((icon) => {
    icon.classList.add("hidden");
  });
  plusIcons.forEach((icon) => {
    icon.classList.remove("hidden");
  });
  answers.forEach((answer) => {
    answer.classList.add("hidden");
  });
}

questions.forEach((q) => {
  q.addEventListener("click", () => {
    if (!q.querySelector("p").classList.contains("hidden")) {
      hideFaqs();
    } else {
      hideFaqs();
      q.querySelector(".plus").classList.toggle("hidden");
      q.querySelector(".minus").classList.toggle("hidden");
      q.querySelector(".answers").classList.toggle("hidden");
    }
  });
});
