let task_btn = document.getElementById('task_button');
let ul_list = document.getElementById('ul_list');
let reset_button = document.getElementById('reset_button');

console.log('To-Do-List');

task_btn.addEventListener('click',()=>{
    let user_input = document.getElementById('task');
    if(user_input.value != ""){
    console.log('Added To List');
    const new_task = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const task_data = document.createTextNode(user_input.value);
    new_task.appendChild(checkbox);
    new_task.appendChild(task_data);
    ul_list.appendChild(new_task);
    user_input.value = '';
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            new_task.classList.add('completed');
        } else {
            new_task.classList.remove('completed');
        }
    });
    
});
reset_button.addEventListener('click', () => {
    ul_list.innerHTML = ''; // Clear the list
});
