import { useState ,useEffect} from 'react';
import {Routes,Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    const[radio,setRadio]=useState("");
    const initialValues={
      name:"",
      age:"",
      email:"",
      number:"",
      radio:""
    };
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
  
    const handleChange=(e)=>{
      const{name,value}=e.target;
      setFormValues({...formValues,[name]:value});
    };
    const handleChangeRadio=(e)=>{
      const{name,value}=e.target;
      setFormValues({...formValues,[name]:value});
      setRadio(e.target.value);
    };
    
    const navigate = useNavigate();
    const gotoResponseDone = () => {
        navigate('/Response');
    }
    
    const HandleSubmit=(e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      if(Object.keys(formErrors).length===0 && isSubmit)
      {
        //  fetch("mongodb+srv://janhavi:4iPZ-vwXJeYsrvM@cluster0.raaonlz.mongodb.net/yogaForm",{
        //   method:"GET"
        //  }).then((res)=> res.json())
        
      }
    };
  
    useEffect(()=>{
      console.log(formErrors);
      
    },[formErrors])
  
    const validate=(values)=>{
      const errors={}
      const regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if(!values.name){
        errors.name="Name is required";
      }
      if(!values.age){
        errors.age="Age is required";
      }
      else if(values.age<18||values.age>65){
        errors.age="Age should be between 18 to 65";
      }
      if(!values.email){
        errors.email="Email-ID is required";
      }
      else if(!regex.test(values.email)){
        errors.email="Invalid Email";
      }
      if(!values.number){
        errors.number="Phone number is required";
      }
      else if(values.number.length!=10){
        errors.number="Invalid phone number";
      }
      if(!values.radio){
        errors.radio="Batch is required";
      }
      return errors;
    };
    return (
      <div className="Home">
        {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <h2 className="h2">Yoga classes registration form:</h2>
        <p className="p">Kindly fill out the form for joining the Yoga classes at Asha Classes.The monthly fees for the sessions at
          Asha Classes is INR 500, payment is done on a monthly basis.</p> 
          <br></br>
  
        <div className="inner_view">
          <form className="form"  method="POST">
            <h3>Enter your name:</h3>
            <input 
              className="input_box" 
              type="text" 
              name="name" 
              placeholder="  Full Name"
              value={formValues.name} 
              onChange={handleChange} />
            <p className="error">{formErrors.name}</p>
            
            <h3>Enter your age:</h3>
            <input 
              className="input_box" 
              type="number" 
              name="age" 
              placeholder="  Age" 
              value={formValues.age}
              onChange={handleChange}/>
            <p className="error">{formErrors.age}</p>
  
            <h3>Enter your email-id:</h3>
            <input 
              className="input_box" 
              type="text" 
              name="email" 
              placeholder="  Email ID" 
              value={formValues.email}
              onChange={handleChange} />
            <p className="error">{formErrors.email}</p>
  
            <h3>Enter your phone number:</h3>
            <input 
              className="input_box"   
              type="tel" name="number" 
              placeholder="  Phone Number" 
              value={formValues.number}
              onChange={handleChange}/>
            <p className="error">{formErrors.number}</p>
  
            <h3>Enter the batch you want to be in:</h3>
            <input 
              type="radio" 
              id="6_7" 
              name="radio" 
              value="6_7" 
              checked={radio === "6_7"} 
              onChange={handleChangeRadio}/>
  
            <label htmlFor="6_7">6 AM TO 7 AM</label>
            <br></br>
            <input 
              type="radio" 
              id="7_8" 
              name="radio" 
              value="7_8" 
              checked={radio === "7_8"} 
              onChange={handleChangeRadio}/>
  
            <label htmlFor="7_8">7 AM TO 8 AM</label>
            <br></br>
            <input 
              type="radio" 
              id="8_9" 
              name="radio" 
              value="8_9" 
              checked={radio === "8_9"} 
              onChange={handleChangeRadio}/>
  
            <label htmlFor="8_9">8 AM TO 9 AM</label>
            <br></br>
            <input 
              type="radio" 
              id="5_6" 
              name="radio" 
              value="5_6" 
              checked={radio === "5_6"} 
              onChange={handleChangeRadio}/>
  
            <label htmlFor="5_6">5 PM TO 6 PM</label>
            <p className="error">{formErrors.radio}</p>
            <br></br>
            <br></br>
            <br></br>
  
  
            <div className="inner_view">
            <button className="Submit" onClick={gotoResponseDone}>Submit
            </button>
            </div>
            
          </form>
        </div> 
        <br></br>
        <br></br>
      </div>
    );
  }
  
  export default Home;