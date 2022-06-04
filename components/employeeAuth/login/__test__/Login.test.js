// __tests__/index.test.jsx
import { render, screen,getByLabelText } from '@testing-library/react'
import Login from "../Login"
import {Provider} from "react-redux"
import store from '../../../../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const MockRedux=()=>{
    return <Provider store={store.store}>
        <PersistGate persistor={store.persistStore}>
            <Login/>
        </PersistGate>
    </Provider>
}


describe('Home', () => {

    //test if Login was in extacted from the component 
  it('login btn renders a text of Login ', () => {
      render(
         <MockRedux/>
      )
      const loginBtnText=screen.getByTestId("login-btn")
      expect(loginBtnText.textContent).toBe("Login")
  })
//   confirm if forgot password exits and link to reset password page
  it('login anchor tag of forgot password ', () => {
    render(
       <MockRedux/>
    )
    const linkBtnText=screen.getByRole("link",
    {
        name:"Forgotten Password ?"
    })
    expect(linkBtnText.textContent).toBe("Forgotten Password ?")
   })

   it('login anchor tag of signup ', () => {
    render(
       <MockRedux/>
    )
    const linkBtnText=screen.getByRole("link",
    {
        name:"Don't have an Account ? Signup"
    })

    // confirm if input fields are empty when page loads
    expect(linkBtnText.textContent).toBe('Don\'t have an Account ? Signup')
     })

    it('expect email and password values from login form inputs ', async() => {
         render(
            <MockRedux/>
         )
         const inputNode1 = screen.getByLabelText('Email')
         const inputNode2 = screen.getByLabelText('Password')
         expect(inputNode1.value).toBe('')
         expect(inputNode2.value).toBe('')
    })
})