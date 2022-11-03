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
        addBookToSite()
        console.log(myLibrary);
    }
}

function addBookToSite() {
    
    if(myLibrary.length > 0){
        document.querySelector("main").innerHTML = "";
        for(const book of myLibrary){
            const div = document.createElement("div");
            const title = document.createElement("p");
            const author = document.createElement("p");
            const pages = document.createElement("p");
            const read = document.createElement("p");
            const readBtn = document.createElement("input");
            const deleteBtn = document.createElement("button");
            div.classList.add("bookBox");
            div.setAttribute("data-id", `${myLibrary.length}`)

            title.classList.add("boxTitle");
            title.innerText = book.title;

            author.classList.add("boxAuthor");
            author.innerText = book.author;

            pages.classList.add("boxPages");
            pages.innerText = book.pages;

            read.classList.add("boxIsRead");
            readBtn.classList.add("isReadBtn");
            readBtn.setAttribute("type", "checkbox");
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.setAttribute("data-id", `${myLibrary.length}`);
            deleteBtn.innerHTML = "&#x2716;";
            readBtn.setAttribute("data-id", `${myLibrary.length}`);
            if(book.read){
                read.innerText = "Read.";
                readBtn.checked = true;
                div.classList.add("read");
            } else {
                read.innerText = "Not read yet."
            }

            div.appendChild(title);
            div.appendChild(author);
            div.appendChild(pages);
            div.appendChild(read);
            div.appendChild(readBtn);
            div.appendChild(deleteBtn);
            document.querySelector("main").appendChild(div);
            changeRead(div, readBtn, book);
            deleteBook(div, deleteBtn, myLibrary);
        }


    } else {
        console.log(`nothing to add`)
    }
}

function changeRead(div, btn, book) {
    btn.addEventListener("click", () => {
        if(btn.checked){
            div.classList.add("read");
            book.read = true;
            console.log(myLibrary);
        } else {
            div.classList.remove("read");
            book.read = false;
            console.log(myLibrary);
        }
    })
}

function deleteBook(div, btn, lib){
    btn.addEventListener("click", () => {
        const index = btn.getAttribute("data-id");
        lib.splice(index-1, 1);
        div.remove();
        console.log(myLibrary);
    })
}