import { Store } from './lib/store';

const initialState = {
  counter: 0,
  todos: [
    { id: 0, description: 'Walk the dog', done: false },
    { id: 1, description: 'Do Homework', done: false },
  ],
};
// define store
const store = Store(initialState);
store.state.subscribe(val => console.log(val.counter));

// modifiers
const counterInc = (state: any, payload: number) => {
  return { ...state, counter: payload };
};

// add modifier on state
const nx = store.addModifier<number>(counterInc);
nx.next(4);
nx.next(5);
nx.next(9);
