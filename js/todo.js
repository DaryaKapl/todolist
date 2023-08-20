window.onload = function () {
  var todoList = [];

  document.getElementById("add").onclick = function () {
    var d = document.getElementById("in").value;

    var temp = {};
    temp.todo = d;
    temp.check = false;
    var i = todoList.length;
    todoList[i] = temp;
    console.log(todoList);
    out();
  };
  function out() {
    var out = "";
    for (var key in todoList) {
      // if (todoList[key].check == true) {
      //   out += "<input type='checkbox'checked>";
      // } else {
      //    out += "<input type='checkbox'>";
      // }
      out += todoList[key].todo + "<br>";
    }
    document.getElementById("out").innerHTML = out;
  }
  total.textContent = i;
};
