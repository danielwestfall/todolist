function Todo({ todo, index, remove }) {
    function handle() {
        remove(index);
    }
    return (<div className="todos" onClick={handle}> [-] {todo.text}</div>)
}