1. What problem does the context API help solve?
   lets you avoid prop drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: updates state depending on UI events. setup the base, evenets you want to happen

reducers: reducers hold and setup the logic.

store: top of the tier holder of the final state and the starting state

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

component state is more local compared to application state. You dont always need to send everything everywhere sometimes its more effecient to be more specific.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is what lets us perform async actions with the store. Gives you action-creators a start, success and failure.

1. What is your favorite state management system you've learned and this sprint? Please explain why! Redux seems like it will be very effective when I master it. Eager to see what it can do.
