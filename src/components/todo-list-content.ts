// src/components/todo-list-content.ts
import { customElement, LitElement, html, property } from 'lit-element';
import './todo-list-item';
import styles from './todo-list-content.lit.scss';
 
@customElement('todo-list-content')
class TodoListContent extends LitElement {
    static styles = styles;
 
    @property({type: Object, reflect: true})
    items = [];
 
    render() {
        return html`
            <div class="todo-list-content">
                ${this.items.map(item => (
                    html`<todo-list-item ?checked="${item.checked}" itemId="${item.id}">${item.value}</todo-list-item>`
                ))}
            </div>
        `;   
    }
}