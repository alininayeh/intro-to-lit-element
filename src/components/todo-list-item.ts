// src/components/todo-list-item.ts
import { customElement, LitElement, html, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import styles from './todo-list-item.lit.scss';
 
@customElement('todo-list-item')
class TodoListItem extends LitElement {
    static styles = styles;
 
    @property({type: Boolean})
    checked = false;
 
    @property({type: Number})
    itemId = 0;
 
    private checkItem = () => {
        this.checked = !this.checked;
    };
 
    private deleteItem = (e: Event) => {
        e.stopImmediatePropagation();
        window.dispatchEvent(new CustomEvent('delete-item', {detail: {id: this.itemId}}));
    };
 
    render() {
        return html`
            <div @click="${this.checkItem}" class="${classMap({"todo-list-item": true, "checked": this.checked})}">
                <input type="checkbox" ?checked="${this.checked}" />
                <span><slot></slot></span>
                <button @click="${this.deleteItem}">Delete</button>
            </div>
        `;
    }
}