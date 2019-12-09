// src/components/todo-list-header.ts
import { customElement, LitElement, html, query, property } from 'lit-element';
import styles from './todo-list-header.lit.scss';
 
@customElement('todo-list-header')
class TodoListHeader extends LitElement {
    static styles = styles;
 
    @query('input')
    textfield: HTMLInputElement;
 
    private addItem = () => {
        const value = this.textfield.value;
        if(!value) return;
      
        window.dispatchEvent(new CustomEvent('add-item', {detail: {
            value: this.textfield.value,
            checked: false,
            id: new Date().getTime()
        }}));
      
        this.textfield.value = '';
    };
    
    render() {
        return html`
            <div class="todo-list-header">
                <input type="text" placeholder="Add item..." />
                <button @click="${this.addItem}">Add</button>
            </div>
        `;   
    }
}