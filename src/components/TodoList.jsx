import { useAutoAnimate } from '@formkit/auto-animate/react'

function TodoList({
  todos,
  handleDelete,
  handleCheckDone,
  editingId,
  editingText,
  handleStartEdit,
  handleEditingInput,
  handleCancelEdit,
  handleConfirmEdit,
}) {
  const [parent] = useAutoAnimate({ duration: 500 })

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      handleConfirmEdit(id)
    } else if (e.key === 'Escape') {
      handleCancelEdit()
    }
  }

  return (
    <ul className="mt-4 h-96 overflow-y-auto pr-2" ref={parent}>
      {todos.map((content) => (
        <li
          key={content.id}
          className="flex items-center p-3 mb-2 transition-colors rounded-lg bg-slate-800/10 hover:bg-slate-700/50"
        >
          {editingId === content.id ? (
            <>
              <input
                type="text"
                value={editingText}
                onChange={handleEditingInput}
                onKeyDown={(e) => handleKeyDown(e, content.id)}
                className="flex-grow px-2 py-1 text-orange-200 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                autoFocus
              />
              <button
                onClick={() => handleConfirmEdit(content.id)}
                className="flex-shrink-0 px-2 py-1 ml-2 text-sm text-green-400 border border-green-400 rounded hover:text-white hover:bg-green-400/50 transition-colors"
              >
                저장
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex-shrink-0 px-2 py-1 ml-2 text-sm text-gray-400 border border-gray-400 rounded hover:text-white hover:bg-gray-400/50 transition-colors"
              >
                취소
              </button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={content.isDone}
                onChange={() => handleCheckDone(content.id)}
              />
              <span
                className={`flex-grow ml-3 transition-colors ${
                  content.isDone
                    ? 'line-through text-orange-200/50'
                    : 'text-orange-200'
                }`}
              >
                {content.value}
              </span>
              <button
                onClick={() => handleStartEdit(content.id, content.value)}
                className="flex-shrink-0 px-2 py-1 ml-4 text-sm text-teal-400/80 hover:text-yellow-300 transition-colors"
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(content.id)}
                className="appearance-none bg-transparent flex-shrink-0 px-2 py-1 ml-2 text-sm text-white rounded hover:text-red-300 hover:bg-red-400/50 transition-colors"
              >
                X
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
