import AllUserSlice from "./AllUser-slice";
/* eslint-disable import/no-anonymous-default-export */
import { createStore,combineReducers,applyMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'

const rootReducer= combineReducers({
    users:AllUserSlice
})
const persistConfig = {
    key: 'users',
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store=createStore(persistedReducer,applyMiddleware(thunk))



export default{
    store:store,
    persistStore:persistStore(store)
}