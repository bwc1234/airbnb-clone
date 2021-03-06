import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    persistStore, 
    persistReducer, 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER } from "redux-persist";
import rootReducer from "./rootReducer";
import {  } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

export const persistor = persistStore(store);

export default store;