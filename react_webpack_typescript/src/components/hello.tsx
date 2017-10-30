import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
const Hello = (props: HelloProps) => {
  return <h1>Hello from {props.compiler} and {props.framework}!</h1>;
}

export default Hello;
