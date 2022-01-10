function show() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    firebase.database().ref('User/' + name).set({
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

  function search() {
                          var name=document.getElementById("name1").value;

                          firebase.database().ref('User/' + name).once('value').then(function(snapshot){
                          if(snapshot.exists()) {
                            var name_=snapshot.val().name;
                            var mail_=snapshot.val().email;
                            var message_=snapshot.val().message;
                            document.getElementById("name").value=name_;
                            document.getElementById("email").value=mail_;
                            document.getElementById("message").value=message_;
                          }
                          else{

                          }
                        }, function(error) {
                          if(error){

                          } else{

                          }
                        });
                            }