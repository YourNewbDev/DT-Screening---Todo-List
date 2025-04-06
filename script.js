const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

 function addTodo() {
 	const todoText = todoInput.value.trim();

 	if (todoText !== '') {
 		const li = document.createElement('li');
 		li.textContent = todoText;

 		 li.addEventListener('click', completeTodo);

		 const deleteBtn = document.createElement('button');
		 deleteBtn.textContent = 'Delete';
		 deleteBtn.addEventListener('click', deleteTodo);
		 li.appendChild(deleteBtn);

 		todoList.appendChild(li);
 		todoInput.value = '';
 	}
 }

 function completeTodo(event) {
 	const todo = event.target;
 	todo.classList.toggle('completed');
 }

 todoInput.addEventListener('keydown', function(event) {
 	if (event.key === 'Enter') {
 		addTodo();
 	}
 })

 

 function deleteTodo(event) {
 	const todo = event.target.parentElement;
 	todoList.removeChild(todo);
 }
