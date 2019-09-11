const initProductList = [
  {
    id: 5,
    code: "",
    name: ""
  }
];

function Add(state = initProductList, action) {
  switch (action.type) {
    case "Add":
      return [...state, action.newProduct];
    default:
      return state;
  }
}

export default Add;
