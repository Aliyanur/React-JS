import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const schema=yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  course: yup.string().required("Please select a course"),
  gender: yup.string().required("Please select a gender"),
  dob: yup.date().required("Date of birth is required"),
  city: yup.string().required("City is required"),
  country: yup.string().required("Country is required"),
  phone: yup.string().nullable(),
  education: yup.string().nullable(),
  address: yup.string().nullable(),
  state: yup.string().nullable(),
  zip: yup.string().matches(/^\d+$/, "Zip code must contain only numbers"),

})

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
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style = {{maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginLeft: "100px"}}>
      <h2 style = {{textAlign: "center", fontWeight: "bold"}}>Course Application</h2>

      <form onSubmit={formik.handleSubmit}>
        <input type = "text" name = "fullName" placeholder="Full name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullName} style = {{width: "100%", padding: "8px", marginBottom: "8px"}}/>
        {formik.touched.fullName && formik.errors.fullName && (
          <div style = {{color: "red"}}>{formik.errors.fullName}</div>
        )}

        <div style = {{display: "flex", gap: "10px", marginBottom: "8px"}}>
        <input type = "email" name = "email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} style = {{width: "48%", marginBottom: "8px", padding: "8px", marginRight: "'2%"}}/>
        <input type = "text" name = "phone" placeholder="Phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} style = {{width: "48%", marginBottom: "8px", padding: "8px", marginLeft:"12px"}}/>
        {formik.touched.email && formik.errors.email && (<div style = {{color: "red"}}>{formik.errors.email}</div> )}
        </div>

        <input type = "password" name = "password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} style = {{width: "100%", marginBottom: "8px", padding: "8px"}}/>
        {formik.touched.password && formik.errors.password && (
          <div style = {{color: "red"}}>{formik.errors.password}</div>
        )}

        <p>Which course are you applying for ?</p>
        <label>
          <input type = "radio" name = "course" placeholder="Course A" onChange={formik.handleChange}/> Course A
        </label>
        <br/>
        <label>
          <input type = "radio" name = "course" placeholder="Course B" onChange={formik.handleChange}/> Course B
        </label>
        <br/>
        <label>
          <input type = "radio" name = "course" placeholder="Course C" onChange={formik.handleChange}/> Course C
        </label>
        {formik.touched.course && formik.errors.course && (
          <div style = {{color: "red"}}>{formik.errors.course}</div>
        )}

        <div style = {{display: "flex", justifyContent: "space-between", margib: "10px 0"}}>
          <div>
            <input type = "date" name = "dob" onChange={formik.handleChange} value={formik.values.dob} style = {{padding: "6px"}}/> 
            {formik.touched.dob && formik.errors.dob && (
              <div style = {{color: "red"}}>{formik.errors.dob}</div>
            )}
          </div>

          <div>
            <label>
              <input type = "radio" name = "gender" placeholder="Male" onChange={formik.handleChange}/> Male
            </label>
            <label style = {{marginLeft: "15px"}}>
              <input type = "radio" name = "gender" placeholder="Female" onChange={formik.handleChange}/> Female
            </label>
            {formik.touched.gender && formik.errors.gender && (
              <div style = {{color: "red"}}>{formik.errors.gender}</div>
            )}
          </div>
        </div>

        <label>Education</label>
        <select name = "education" onChange = {formik.handleChange} value = {formik.values.education} style = {{width: "100%", padding: "8px", marginBottom: "8px"}}>
          <option value = "">Select</option>
          <option value = "School">School</option>
          <option value = "College">College</option>
          <option value = "University">University</option>
        </select>

        <textarea name = "address" placeholder="Address" onChange={formik.handleChange} value={formik.values.address} style = {{width: "100%", padding: "8px", marginBottom: "8px"}}/>

        <div style = {{display: "flex", gap: "10px", marginBottom: "8px"}}>
          <input type = "text" name = "city" placeholder="City" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} style = {{flexh: 1, padding: "8px"}}/>
          <input type = "text" name = "state" placeholder="State" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.state} style = {{flexh: 1, padding: "8px"}}/>
        </div>
        {formik.touched.city && formik.errors.city && (
          <div style = {{color: "red"}}>{formik.errors.city}</div>
        )}

        <div style = {{display: "flex", gap: "10px", marginBottom: "8px"}}>
          <input type = "text" name = "zip" placeholder="Zip Code" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zip} style = {{flexh: 1, padding: "8px"}}/>
          <select name = "country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} style = {{flex: 1, padding: "8px"}}>
            <option value = "">Country</option>
            <option value = "Kazakhstan">Kazakhstan</option>
            <option value = "USA">USA</option>
            <option value = "UK">UK</option>
          </select>
        </div>
        {formik.touched.country && formik.errors.country && (
          <div style = {{color: "red"}}>{formik.errors.country}</div>
        )}

        <button type="submit" style = {{width: "100%", backgroundColor: "green", color: "white", padding: "10px", fontSize: "16px", border: "none", borderRadius: "4px"}}>
          Submit
        </button>
      </form>
    </div>
  );
};