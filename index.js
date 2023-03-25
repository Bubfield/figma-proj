const headerListItems = document.querySelectorAll("#header-list li");

let selectedItem;

headerListItems.forEach((item) => {
  let orangeBar = document.createElement("div");
  orangeBar.setAttribute("id", "orange-bar");
  item.append(orangeBar);

  item.addEventListener("click", () => {
    function removeSelectedStyleFromOldItem() {
      if (selectedItem && selectedItem.id !== item.id) {
        selectedItem.style.opacity = 0.7;
        let itemsOrangeBar = selectedItem.children[0];
        itemsOrangeBar.style.opacity = 0.7;
        itemsOrangeBar.style.width = 0;
      }
    }

    removeSelectedStyleFromOldItem();

    function addSelectedStyleToSelectedItem() {
      item.style.opacity = 1;
      orangeBar.style.opacity = 1;
      selectedItem = item;
    }

    addSelectedStyleToSelectedItem();
  });

  item.addEventListener("mouseenter", () => {
    if (item !== selectedItem) {
      item.style.opacity = 0.9;
      item.style.cursor = "pointer";
      orangeBar.style.width = "1.8rem";
    }
  });

  item.addEventListener("mouseleave", () => {
    if (item !== selectedItem) {
      item.style.opacity = 0.7;
      orangeBar.style.width = 0;
    }
  });
});

const loginBtn = document.getElementById("login-btn");
const loginBtnDiv = document.getElementById("login-btn-div");

const loginBtnOrangeBar = document.createElement("div");
loginBtnOrangeBar.setAttribute("id", "login-btn-orange-bar");

loginBtnDiv.append(loginBtnOrangeBar);

loginBtn.addEventListener("mouseenter", () => {
  loginBtnOrangeBar.style.width = "6rem";
});

loginBtn.addEventListener("mouseleave", () => {
  loginBtnOrangeBar.style.width = 0;
});
