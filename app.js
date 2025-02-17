let todo =[];
let req = prompt("Please Enter your request");
//console.log(req);
while(true){
    if(req == "quit"){
        console.log("quiting app");
        break;
    }
     if (req=="list") {
        console.log("-----------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-----------------");
     } else if (req=="add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("Added task");
     }else if (req=="delete") {
        let index = parseInt(prompt("Enter the index of the task you want to delete"));
        if (!Number.isNaN(index)) {
            let deleted = todo.splice(index,1);
            console.log(`Deleted ${deleted}`);
        } else {
            console.log("Invalid index");
        }
        req = prompt("Please Enter your request");
     }
}