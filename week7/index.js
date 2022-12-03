
document.getElementById("title").addEventListener(
    "click", changeColor
)
document.getElementById("goodbye").addEventListener(
    "click", changeColor
)

function changeColor(){

    this.classList.add("red");

}
document.getElementById("add").addEventListener("click", handleAdd);

function handleAdd(){
    let input = document.getElementById("drink");
    let InputValue = input.value;

    let newLi = document.createElement("li");
    newLi.innerText = InputValue;

    document.getElementById("drink_list").appendChild(newLi);
    input.value=" ";
}