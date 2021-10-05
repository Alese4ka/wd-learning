/*Add option*/
const selectList = document.querySelector('#select');
const newOption = document.querySelector('#name');

newOption.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    const option = new Option(newOption.value, newOption.value);
    selectList.add(option, undefined);
    newOption.value = '';
    newOption.focus();
  }   
})