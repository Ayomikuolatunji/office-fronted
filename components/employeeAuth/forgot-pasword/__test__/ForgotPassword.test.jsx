import {screen,render, fireEvent} from "@testing-library/react"
import ForgotPassword from "../ForgotPassword"
import {Provider} from "react-redux"
import store from '../../../../redux/store';
import { PersistGate } from 'redux-persist/integration/react'



const MockForgetPassword=()=>{
    return <Provider store={store.store}>
        <PersistGate persistor={store.persistStore}>
            <ForgotPassword/>
        </PersistGate>
    </Provider>
}




describe('ForgotPassword', () => {
    
    it('should render forgot password', () => {
        render(<MockForgetPassword />)
        const forgotPassword=screen.getByText(/Provide your email address to change password/i)
        expect(forgotPassword.textContent).toBe("Provide your email address to change password")
    }) 

    it('should render forgot password', () => {
        render(<MockForgetPassword />)
         const forgotPassword=screen.getByText(/Back to login/i)
         expect(forgotPassword.textContent).toBe("Back to login Login")

    }) 

    it('should render forgot password', () => {
         const email="ayomikuolatunji@gmail.com"
         const {getByLabelText,getByTestId}=  render(<MockForgetPassword />)
         const emailInput=getByLabelText(/Enter email account/i)
         fireEvent.change(emailInput,{target:{value:email}})
         fireEvent.submit(getByTestId("forgot-password-form"))
         expect(emailInput.value).toBe(email)
    })
})