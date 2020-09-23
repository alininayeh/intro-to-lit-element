import "./components/todo-list";

// Create a div with id=root, then append the web component
const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);
document.querySelector('#root').innerHTML = '<todo-list></todo-list>';