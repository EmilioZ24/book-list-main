var btns= document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener("click", function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);

    });
});
    

const link= document.querySelector("#page-banner, a");

link.addEventListener("click", function(e){
    e.preventDefault(
        console.log("navigation to ", e.target.textContent, "was prevented.")
    );

});
    
const list = document.querySelector("#book-list ul");
list.addEventListener("click",function(e){
    if(e.target.className == "delete"){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});


//add books
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e){
    e.preventDefault(); 
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //add content
    /*adds class*/ deleteBtn.className = "delete";
    /*adds text inside span*/deleteBtn.textContent = "delete";
    /*adds class*/bookName.classList.add ("name");
    /*adds text inside span*/bookName.textContent = value;
    //adds styles li.style.marginTop = "60px";

    //append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


/* changing attributes of elements
    book.getAttribute("class");
    book.setAttribute("class", "name-2");
    book.hasAttribute("class");
    book.removeAttribute('class'); */
});

//hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function(e){
    if (hideBox.checked){
        list.style.display= "none";
    } else{
        list.style.display = "initial";
    }

});

//filter books
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup",function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li")
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });

});
