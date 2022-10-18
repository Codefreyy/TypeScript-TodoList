import { ITodoData } from "./typings";
// 视图层
class TodoTemplate {
    protected todoView (todo: ITodoData) {
        const {id, content, completed} = todo
        return `
            <input type='checkbox' ${completed ? 'checked' : ''} data-id=${id}/>
            <span style="text-decoration: ${completed ? 'line-through': null}">${content}</span>
            <button data-id="${id}">Delete</button>
        `
    }
}

export default TodoTemplate