const ItemDiv = document.getElementsByClassName("accordion-item");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

// console.log(ourItemDiv);

for (let i = 0; i < ItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ItemDiv[i].addEventListener("click", () => {
    const result = ItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}