let friendsList = [];

function addFriend(){
    let friendName = document.getElementById('friend').value;
    let copyFriend = friendName.toLowerCase();
    let isItOnTheList = (element) => element.toLowerCase() === copyFriend;

    if(friendsList.some(isItOnTheList)) alert("Your friend is already on the list");
    else if(friendName != ''){
        friendsList.push(friendName);
        updateFriendList();
        showFriend();
    }
    return;
}

function updateFriendList(){
    
}

function showFriend(){
    let showing = document.getElementById('friendsList');
    let li = document.createElement("li");
    li.textContent = friendsList[friendsList.length-1];
    showing.appendChild(li);
    return;
}


addFriend();


function drawFriend(){

    showResults();
    return;
}






