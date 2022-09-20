const text = document.getElementById("text_task");

const date = document.getElementById("date_task");
const time = document.getElementById("time_task");
const tasks = [];

text.focus();

function get_from_local_storage() {
  if (localStorage.getItem("tasks") !== null) {
    const all_tasks = JSON.parse(localStorage.getItem("tasks"));

    for (const item of all_tasks) {
      tasks.push(item);
      print_task_fnc(item);
    }
  }
}
function todo() {
  event.preventDefault();

  // const vali = validation_form();

  // console.log(vali);
  // if (vali) {
  //   return;
  // }
  if (text.value == "") {
    alert("לא הוכנס טקסט");
    // text.style.background = "red";
    return;
  }
  if (date.value == "") {
    alert("לא הוכנס תאריך");
    return;
  }
  // console.log(tasks.length);
  const new_task = {
    text: text.value,
    date_1: date.value,
    time_1: time.value,
    id: tasks.length,
  };

  console.log(new_task.id);
  tasks.push(new_task);

  add_to_storage(tasks);

  // console.log(tasks.length);
  // console.log(new_task.id);
  // const index_id = tasks.length - 1;
  print_task_fnc(new_task);

  const form = document.getElementById("formbg");
  form.reset();

  // console.log(tasks);
  // console.log(index_id);
}

function print_task_fnc(new_task) {
  all_notes.innerHTML += `
  
  <div id="id_${new_task.id}" class="notes"
  
  >
  <p id="print_task">
  ${new_task.text}
  </p>
  <span onclick="delete_task(${new_task.id})" class="glyphicon glyphicon-trash"></span>
  
  <p id="date_and_time">
  ${new_task.date_1} <br />
  ${new_task.time_1}
  </p>
  </div>

  
    `;
  add_anim.innerHTML += `<style>
#id_${new_task.id} { animation-name: fadeIn;
  -webkit-animation-name: fadeIn; 

  animation-duration: 1s; 
  -webkit-animation-duration: 1s;

  animation-timing-function: ease-in-out; 
  -webkit-animation-timing-function: ease-in-out;     

  visibility: visible !important;}
</style>`;
}

function delete_task(item_for_del) {
  // const element = document.getElementsByid(item_for_del);

  // element.remove();

  // asfsfasf = "";
  document.getElementById(`id_${item_for_del}`).outerHTML = "";
  // const asfsfasf = document.getElementById(item_for_del);
  // asfsfasf.outerHTML = "";
  // console.log(item_for_del);
  // tasks.splice(item_for_del, 1);

  const indexOfObject = tasks.findIndex((object) => {
    return object.id === item_for_del;
  });

  tasks.splice(indexOfObject, 1);
  console.log(tasks);
  // console.log(tasks);
  // document.getElementsByClassName(item).innerHTML = "";
  // const this_task = item;
  // document.getElementById("all_notes").innerHTML = "";

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function add_to_storage(new_task) {
  // const json = JSON.stringify(new_task);
  // localStorage.setItem("tasks", json);
  const json = JSON.stringify(tasks);
  localStorage.setItem("tasks", json);
}

function validation_form() {}
