import { customElement, html, LitElement, property } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import styles from "./todo-list-item.lit.scss";

@customElement("todo-list-item")
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
        
        this.dispatchEvent(new CustomEvent("deleteItem", {
            detail: {
                id: this.itemId
            },
            bubbles: true,
            composed: true
        }));
    };
    
    render() {
        return html`
            <div class="${classMap({"todo-list-item": true, "checked": this.checked})}" @click="${this.checkItem}">
                <input type="checkbox" ?checked="${this.checked}" />
                <span><slot></slot></span>
                <button @click="${this.deleteItem}">Delete</button>
            </div>
        `;
    }
}