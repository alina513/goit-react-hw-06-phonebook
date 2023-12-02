// import { configureStore } from "@reduxjs/toolkit";
// import contactReducer from "./contactsSlice";
// import filterReducer from "./filterSlice";
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { combineReducers } from "@reduxjs/toolkit";
 

 

// export const store = configureStore({
//     reducer: {
//         contacts: contactReducer,
//         filters: filterReducer,
//     }
// })
// const persistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['contacts'],
//   };
//   const rootReducer = combineReducers({
//     contacts: contactReducer,
//     filters: filterReducer,
//   })
//   const persistedReducer = persistReducer(persistConfig, rootReducer)

//   export default () => {
//     let store = configureStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }


import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from "./contactsSlice";
import filterReducer from "./filterSlice";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };