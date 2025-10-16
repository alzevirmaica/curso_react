import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    user: null,
    users: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      if (action.payload.name.length <= 4) {
        alert("PREENCHA UM NOME COM MAIS DE 4 LETRAS");
        return { ...state };
      }

      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      };
    },
    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },
    addAddress: (state, action) => {
      if (action.payload.location === "" || action.payload.number === "") {
        alert("PREENCHA TODOS OS CAMPOS");
        return { ...state };
      }

      if (state.user === null) {
        alert("Faça o login para cadastrar um endereço");
        return { ...state };
      }

      alert("Dados atualizados!");

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      };
    },
    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },
    fetchUsers: (state) => {
      console.log("chamou");
    },
  },
});
export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers } =
  userSlice.actions;
export default userSlice.reducer;
