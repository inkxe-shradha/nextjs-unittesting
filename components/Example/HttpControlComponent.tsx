import React from 'react';

type Todo = {
  id: number;
  userId: number;
  title: string;
  complete: boolean;
};

const HttpControlComponent = () => {
  const [todo, setTodo] = React.useState<Todo[]>([]);
  const [errors, setErrors] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((result) => {
        setTodo(result);
      })
      .catch((err) => {
        setErrors('Try again later');
      });
    return () => {};
  }, []);

  return (
    <div>
      {todo.length == 0 ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {todo.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
      {!!errors && <p>{errors}</p>}
    </div>
  );
};

export default HttpControlComponent;
