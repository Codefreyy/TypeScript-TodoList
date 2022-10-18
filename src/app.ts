import { ITodoData } from "./js/typings"
import TodoEvent from "../src/js/TodoEvent";

;((doc)=>{
    const oInput: HTMLInputElement = document.querySelector('input')
    const oAddButton: HTMLElement = document.querySelector('button')
    const oTodoList: HTMLElement = document.querySelector('.todo-list')
    const todoData: ITodoData[] = [
        {
            id: 1,
            content: 'godfrey',
            completed: false
        },
        {
            id: 2,
            content: 'godfrey1',
            completed: false
        },
        {
            id: 3,
            content: 'godfrey2',
            completed: false
        }
    ]
    const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList)
    const init = ():void => {
        bindEvent()
    }
    function bindEvent() :void {
        oAddButton.addEventListener('click', handleAddButtonClick, false)
        oTodoList.addEventListener('click', handleListClick, false)
    }

    function handleAddButtonClick():void {
        const val: string = oInput.value.trim()
        if(val.length) {
            const res = todoEvent.addTodo(<ITodoData>{
                id:4,
                content:val,
                completed:false
            })
            if(res && res === 1001) {
                alert('列表项已存在')
                return
            }
        }
       
    }
    function handleListClick(e: MouseEvent):void {
        const tar = e.target as HTMLElement
        console.log(tar.tagName)
        const tagName = tar.tagName.toLowerCase()
        if(tagName === 'input' || tagName === 'button') {
        const id = parseInt(tar.dataset.id)
            switch(tagName) {
                case 'input':
                    todoEvent.toggleCompleted(tar, id)
                    break;
                case 'button':
                    todoEvent.remoteTodo(tar, id)
                    break;
                default:
                    break
            }
        }
    }
    init()
})(document)