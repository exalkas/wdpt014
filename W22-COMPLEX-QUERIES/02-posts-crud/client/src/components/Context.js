import { createContext, useReducer, useState } from "react";

export const AppContext = createContext();

export default function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          user: action.payload,
        };

      case "LOGOUT":
        return {
          user: {},
          posts: [],
        };

      case "LIST_POSTS":
        return {
          ...state,
          posts: action.payload,
        };

      case "ADD_POST":
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      default:
        return state;
    }
  };

  // const [state2, setState2] = useState({
  //   user: {},
  //   posts: [],
  // });

  // function login(user) {
  //   setState2({
  //     ...state2,
  //     user: { ...user },
  //   });
  // }

  // function logout() {
  //   setState2({
  //     user: {},
  //     posts: [],
  //   });
  // }
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    posts: [],
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
