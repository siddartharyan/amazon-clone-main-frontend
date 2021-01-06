function add(state, item) {
  return {
    ...state,
    cnt: state["cnt"] + 1,
    cart: [...state["cart"], item]
  };
}

function remove(state, item) {
  const { title, image, price, rating } = item;
  let dup = state["cart"];
  let found = false;
  let arr = [];
  for (let i = 0; i < dup.length; i++) {
    if (
      dup[i]["title"] === title &&
      dup[i]["price"] === price &&
      dup[i]["rating"] === rating &&
      !found
    ) {
      found = true;
      continue;
    } else {
      arr.push(dup[i]);
    }
  }
  let count = state["cnt"];
  return {
    ...state,
    cnt: count - 1,
    cart: arr
  };
}

export default (state, action) => {
  switch (action.type) {
    case "add":
      return add(state, action.payload);
    case "remove":
      return remove(state, action.payload);
    case "signout":
      return {
        ...state,
        name: "",
        isloggedin: false
      };
    case "login":
      return {
        ...state,
        name: action.payload,
        isloggedin: true
      };
    case "reset":
      return {
        ...state,
        reset: false,
        id: ""
      };
    case "setid":
      return {
        ...state,
        id: action.payload,
        verify: true
      };
    case "resetid":
      return {
        ...state,
        id: "",
        verify: false
      };
    case "resett":
      return {
        ...state,
        id: action.payload,
        reset: true
      };
    default:
      return state;
  }
};
