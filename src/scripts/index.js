
        var allToDo = [];

       function AddToDo(){
          
           let inputValue = document.getElementById("newToDo").value;
           allToDo.push(inputValue);
           //return console.log(allToDo);
           alert("New task added successfully");
           DisplayAllToDos();
       }

       function DisplayAllToDos(){
             
        let testTasks = ['yeye','you'];

           if(allToDo.length == 0){
               document.getElementById("displayToDo").innerHTML = "No Tasks exists yet";
           }
         
           for(let i = 0; i < allToDo.length; i++){

               if(allToDo[i] == allToDo[allToDo.length - 1])
               {
               document.getElementById("displayToDo").innerHTML += '<li>' + allToDo[i] + [i] +'</li>'
               }
           }

       }

       function ToggleTasks(){
             
             let aText =  document.getElementById("toggleTasks").innerHTML;
 
             //console.log(aText);

             if(aText === "Hide all tasks"){
                 
               document.getElementById("toggleTasks").innerHTML = "Show all tasks";

               document.getElementById("AllTaskContainer").style.display = "none";
                

             }else if(aText === "Show all tasks"){

                document.getElementById("toggleTasks").innerHTML = "Hide all tasks";
                document.getElementById("AllTaskContainer").style.display = "Block";
             }
 }


