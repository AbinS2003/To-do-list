const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash clothes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <p>${name}</p>
      <p>${dueDate} </p>
      <button class="delete-todo-button js-delete-todo-button" data-index="${i}">Delete</button>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton) => {
    deleteButton.addEventListener('click', (event) => {
      const index = event.target.dataset.index;
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  renderTodoList();
}
