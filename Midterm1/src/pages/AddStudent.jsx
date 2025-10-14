import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const schema=yup.object({
    fullName:yup.string().required("Full name should be at least 2 characters"),
    group: yup.string().required("Please select a group"),
    grade:yup.string().matches(0>100, "Grade should be only numbers"),
})

export const FormikFormHook = () => {
    const formik = useFormik({
      initialValues: {
        fullName: "",
        group: "",
        grade: "",
      }, 
      validationSchema: schema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

return (
    <div style = {{maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginLeft: "50px"}}>
      <h2 style = {{textAlign: "center", fontWeight: "bold"}}>Add Student</h2>

      <form onSubmit={formik.handleSubmit}>
        <input type = "text" name = "fullName" placeholder="Full name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullName} style = {{width: "100%", padding: "8px", marginBottom: "8px"}}/>
        {formik.touched.fullName && formik.errors.fullName && (<div style = {{color: "red"}}>{formik.errors.fullName}</div>)}

          <div>
            <label>
              <input type = "radio" name = "group" placeholder="A group" onChange={formik.handleChange}/> A group
            </label>
            <label style = {{marginLeft: "15px"}}>
              <input type = "radio" name = "group" placeholder="B group" onChange={formik.handleChange}/> B group
            </label>
            {formik.touched.group && formik.errors.group && (<div style = {{color: "red"}}>{formik.errors.group}</div>)}
          </div>

        <div style = {{display: "flex", gap: "10px", marginBottom: "8px"}}>
          <input type = "text" name = "grade" placeholder="Grade" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.grade} style = {{flexh: 1, padding: "8px"}}/>
        </div>

        <button type="submit" style = {{width: "100%", backgroundColor: "green", color: "white", padding: "10px", fontSize: "16px", border: "none", borderRadius: "4px"}}>
          Add Student
        </button>
      </form>
    </div>
  );
};
