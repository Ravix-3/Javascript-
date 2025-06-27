const todoList =[
                  {name:'DSA',
                  dueDate: '24-6-2025'},
                  {name:'Javascript',
                  dueDate:'23-5-2025'}
                ];
renderTodoList();

function renderTodoList(){
    let todoListHTML='';
        for(i=0;i<todoList.length;i++){
          const todoObject = todoList[i];
          // const name = todoObject.name;
          // const dueDate = todoObject.dueDate;
          // using destructing of an object
          const {name,dueDate}=todoObject;
          // generating an html in a javascript
          const html = `
          <div>${name} </div>
          <div>${dueDate}</div>
          <button
          class="input-delete-button"
           onclick='
            todoList.splice(${i},1);
            renderTodoList();
          '>Delete</button>
          `;
          todoListHTML += html;
        }
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  
  todoList.push({
    // name :name,  -->shorthand Property if object property name and variable name is same.
    // dueDate:dueDate
    name,
    dueDate
  });
  renderTodoList();
  inputElement.value = '';
}
