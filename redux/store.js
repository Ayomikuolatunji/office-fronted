/* eslint-disable import/no-anonymous-default-export */
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import { persistStore, persistReducer,FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import countryApiSlice from "./country/countryApiSlice";
import companyTypeSlice from './company/companyTypeSlice';
import employeeAuth from './auth/employeSlice';
import modalSlice from './modal/modalSlice';
import employeeInfo from './employee/employeeInfoSlice';
import employeeCompanyInfo from './employee/employeeCompanySlice';

const persistConfig = {
    key: 'onlineoffice',
    storage,
    blacklist:["modal","employeeCompanyInfo"],
}
// first reducer setup for persist storage blacklisting country and companies
const rootReducer= combineReducers({
   //don't persist stores below 

    modal:modalSlice,
    employeeCompanyInfo:employeeCompanyInfo,
    // persist the stores below
    companies:companyTypeSlice,
    country:countryApiSlice,
    employeeAuth:employeeAuth,
    employeeInfo:employeeInfo
})

// persist store
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=configureStore({
    // sending 
    reducer:persistedReducer,
    // apply middleware
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export default{
    store:store,
    persistStore:persistStore(store)
}