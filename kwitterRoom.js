
//SEUS LINKS DO FIREBASE.
const firebaseConfig = {
  apiKey: "AIzaSyDoH-ehrQfMsdtp2ew5aVd-wIj4B4iNbsM",
  authDomain: "site-da-escola-c9113.firebaseapp.com",
  databaseURL: "https://site-da-escola-c9113-default-rtdb.firebaseio.com",
  projectId: "site-da-escola-c9113",
  storageBucket: "site-da-escola-c9113.appspot.com",
  messagingSenderId: "651937307682",
  appId: "1:651937307682:web:22ca52e8a27105a7bbbe7b"
};

  userName = localStorage.getItem("userName");


  document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      /*Imagine que você tem um livro gigante onde guarda informações sobre diferentes pessoas, como seus nomes, idades e coisas que elas gostam de fazer. Agora, você quer adicionar o nome de uma nova pessoa nesse livro.

Em termos de programação, o código que você compartilhou faz algo parecido.
A palavra "firebase" é como o nome desse livro gigante. É onde você pode guardar informações importantes.
"database()" é como abrir o livro na página certa para adicionar informações. É onde você pode dizer ao livro que quer adicionar informações no banco de dados.
"ref("/")" é como apontar para a página principal do livro. É onde você quer adicionar o nome da nova pessoa.
A palavra "/main" significa que você está adicionando o nome da nova pessoa na página principal do livro, na seção chamada "main".
"child(userName)" é como dizer ao livro o nome da nova pessoa que você quer adicionar. A variável "userName" guarda o nome dessa pessoa.
"update" é como uma ação que você realiza para atualizar o livro com as informações da nova pessoa. É como quando você finalmente escreve o nome da pessoa no livro.
"purpose" é uma palavra importante que você escreve no livro junto com o nome da pessoa. É como uma dica sobre por que você está adicionando o nome dela. Nesse caso, a palavra é "adicionar usuário".
Resumindo, esse código diz ao livro gigante (Firebase) para adicionar o nome de uma nova pessoa na página principal (main) do livro. Você fornece o nome da pessoa e uma dica sobre por que está adicionando o nome dela.
*/

    });
    local.Storage.setItem("roomName", roomName)
    window.location= "kwitterPage.html"
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function sair() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
