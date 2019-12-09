// src/components/todo-list.ts
import { customElement, LitElement, html, property } from 'lit-element';
import './todo-list-placeholder';
import './todo-list-header';
import './todo-list-content';
 
@customElement('todo-list')
class TodoList extends LitElement {
    @property({type: Object})
    items = [];
 
    private addItem = (e: CustomEvent) => {
        this.items = [...this.items, e.detail];
    };
 
    private deleteItem = (e: CustomEvent) => {
        this.items = this.items.filter(item => item.id !== e.detail.id);
    };
 
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('add-item', this.addItem);
        window.addEventListener('delete-item', this.deleteItem);
    }
 
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('add-item', this.addItem);
        window.removeEventListener('delete-item', this.deleteItem);
    }
 
    render() {
        return html`
            <div class="todo-list">
                <todo-list-placeholder>
                    <todo-list-header slot="header"></todo-list-header>
                    <todo-list-content slot="content" .items="${this.items}"></todo-list-content>
                </todo-list-placeholder>
            </div>
        `;   
    }
}