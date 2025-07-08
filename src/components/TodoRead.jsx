function TodoRead({ todos, handleDelete, handleCheckDone }) {
  return (
    <>
      <ul>
        {todos.map((content) => (
          <li key={content.id} className={content.isDone ? 'done' : ''}>
            <input
              type="checkbox"
              checked={content.isDone}
              onChange={() => handleCheckDone(content.id)}
            />
            <span
              className={`flex-grow ml-3 ${
                content.isDone ? 'line-through text-gray-500' : 'text-white'
              }`}
            >
              {content.value}
            </span>
            <button onClick={() => handleDelete(content.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoRead
