const validName = (str) => /^[a-zA-Z\s]+$/.test(str);

let friendsList = [];
let showingFriends = document.getElementById('friendsList');
let secretFriend = document.getElementById('result');

function addFriend(){
    let friendName = document.getElementById('friend').value;
    let friendCopy = friendName.toLowerCase();
    let isItOnTheList = (element) => element.toLowerCase() === friendCopy;
    if(friendsList.some(isItOnTheList)) alert("Your friend is already on the list");
    else if(validName(friendName)){
        friendsList.push(friendName);
        updateFriendList();
    }
    friendName.innerHTML = "";
    return;
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