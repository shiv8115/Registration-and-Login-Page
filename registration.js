// function addData(){
//     var name = document.getElementById('name').value;
//     var uname = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var pswd = document.getElementById('pswd').value;
//     var role = document.getElementById('role').value;
//     var cpswd = document.getElementById('cpswd').value;


//     sessionStorage.setItem("userName", uname);
//     sessionStorage.setItem("userFullName", name);
//     sessionStorage.setItem("userEmail", email);
//     sessionStorage.setItem("userPass", pswd);
//     sessionStorage.setItem("userCPass", cpswd);
//     sessionStorage.setItem("userRole", role);

// }

function addData(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pswd = document.getElementById('pswd').value;
    var role = document.getElementById('role').value;


    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userPass", pswd);
    sessionStorage.setItem("userRole", role);


    // const userDetails ={};

    // userDetails["Name"]= sessionStorage.getItem("userName");
    // userDetails["Email"]= sessionStorage.getItem("userEmail");
    // userDetails["Role"]= sessionStorage.getItem("userRole");
 
    // //console.log(addTask(userDetails));
    // addTask(userDetails);
    // var obj={};
    // obj['User Name']= name;
    // obj['Role']= role;
    // console.log("sudhansu");
    // function setCookie(name,value,exp_days) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exp_days*24*60*60*1000));
    //     var expires = "expires=" + d.toGMTString();
    //     document.cookie = name + "=" + value + ";" + expires + ";path=/";
    // }

    // setCookie("userName", name,1);
    // setCookie("userEmail", email,1);
    // setCookie("userPass", pswd,1);
    // setCookie("userRole", role,1);

}