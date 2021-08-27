var input_text = document.getElementById("input_field");
var todo_box = document.getElementById("box");
var box = document.getElementById("box");
var btn_box = document.getElementById("btn-box"); 
var items_count = document.getElementById("items_count");


input_text.addEventListener("keyup", function (event) {
    event.preventDefault();
    
    if (event.keyCode === 13) {
        if (input_text.value === "") {
            return;
        } else {
            todo_box.innerHTML += `<div class="box-grd">
            <input type="checkbox" id="input_check" > 
            ${input_text.value}
            <img id="icon_cross" src="./imgs/icon-cross.svg"></div>`;
            input_text.value = "";
            items_count.innerHTML = `${box.childElementCount} items left`
        }
        
    }

    var icon_cross = document.getElementById("icon_cross");

    icon_cross.addEventListener("click", function(e) { 
        e.preventDefault();
        var task = e.target.parentNode;
        task.remove();
        
    })  
})

// function mark_checked() {
    
//     e.preventDefault();
//     e.target.className += " checked";
// }