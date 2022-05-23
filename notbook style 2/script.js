// select all the elemnt
const form = document.querySelector("#new-item");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");
// when i submit the form add new element

form.addEventListener("submit", e => {
  e.preventDefault()
  //1.creat a new item 
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");
  // 2. add that item to list
  list.appendChild(item);
  // 3 .clear input
  input.value = "";
  // 4. steup event listner to delet item when its clicked
  item.addEventListener("click", () => {
      item.remove();
    });
});
