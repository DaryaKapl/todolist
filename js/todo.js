const id = (x) => {
  return document.getElementById(x);
};
let input = id("input");
let addBtn = id("btn");
let listContainer = id("list");
let itemList = localStorage.itemList ? JSON.parse(localStorage.itemList) : [];

const renderList = () => {
  listContainer.innerHTML = ``;
  for (let i = itemList.length - 1; i > 0; i--) {
    listContainer.innerHTML += `
            <div class="list-item">
                <div class="item-name" >
                    ${itemList[i]}
                </div>
                <div class="nameList">
                    <button onclick="deathItem(${i})">Убит</button>
                    <button onclick="deleteItem(${i})">Прощен</button>
                </div>
            </div>
        `;
  }
};

const addEvent = () => {
  let value = input.value;
  if (value.length > 0) {
    itemList.push(value);
    input.value = "";
  } else {
    alert("Please specify a name for your task");
  }
  localStorage.itemList = JSON.stringify(itemList);
  renderList();
};

const deleteItem = (index) => {
  let item = itemList[index];
  if (item != undefined) {
    itemList.splice(index, 1);
    localStorage.itemList = JSON.stringify(itemList);
    renderList();
  } else {
    alert("Item has already been deleted.");
  }
};
const deathItem = (index) => {
  let item = itemList[index];
  if (item != undefined) {
    //zdv

    //cscz
    localStorage.itemList = JSON.stringify(itemList);
    renderList();
  } else {
    alert("Item has already been deleted.");
  }
};
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addEvent();
});

renderList();
