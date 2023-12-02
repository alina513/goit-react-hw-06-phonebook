import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const contactReducer = contactsSlice.reducer
export default contactReducer;