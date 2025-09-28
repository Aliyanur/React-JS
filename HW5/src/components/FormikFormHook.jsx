import React from 'react'
import { useFormik } from 'formik'

export const FormikFormHook = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      course: "",
      gender: "",
      dob: "",
      city: "",
      country: "",
      phone: "",
      education: "",
      address: "",
      state: "",
      zip: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.fullName) errors.fullName = "Full name is required";
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password || values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      if (!values.course) errors.course = "Please select a course";
      if (!values.gender) errors.gender = "Please select a gender";
      if (!values.dob) errors.dob = "Date of birth is required";
      if (!values.city) errors.city = "City is required";
      if (!values.country) errors.country = "Country is required";
      if (values.zip && !/^\d+$/.test(values.zip)) {
        errors.zip = "Zip code must contain only numbers";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", padding: 20 }}>
    <h2 style={{textAlign:"center", fontWeight:"bold"}}>Course Application</h2>
      <form 
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px", margin: "20px auto" }}
      >
        <input type='text' name='fullName' placeholder='Full Name' value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.fullName && formik.errors.fullName && ( <div style={{color:"red"}}>{formik.errors.fullName}</div>  )}

        <input type='email' name='email' placeholder='Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email && (<div style={{color:"red"}}>{formik.errors.email}</div>)}

        <input type='password' name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange}onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.password && (<div style={{color:"red"}}>{formik.errors.password}</div>)}

        <select name="course" value={formik.values.course} onChange={formik.handleChange} onBlur={formik.handleBlur}>
          <option value=''>Select a course</option>
          <option value='Math'>Math</option>
          <option value='SE'>Software Engineering</option>
          <option value='Design'>Product Design</option>
        </select>
        {formik.touched.course && formik.errors.course && (<div style={{color:"red"}}>{formik.errors.course}</div>)}

        <div>
          <label>
            <input type='radio' name='gender' value='female'
              checked={formik.values.gender==="female"}
              onChange={formik.handleChange}/> Female
          </label>
          <label>
            <input type='radio' name='gender' value='male'
              checked={formik.values.gender==="male"}
              onChange={formik.handleChange}/> Male
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender && (
          <div style={{color:"red"}}>{formik.errors.gender}</div>
        )}

        <input type='date' name='dob' value={formik.values.dob} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.dob && formik.errors.dob && (<div style={{color:"red"}}>{formik.errors.dob}</div>)}

        <input type='text' name='city' placeholder='City' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.city && formik.errors.city && (<div style={{color:"red"}}>{formik.errors.city}</div>)}


        <input type='text' name='country' placeholder='Country' value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.country && formik.errors.country && (<div style={{color:"red"}}>{formik.errors.country}</div>)}

        <input type='text' name='phone' placeholder='Phone' value={formik.values.education} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <select name="education" value={formik.values.education} onChange={formik.handleChange} onBlur={formik.handleBlur}>
          <option value=''>Select Education</option>
          <option value='School'>School</option>
          <option value='College'>College</option>
          <option value='University'>University</option>
        </select>
        
        <textarea name="address" placeholder="Address"
          value={formik.values.address} onChange={formik.handleChange}/>

        <input type="text" name="state" placeholder="State"
          value={formik.values.state} onChange={formik.handleChange}/>

        <input type='text' name='zip' placeholder='Zip' value={formik.values.zip} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.zip && formik.errors.zip && (<div style={{color:"red"}}>{formik.errors.zip}</div> )}

        <button type='submit' style={{background:"green", color:"white", padding:"8px"}}>
          Submit
        </button>
      </form>
    </div>
  );
}