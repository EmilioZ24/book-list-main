const list = document.querySelector('#book-list ul');

Array.from(list).forEach(function(item) {
  item.addEventListener('click', (e) => {

    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behaviour

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});

// add to  book-list
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value
  
  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  //add content
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  //add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// hide 
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial"
  }
});
// filter
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term)!=-1){
      book.style.display = 'block';
    } else {

    }
  })

})
