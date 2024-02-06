console.log("I am in darling");
let projectContainer = document.getElementById("projectContainer");
let projectDetails = [
  { name: "Tic Tac Toe", projectName: "tictactoe" },
  { name: "Todo List", projectName: "todo" },
  { name: "Music Player", projectName: "MusicPlayer" },
];

const getHtml = (project)=>{
    return `  <div class="w-[70%]">
    <a href="${project.projectName}/index.html" class="w-full inline">
        <div class="w-full p-4 rounded-xl border-pink-200 border-2">
            ${project.name}
        </div>
    </a>
</div>`
}

for(let i=0; i<projectDetails.length ;i++ ){
    projectContainer.innerHTML =  projectContainer.innerHTML + getHtml(projectDetails[i]);
}