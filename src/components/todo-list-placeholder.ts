// src/components/todo-list-placeholder.ts
import { customElement, LitElement, html } from 'lit-element';
import styles from './todo-list-placeholder.lit.scss';
 
@customElement('todo-list-placeholder')
class TodoListPlaceholder extends LitElement {
    static styles = styles;
    
    render() {
        return html`
            <div class="todo-list-placeholder">
                <div class="todo-list-header-placeholder">
                    <slot name="header"></slot>
                </div>
                <div class="todo-list-content-placeholder">
                    <slot name="content"></slot>
                </div>
            </div>
        `;   
    }
}