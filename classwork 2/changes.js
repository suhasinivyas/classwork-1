


//deletion
 const list = document.querySelector('#movie-list ul');
 list.addEventListener('click',(e) => {
   if(e.target.className== 'delete')
   {
     const li = e.target.parentElement;
     li.parentNode.removeChild(li);
   }
 })


//for hiding
  function myFunctionone() {
    var checkBox = document.getElementById("hide");
    var text = document.getElementById("theoption");
      // If the checkbox is checked, display the output text
    if (checkBox.checked != true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }



//adding
const addmovieForm = document.forms['add-movie'];
console.log(addmovieForm);

addmovieForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const value = addmovieForm.querySelector("input[type='text']").value;
   
    const li = document.createElement('Li');
    const m = document.createElement('span');
    const d =document.createElement('span');

    m.textContent = value;
    d.textContent= 'delete'
    
    d.classList.add('delete')
    m.classList.add('name');

    li.appendChild(m);
    li.appendChild(d);

    list.appendChild(li);

console.log(li)
})

//search
function searching() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("theoption");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = " ";
      } else {
          li[i].style.display = "none";
      }
    }
}
