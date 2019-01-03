import React from 'react';

export default function MessageForm(props) {
  return (
    <span>
      <form
        onSubmit={e => {
          props.handleSubmit(e);
        }}
      >
        <input
          type="text"
          onChange={e => {
            props.handleChange(e, 'message');
          }}
        />
        <input type="submit" />
      </form>
      <div />
    </span>
  );
}
