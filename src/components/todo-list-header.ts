import { customElement, html, LitElement, query } from "lit-element";
import styles from "./todo-list-header.lit.scss";

@customElement("todo-list-header")
export class TodoListHeader extends LitElement {
    static styles = styles;

    @query("input")
    textfield: HTMLInputElement;

    private addItem = () => {
        const value = this.textfield.value;
        if (!value) return;

        this.dispatchEvent(new CustomEvent("addItem", {
            detail: {
                value: value,
                checked: false,
                id: new Date().getTime() + Math.random()
            }
        }));

        this.textfield.value = "";
    }
    
    render() {
        return html`
            <div class="todo-list-header">
                <input type="text" placeholder="Add item..." />
                <button @click="${this.addItem}">Add</button>
            </div>
        `;
    }
}