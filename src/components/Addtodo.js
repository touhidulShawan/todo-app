import React from "react";

const Addtodo = props => {
  return (
    <form action="" onSubmit={props.submitForm}>
      <input
        type="text"
        placeholder="Add new Todo"
        onChange={props.inputValue}
        value={props.value}
        maxLength="45"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Addtodo;
