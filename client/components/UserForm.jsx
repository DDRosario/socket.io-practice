import React from 'react';

export default function UserForm(props) {
  return (
    <form>
      <input type="text" placeholder="Please enter a username" />
      <input type="submit">Submit</input>
    </form>
  );
}
