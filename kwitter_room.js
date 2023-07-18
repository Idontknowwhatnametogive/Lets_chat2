var firebaseConfig = {
    apiKey: "AIzaSyCmvyRqPvVizxRxwTBWVcg4N5VImtWf02w",
    authDomain: "let-s-chat-7e1a3.firebaseapp.com",
    databaseURL: "https://let-s-chat-7e1a3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-7e1a3",
    storageBucket: "let-s-chat-7e1a3.appspot.com",
    messagingSenderId: "944155953716",
    appId: "1:944155953716:web:36815d8bf6a6cb2fa5d861"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome" + user_name+"!";
 
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({

     });

     localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
  }

firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id) ' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}


