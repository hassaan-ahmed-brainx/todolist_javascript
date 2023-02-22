

let incompleteTaskHolder=document.getElementById("tasks_list");
let taskInput=document.getElementById("addtodo");
document.getElementById("addtodo").addEventListener("change", (e) => getvalue(e));
document.getElementById("addtodo").addEventListener("keydown", (e) => addtolist(e));
document.getElementById("tasks_list").addEventListener("click", (e) => checkBox(e));
document.getElementById("tasks_list").addEventListener("click", (e) => edit(e));
document.getElementById("tasks_list").addEventListener("click", (e) => deletes(e));
document.getElementById("tasks_list").addEventListener("keydown", (e) => savechanges(e));




function savechanges(e)
{

    let code = (e.keyCode ? e.keyCode : e.which);
    let listItem=e.target.parentNode;
    let editinput = listItem.querySelector('input[id="edit"]');
    let checkbox = listItem.querySelector('input[type="checkbox"]');
    let label=listItem.querySelector("label");
    if(code ==13 && editinput.style.display =="inline-block" && editinput.value!="" && editinput.value!=" ")
    {

        console.log(editinput.value);
        label.innerText = editinput.value;       
        editinput.style.display = "none";
        label.value = editinput.innerText;    
        checkbox.style.display = "inline-block";
        label.style.display = "inline-block";    

    }


}



function edit(e)
{
    if (e.target.id == 'b1')
    {

        let listItem=e.target.parentNode;
        let label=listItem.querySelector("label");
        let editinput = listItem.querySelector('input[id="edit"]');
        let checkbox = listItem.querySelector('input[type="checkbox"]');
        editinput.innerText = label.innerText;
        label.style.display = "none";       
        editinput.style.display = "inline-block";
        editinput.value = label.innerText;        
        checkbox.style.display ="none";

    
    }

}


function deletes(e)
{
    if (e.target.id == 'b2')
    {
        let listItem=e.target.parentNode;
		let ul=listItem.parentNode;
		ul.removeChild(listItem);
    }
}



function checkBox(e)
{

    if (e.target.type == 'checkbox')
    {
        let listItem=e.target.parentNode;
        let label=listItem.querySelector("label");
        if(label.className==='unchecked')
        {
            label.className ='checked';
        }
        else
        {
            label.className = 'unchecked';
        }

    }

}





let createNewTaskElement = function(taskString)
{
    let listItem=document.createElement("li");
    let checkBox=document.createElement("input");
    let label=document.createElement("label");
    let editInput=document.createElement("input");
    let editButton=document.createElement("i");
	let deleteButton=document.createElement("i"); 
    label.innerText= taskString;   
    checkBox.type="checkbox";
	editInput.type="text";
    editInput.id ='edit'
    editInput.name ="edits";
    editButton.type="button";
    editButton.id ="b1";
    deleteButton.id="b2";
    deleteButton.type= "button";   
    label.className = 'unchecked';
    editButton.classList.add('fa', 'fa-edit');
    deleteButton.classList.add('fa', 'fa-trash', 'del');
    listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

function getvalue(e)
{
    let listItem=createNewTaskElement(taskInput.value);
    return listItem;

}


function addtolist(e)
{
    let code = (e.keyCode ? e.keyCode : e.which);
    if(code ==13)
    {
        let listItem = getvalue();
        e.preventDefault();
        document.getElementById("addtodo").value="";
        incompleteTaskHolder.appendChild(listItem);
    
    }
}














