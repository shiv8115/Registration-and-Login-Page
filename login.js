function checkData(){
    var enterEmail = document.getElementById('loginEmail').value;
    var enterPass = document.getElementById('loginPass').value;

    var getEmail=sessionStorage.getItem('userEmail');
    var getPass=sessionStorage.getItem('userPass');

    if(enterEmail == getEmail){
        
        if(enterPass==getPass){
            window.open('list.html');
        }
        else{
            alert("Wrong Password");
        }
    }else{
        alert("Invalid");
    }
    
}