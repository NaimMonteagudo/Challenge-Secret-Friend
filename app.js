const isAlpha = (str) => /^[a-zA-Z\s]+$/.test(str);    
let friendsList = [];
let showingFriends = document.getElementById('friendsList');
let secretFriend = document.getElementById('result');

function addFriend(){
    let friendName = document.getElementById('friend').value;
    let friendCopy = friendName.toLowerCase();
    let isItOnTheList = (element) => element.toLowerCase() === friendCopy;

    if(friendsList.some(isItOnTheList)) alert("Your friend is already on the list");
    else if(validString(friendName)){
        friendsList.push(friendName);
        updateFriendList();
    }else alert("That name is not valid.")
    
    friendName.innerHTML = "";
    secretFriend.innerHTML= "";
    return;
}

function validString(friend){
    return (isAlpha(friend) && friend.trim().length > 0);
}

function updateFriendList(){
    let container = document.getElementById("friendsList");
    container.innerHTML = "";
    friendsList.forEach(friend => {
        let li = document.createElement("li");
        li.textContent = friend;
        container.appendChild(li);
    });
    return;
}

function drawFriend(){
    if(friendsList.length == 0) alert("Friends list is empty...");
    else{
        let randomPos = Math.floor((Math.random()*friendsList.length));
        let li2 = document.createElement("li2");
        secretFriend.innerHTML = "";
        li2.textContent = `The "secret friend" is ${friendsList[randomPos]} ☠️`;
        secretFriend.appendChild(li2);
        restartGame();
    }
    return;
}

function restartGame(){
    friendsList = [];
    showingFriends.innerHTML = "";
}