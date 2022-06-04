// __tests__/index.test.jsx
import { render, screen,fireEvent} from '@testing-library/react'
import Login from "../Login"
import {Provider} from "react-redux"
import store from '../../../../redux/store';
import { PersistGate } from 'redux-persist/integration/react'

const MockLogin=()=>{
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
         <MockLogin/>
      )
      const loginBtnText=screen.getByTestId("login-btn")
      expect(loginBtnText.textContent).toBe("Login")
  })

   // 
   it('check if h1 exit with textContent of Sign In',()=>{
       render(
              <MockLogin/>
       )

       const h2=screen.getByRole('heading',{name:'Sign In'})
       expect(h2.textContent).toBe("Sign In")
   })


    // confirm if forgot password exits and link to reset password page
  it('login anchor tag of forgot password ', () => {
    render(
       <MockLogin/>
    )
    const linkBtnText=screen.getByRole("link",
    {
        name:"Forgotten Password ?"
    })
    expect(linkBtnText.textContent).toBe("Forgotten Password ?")
   })
   
     //  confirm if signup btn has a text
   it('login anchor tag of signup ', () => {
       render(
          <MockLogin/>
      )
         const linkText=screen.getByText(/Don't have an Account ? /i)
         const span=screen.getByText(/Signup/i)
         expect(span.textContent).toBe("Signup")
         expect(linkText.textContent).toBe("Don't have an Account ?Signup")
    })

    it('expect email and password values from login form inputs ', async() => {
         render(
            <MockLogin/>
         )
         const inputNode1 = screen.getByLabelText('Email')
         const inputNode2 = screen.getByLabelText('Password')
         expect(inputNode1.value).toBe('')
         expect(inputNode2.value).toBe('')
    })

    it("user sent email and password", () => {
        const email = "user@gmail.com";
        const password = "123456";
    
        let {getByTestId,getByLabelText} = render(<MockLogin />);
    
        fireEvent.change(getByLabelText('Email'), {
          target: { value: email }
        });
    
        fireEvent.change(getByLabelText("Password"), {
          target: { value: password }
        });
    
        fireEvent.submit(getByTestId("login-form"));
        expect(getByLabelText("Email").value).toEqual("user@gmail.com");
        expect(getByLabelText("Password").value).toEqual("123456");
      });
})