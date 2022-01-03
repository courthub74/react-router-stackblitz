import React from 'react';

export default function Catalog(props) {
  if (props.match.params.user) {
    const user = props.match.params.user;
    const message = props.match.params.msg;
    console.log(props.match);
    return (
      <>
        <h2>Catalog for: {user}</h2>
        <p>This is the message: {message}</p>
      </>
    );
  }
}
