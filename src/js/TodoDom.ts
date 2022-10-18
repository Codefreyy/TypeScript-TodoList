import { findParentNode } from "../utils"
import TodoTemplate from "./TodoTemplate"
import { ITodoData } from "./typings"
import {createItem} from '../utils'

// 操作dom
class TodoDom extends TodoTemplate {
    private todoWrapper: HTMLElement
    constructor(todoWrapper: HTMLElement) {
        super()
        this.todoWrapper = todoWrapper
    }
    protected initList(todoData: ITodoData[]) {
        if(todoData.length) {
            const oFrag: DocumentFragment = document.createDocumentFragment()
            todoData.map((todo: ITodoData)=> {
                const oItems = createItem('div', 'todo-item', this.todoView(todo))
                oFrag.appendChild(oItems)
            })
            this.todoWrapper.appendChild(oFrag)
        }
        
    }
    protected addItem(todo: ITodoData) {
        const oItems = createItem('div', 'todo-item', this.todoView(todo))
       this.todoWrapper.appendChild(oItems)
    }

    protected removeItem(target: HTMLElement) {
        const oParentNode = findParentNode(target, 'todo-item')
        oParentNode?.remove()
    }

    protected changeCompleted(target: HTMLElement, completed: boolean) {
        const oParentNode: HTMLElement = findParentNode(target, 'todo-item') as any
        const oContent: HTMLElement = oParentNode?.getElementsByTagName('span')[0]
        oContent.style.textDecoration = completed ? 'line-through' : ''
    }
}

export default TodoDom