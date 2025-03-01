import "./style.scss"; // SASS 파일 불러오기

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    alert("버튼이 클릭되었습니다!");
  });
});
