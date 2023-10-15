# 10.15 Progress

Can't get the `react-grid-dnd` swap function to work. I keep getting a TypeError that says the sourceId of the gridItem being swapped is undefined ("Uncaught TypeError: Cannot read properties of undefined (reading '4')").

As far as I know, I've translated the `onChange` (in my case `handleChange`) function appropriately according to multiple examples. I suspect it has something to do with my importing data via `.js` file instead of an array written directly into `App.js`.

Some examples I'm working off of:

- [https://www.npmjs.com/package/react-grid-dnd?activeTab=readme](https://www.npmjs.com/package/react-grid-dnd?activeTab=readme)
- [https://codesandbox.io/embed/gracious-wozniak-kj9w8](https://codesandbox.io/embed/gracious-wozniak-kj9w8)
- [https://codesandbox.io/s/github/gosiagorczyca/ReactGridDnD/tree/main/?file=/src/index.js](https://codesandbox.io/s/github/gosiagorczyca/ReactGridDnD/tree/main/?file=/src/index.js)
