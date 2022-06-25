import axios from 'axios'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { registerCompany } from '../../../hooks/companyApis'
import { FormLogicHook } from '../../../helpers/FormLogicHook'
import InputText from '../../../utils/InputText'
import SelectCompany from './SelectCompany'
import SelectCountry from './SelectCountry'
import Button from "../../../utils/Button"
import { toastOption } from '../../../helpers/toastOption'
import CircleProgressbar from '../../../utils/materialUi/CircleProgressBar'




export default function RegisterCompanyForm() {
 const  {values, handleChange}=FormLogicHook()
 const [error,setError]=useState('')
 const [loading,setLoading]=useState(false)
 const country=useSelector(state=>state.country.seletedCountry)
 const company=useSelector(state=>state.companies.selectedCompany)


 const handleSubmit=async(event)=>{
     setLoading(true)
      try{
        event.preventDefault()
        const {
            company_name,
            company_email,
            company_password
        }=values
         
        if(company_email.trim()===""|| company_name.trim()===""|| company_password.trim()===""){
            setLoading(false)
            toast.error("Please fill all the fields",toastOption)
            return 
        }else{
            const res=await axios.post(registerCompany,{
            company_name:company_name.trim(),
            company_password:company_password.trim(),
            company_email:company_email.trim(),
            company_country:country.trim(),
            company_type:company.trim(),
        })
            if(res.status===200){
                setLoading(false)
            }
        }
      }catch(error){
        setLoading(false)
         if(error.response){
            toast.error(error.response.data.message,toastOption)
         }else if(error.request){
            toast.error("Network error",toastOption)
         }else{
            toast.error("Something went wrong",toastOption)
         }
      }
 } 

  return (
     <div className='w-[60%] mx-auto flex justify-center items-center'>
        <form className="w-[50%] h-[inherent] flex flex-col relative border-2 shadow-xl" onSubmit={(e)=>handleSubmit(e)}>
                <div className="text-center p-3">
                   <h3>Register your company</h3>
                </div>
                <div className="normal-input p-3">
                   <InputText 
                        text="text"
                        name={"company_name"}
                        variant="outlined"
                        label={"Company Name"}
                        value={values.company_name}
                        onChange={(e)=>handleChange(e)}
                        placeholder={"Enter your  company name"}
                        className="w-full border-b-2 border-r-0 border-l-0 border-t-0"
                      />
                    </div>
                <div className="normal-input p-3 w-full">
                    <InputText 
                        text="email"
                        value={values.company_email}
                        label={"Company Email"}
                        variant="outlined"
                        name={"company_email"}
                        onChange={(e)=>handleChange(e)}
                        placeholder={"Enter your company email address"}
                        className="w-full border-b-2 border-r-0 border-l-0 border-t-0"
                    />
                </div>
                <div className="normal-input p-3 w-full">
                    <InputText 
                    text="password"
                    label={"Company Password"}
                    variant="outlined"
                    name={"company_password"}
                    value={values.company_password}
                    onChange={(e)=>handleChange(e)}
                    placeholder={"Enter your company account password"}
                    className="w-full border-b-2 border-r-0 border-l-0 border-t-0"
                    />
                </div>
                <div className='w-[100%] flex mx-auto relative p-3'>
                    <SelectCountry/>
                </div>
                <div className='w-[100%] flex mx-auto relative p-3'>
                    <SelectCompany/>
                </div>
                <div className="submit mt-5 w-full p-3 flex justify-center ">
                    <Button 
                    text={loading ? <CircleProgressbar/> :"Signup"} 
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                    />
                </div>
        </form>
    </div>
  )
}
