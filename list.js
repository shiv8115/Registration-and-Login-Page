
function addTask(){
    
        //et data= sessionStorage.getItem("userName");
        const obj={
            "name": sessionStorage.getItem("userName"),
            //"email": sessionStorage.getItem("userEmail"),
            "role": sessionStorage.getItem("userRole"),
        }

        let myString = JSON.stringify(obj);
     //   document.getElementById("tasks").innerHTML = myString;//obj.name+ " " + obj.email+ " " +obj.role;
    //   for(let key in obj){
    //     document.getElementById("tasks").innerHTML += `
    //     <div class="task">
    //         <span id="taskname">
    //             ${obj.key}
    //         </span>
    //         <button class="delete">
    //             <i class="far fa-trash-alt"></i>
    //         </button>
    //     </div>
    // `;
    //   }
        document.getElementById("tasks").innerHTML = `
        <div class="task">
            <span id="taskname">
                ${myString }
            </span>

        </div>
    `;

   
}
