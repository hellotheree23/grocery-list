function addItem() {
    var item = document.getElementById("itemInput").value;
    if (item) {
        var ul = document.getElementById("shoppingList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        li.onclick = function() { this.parentNode.removeChild(this); };
        ul.appendChild(li);
        document.getElementById("itemInput").value = ""; // clear the input
    }
}
