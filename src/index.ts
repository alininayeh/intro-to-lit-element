// src/index.ts
import './components/todo-list';
 
const div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);
document.querySelector('#root').innerHTML = '<todo-list></todo-list>';
