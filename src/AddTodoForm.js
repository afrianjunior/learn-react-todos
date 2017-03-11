import React from 'react';

const AddTodoForm = (props) => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      const { target } = event;
      const todoTitle = target.todoTitle.value;

      // call passed callback from parent component
      props.onAddTodo(todoTitle);
      
      // clear input
      target.todoTitle.value = '';
    }}
  >
    <input type="text" name="todoTitle" />
    <button type="submit">Add</button>
  </form>
);

export default AddTodoForm;