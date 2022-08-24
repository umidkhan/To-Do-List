let addToDoButton = document.querySelector("#addToDo");
// let toDoContainer = document.querySelector("#toDoContainer");
let inputField = document.querySelector("#inputField");
let ol = document.querySelector(".ol")

addToDoButton.addEventListener("click", () => {
    // let ol = document.createElement("ol");
    // ol.classList.add("ol");
    let li = document.createElement("li")
    li.classList.add("li");
    let paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling");

    // ol.innerText = inputField.value;
    // toDoContainer.appendChild(ol);
    // inputField.value = "";

    li.innerText = inputField.value;
    ol.appendChild(li);
    inputField.value = "";

    paragraph.innerText = inputField.value;
    ol.appendChild(li);
    ol.appendChild(paragraph);
    inputField.value = "";

    li.addEventListener("click", () => {
        let conf = confirm("Ushbu elementni aniq o'chirmoqchisiz???")
        if (conf == true) {
            ol.removeChild(li);
        }

        else {
            alert("O'chirilmadi!!!")
        }
    })
    console.log(paragraph);
})