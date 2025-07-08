function TodoCreate({ input, handleInput, handleClick, handleEnter }) {
  return (
    <>
      <input
        type="text"
        onChange={handleInput}
        value={input}
        onKeyDown={handleEnter}
        className="border border-white"
      />
      <button onClick={handleClick}>추가</button>
    </>
  )
}

export default TodoCreate
