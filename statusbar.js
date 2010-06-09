var StatusBarDiv = document.createElement("div");
StatusBarDiv.className = "StatusBarDiv";
document.body.appendChild(StatusBarDiv);

var onTheDiv = false;
StatusBarDiv.addEventListener("mouseover",
function() {
    onTheDiv = true
},
true);
for (var i in document.links) {
    document.links[i].addEventListener("mouseover",
    function(event) {
        if (!onTheDiv) {
            StatusBarDiv.innerHTML = event.currentTarget.href;
            StatusBarDiv.style.display = "block"
        }
    },
    true);
    document.links[i].addEventListener("mouseout",
    function(event) {
        StatusBarDiv.innerHTML = "";
        StatusBarDiv.style.display = "none";
        onTheDiv = false
    },
    true);
}