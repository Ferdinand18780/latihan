const myArray= []

function addButton (){
  const inputValue =document.body.querySelector('.input').value;
  const paragraphElem =document.body.querySelector('.toDo');
  myArray.push(inputValue);
  console.log(myArray);
  htmlElem=toDo();
  paragraphElem.innerHTML=htmlElem;
}

function toDo (){
  let id = 0;
  let htmlElem='';
  while (id<myArray.length){
    htmlElem=htmlElem+`<p>${myArray[id]}<p/>`;
    id+=1;
  }
  return htmlElem
}