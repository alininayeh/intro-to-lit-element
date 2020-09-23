import { customElement, html, internalProperty, LitElement } from "lit-element";
import "./todo-list-placeholder";
import "./todo-list-header";
import "./todo-list-content";

@customElement("todo-list")
export class TodoList extends LitElement {
    @internalProperty()
    private items = [];

    private addItem = (e: CustomEvent) => {
        this.items = [...this.items, e.detail];
    };

    private deleteItem = (e: CustomEvent) => {
        this.items = this.items.filter(item => item.id !== e.detail.id);
    };

    render() {
        return html`
            <div class="todo-list">
                <todo-list-placeholder>
                    <todo-list-header slot="header" @addItem="${this.addItem}"></todo-list-header>
                    <todo-list-content slot="content" .items="${this.items}" @deleteItem="${this.deleteItem}"></todo-list-content>
                </todo-list-placeholder>
            </div>
        `;
    }
}