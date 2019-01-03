import React from 'react';

export default function UserForm(props) {
  return (
    <form
      onSubmit={e => {
        props.handleSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="Please enter a username"
        onChange={e => {
          props.handleChange(e, 'user');
        }}
      />
      <input type="submit" />
    </form>
  );
}
