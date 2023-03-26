function addHeaderListItemsEvent() {
  const headerListItems = document.querySelectorAll("#header-list li");
  let selectedItem;

  headerListItems.forEach((item) => {
    let orangeBar = document.createElement("div");
    orangeBar.setAttribute("id", "orange-bar");
    item.append(orangeBar);

    function addSelectedStyleToSelectedItem() {
      item.style.opacity = 1;
      orangeBar.style.opacity = 1;
      selectedItem = item;
    }

    if (item.id === "home") {
      addSelectedStyleToSelectedItem();
      orangeBar.style.width = "1.8rem";
    }

    item.addEventListener("click", () => {
      function removeSelectedStyleFromOldItem() {
        if (selectedItem.id !== item.id) {
          selectedItem.style.opacity = 0.7;
          let itemsOrangeBar = selectedItem.children[0];
          itemsOrangeBar.style.opacity = 0.7;
          itemsOrangeBar.style.width = 0;
        }
      }

      removeSelectedStyleFromOldItem();

      addSelectedStyleToSelectedItem();
    });

    item.addEventListener("mouseenter", () => {
      if (item !== selectedItem) {
        item.style.opacity = 0.9;
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
}

addHeaderListItemsEvent();

function addLoginBtnEvent() {
  const loginBtn = document.getElementById("login-btn");
  const loginBtnDiv = document.getElementById("login-btn-div");

  const loginBtnOrangeBar = document.createElement("div");
  loginBtnOrangeBar.setAttribute("id", "login-btn-orange-bar");

  loginBtnDiv.append(loginBtnOrangeBar);

  loginBtn.addEventListener("mouseenter", () => {
    loginBtnOrangeBar.style.width = "6.25rem";
  });

  loginBtn.addEventListener("mouseleave", () => {
    loginBtnOrangeBar.style.width = 0;
  });
}

addLoginBtnEvent();

function addTruTikUseBtnsEvent() {
  const truTikUseBtns = document.querySelectorAll(".TruTik-use-btn");

  truTikUseBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      let btnText = document.getElementById(`${btn.id}-text`);

      let getStyleElem = document.getElementById(`style-${btn.id}`);

      if (btnText.style.marginLeft === "1.2rem") {
        btnText.style.marginLeft = "";
        btn.style.border = "0.1rem solid #e8eaeb";
        btn.style.color = "#848e99";
        getStyleElem.innerHTML = "";
      } else {
        function addStyleToSelectedBtn(styleElem) {
          btnText.style.marginLeft = "1.2rem";
          styleElem.innerHTML = `#${btn.id}:before {
          position: absolute;
          content: "";
          left: ${btn.id === "contractor" ? "0.7rem" : "1.2rem"};
          bottom: 1rem;
          width: 7px;
          height: 12px;
          border: solid #ff8a00;
          border-width: 0 2.5px 2.5px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          }`;
          btn.style.border = "2px solid #ff8a00";
          btn.style.color = "#ff8a00";
        }

        if (!getStyleElem) {
          let styleElem = document.head.appendChild(
            document.createElement("style")
          );
          styleElem.setAttribute("id", `style-${btn.id}`);
          addStyleToSelectedBtn(styleElem);
        } else {
          addStyleToSelectedBtn(getStyleElem);
        }
      }
    })
  );
}

addTruTikUseBtnsEvent();
