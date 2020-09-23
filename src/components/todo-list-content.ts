import { customElement, html, LitElement, property } from "lit-element";
import "./todo-list-item";
import styles from "./todo-list-content.lit.scss";

@customElement("todo-list-content")
export class TodoListContent extends LitElement {
    static styles = styles;

    @property({type: Object})
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