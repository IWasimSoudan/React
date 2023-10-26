import store from "./store";
import { bugAdded,bugResolved,bugRemoved } from "./actions";

store.dispatch(bugAdded("Bug 1"));
// Add new bug to store
console.log(store.getState());
// Add updated bug to store
store.dispatch(bugResolved(1))

console.log(store.getState());
// Deleted new bug to store
store.dispatch(bugRemoved(1))

console.log(store.getState());
