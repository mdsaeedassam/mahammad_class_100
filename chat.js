
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    <link rel="stylesheet" type="test/css" href="style.css"></link>
    <script src="chat.js"> </script>
    <input type="test" id="user_name" class="form_control" placeholder="User_Name"></input>

    
}