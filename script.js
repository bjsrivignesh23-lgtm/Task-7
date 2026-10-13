var missionInput = document.getElementById("missionInput");
var addBtn = document.getElementById("addBtn");
var missionList = document.getElementById("missionList");
var missionCount = document.getElementById("missionCount");
var message = document.getElementById("message");
var colourBtn = document.getElementById("colourBtn");

var colours = ["#a89975", "#95aeb9", "#bf9191", "#aea2ce"];
var colourIndex = 0;
 

function updateCount()
{
  missionCount.textContent = missionList.children.length;
}
 
function addMission() 
{
  var text = missionInput.value.trim();
 
  
  if (text === "") 
    {
    message.textContent = "Please enter a mission before adding.";
    return false;
  }
 
  message.textContent = "";
 
  var li = document.createElement("li");
  var label = document.createElement("span");
  label.textContent = text;
  li.appendChild(label);
 

  li.onclick = function () 
  {
    li.classList.toggle("completed");
  };
 

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function (event) 
  {
    event.stopPropagation(); 
    li.remove();            
    updateCount();
  };
  li.appendChild(deleteBtn);
 
  missionList.appendChild(li);
 
  missionInput.value = "";
  missionInput.focus();
  updateCount();
  return true;
}
 

function changeColour() 
{
  colourIndex = (colourIndex + 1) % colours.length;
  document.body.style.background = colours[colourIndex];
}
 
addBtn.onclick = addMission;
colourBtn.onclick = changeColour;
missionInput.addEventListener("keydown", function (event) 
{
  if (event.key === "Enter") {
    addMission();
  }
});
 
updateCount();
 