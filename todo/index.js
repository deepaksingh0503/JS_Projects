console.log("i am in darling");
let inputTitle = document.getElementById("inputTitleTextField");
let inputContent = document.getElementById("inputContentTextField");
let todoContainer = document.getElementById("todoContainerList");
let addButton = document.getElementById("addButtons");
let ID = 0;
let userTodoData = [];

const createObj = (title, content,id) =>{
    console.log("inside vreateObj :-",id);
    
    return ({
    id: id,
    title: title,
    content: content,
})};

const getCardHtml = (
    title,
    content,
    id
) =>{return  `<div  class="todoCard flex flex-col h-auto w-[250px] bg-pink-200 text-wrap rounded-md  ">
      <div class="todoCardTitle text-[1.4rem]  px-3  py-1  ">
    <span class="text-gray-400 text-sm"> Title:</span>   ${title[0].toUpperCase() + title.slice(1)} 
      </div> 
      <div class="todoCardContent  text-[1.1rem] px-3 py-1">
      <span class="text-gray-400 text-sm"> Note:</span> ${content} 
      </div>
      <div class="flex justify-evenly my-2 ">
      <button onclick="deleteNote('${id}')" class="bg-pink-400 hover:bg-pink-500 p-2 text-sm text-black rounded-md px-5" >Delete </button>
      <button onclick="editTodo('${id}')" class="bg-pink-400 hover:bg-pink-500 p-2 text-sm text-black rounded-md px-5" >Edit </button>
      </div>
      </div>`;}


const LoadData = () => {
    if (localStorage.getItem("userData")) {
        todoContainer.innerHTML = "";
        userTodoData = localStorage.getItem("userData");
        userTodoData = JSON.parse(userTodoData);
        if (userTodoData.length == 0) {
            todoContainer.innerHTML = "Add notes to see!!";
            ID=0;
            return;
        }
        for (let i = 0; i < userTodoData.length; i++) {
            let item = userTodoData[i];
            item.id = i ;
            todoContainer.innerHTML =
                todoContainer.innerHTML +
                getCardHtml(item.title, item.content, item.id);
            ID = item.id+1;
        }
        console.log(userTodoData);
    } else {
        todoContainer.innerHTML = "Add notes to see!!";
    }
};

LoadData();

const editTodo=(id)=>{
    let userdata=userTodoData[id];
    inputContent.value=userdata.content;
    inputTitle.value=userdata.title;
    deleteNote(id);
}

const deleteNote = (id) => {
    userTodoData.splice(id , 1);
    localStorage.setItem("userData", JSON.stringify(userTodoData));
    LoadData();
};

addButton.addEventListener("click", (e) => {
    if (inputContent.value == "" || inputTitle.value == "") {
        return;
    }
    let userData=createObj(inputTitle.value, inputContent.value,ID);
    ID++;
    userTodoData.push(userData);
    if (todoContainer.innerHTML == "Add notes to see!!") {
        todoContainer.innerHTML = "";
    }

    todoContainer.innerHTML =
        todoContainer.innerHTML +
        getCardHtml(userData.title,userData.content,userData.id);
    inputContent.value = "";
    inputTitle.value = "";
    localStorage.setItem("userData", JSON.stringify(userTodoData));
    console.log("this is pura array",userTodoData);
    console.log("this is userobject",userData);
});
console.log("value of ID is= ", ID);