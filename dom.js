//examine the document object//
console.dir(document);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.all[10]);
var headerTitle = document.getElementById('header-title');
headerTitle.innerHTML = '<h3>hello</h3>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
//get elemnts by class name
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='hello 2';
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';
items[2].style.backgroundColor='green';









