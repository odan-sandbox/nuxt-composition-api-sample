import express from 'express';
import { Todo, User } from '../types';

const app = express();

app.get('/hello', (_, res) => {
  res.send('hello');
});

app.get('/profile', (_, res) => {
  const profile: User = {
    id: 1,
    name: 'Alice',
  };

  res.send(profile);
});

app.get('/todo', (_, res) => {
  const todos: Todo[] = [
    { title: 'todo1', description: 'todo1 です' },
    { title: 'todo2', description: 'todo2 です' },
  ];
  res.send(todos);
});

export default app;
