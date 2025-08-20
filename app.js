const validName = (str) => /^[a-zA-Z\s]+$/.test(str);
   
let friendsList = [];
let showingFriends = document.getElementById('friendsList');
let secretFriend = document.getElementById('result');

function addFriend(){
    secretFriend.innerHTML = "";
    let friendName = document.getElementById('friend').value;
    let copyFriend = friendName.toLowerCase();
    let isItOnTheList = (element) => element.toLowerCase() === copyFriend; 
    
    if(friendsList.some(isItOnTheList)) alert("Your friend is already on the list");
    else if(validName(friendName) && friendName!=' '){
        friendsList.push(friendName);
        showFriend();
    }else alert("Type a valid name...");
    return;
}

function showFriend(){
    let li = document.createElement("li");
    li.textContent = friendsList[friendsList.length-1];
    showingFriends.appendChild(li);
    return;
}

function drawFriend(){
    let randomPos = parseInt(Math.random()*friendsList.length);
    let li2 = document.createElement("li2");
    li2.textContent = `The secret friend is ${friendsList[randomPos]}`;
    secretFriend.appendChild(li2);
    restartGame();
    return;
}

function restartGame(){
    friendsList = [];
    showingFriends.innerHTML = "";
}