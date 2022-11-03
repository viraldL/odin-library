const popupBox = document.querySelector(".box");
const addBtn = document.querySelector("#btnAdd");
const addAddBtn = document.querySelector("#addAdd");
const addBack = document.querySelector("#addBack");
const form = document.querySelector("#form");
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}


function removePop() {
    popupBox.classList.remove("active");
}

function addPop() {
    popupBox.classList.add("active");
    form.reset();
}


addBtn.addEventListener("click", () => {
    addPop();
});

addBack.addEventListener("click", () => {
    removePop();
});

addAddBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addBookToLibrary()
})

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    if(title != "" && author != "" && pages != ""){
        removePop()
        myLibrary.push(new Book(title, author, pages, read))
        console.log(myLibrary);
    }
}

function addBookToSite() {

}