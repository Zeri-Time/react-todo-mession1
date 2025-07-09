function TodoInput({ input, handleInput, handleClick, handleEnter }) {
  return (
    <div className="flex w-full items-center p-2 rounded-lg border border-slate-700 bg-slate-800/30 transition-all focus-within:border-teal-400/70 focus-within:ring-1 focus-within:ring-teal-400/70">
      <input
        type="text"
        onChange={handleInput}
        value={input}
        onKeyDown={handleEnter}
        className="flex-grow w-full p-1 text-orange-200 bg-transparent focus:outline-none"
        placeholder="할 일을 입력하세요"
      />
      <button
        onClick={handleClick}
        className="ml-2 flex-shrink-0 px-4 py-1 font-semibold text-white bg-teal-500/80 rounded-md hover:bg-teal-500 transition-colors"
      >
        추가
      </button>
    </div>
  )
}

export default TodoInput
