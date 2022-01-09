function show() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    firebase.database().ref(`User/${name}`).set({
        name : name,
        email : email,
        message : message,
    },function(error){
        if(error){
            //The write failed
        }else{
            alert("DONE");
        }

    });
}