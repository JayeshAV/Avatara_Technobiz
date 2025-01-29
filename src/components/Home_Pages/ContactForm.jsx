import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

 const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  },
  validationSchema: Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    projectDetails: Yup.string().required("Project details are required"),
  }),
  onSubmit: (values, { resetForm }) => {
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbxqybIxhBZSHnFYxAh_J43gxsLq1vJMYypLjK24mCZsgIfoQ2mWTUrS7_9uHJJIAKlr7Q/exec"; 
    
    // Sending data as JSON
    fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to application/json
      },
      body: JSON.stringify(values),  // Send form data as JSON
    })
      .then((response) => response.json())  // Parse the JSON response
      .then((data) => {
        if (data.status === "success") {
          alert("Form submitted successfully!");
          resetForm();
        } else {
          alert("Failed to submit the form.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting the form.");
      });
  },
});


  return (
    <div className="container mx-auto p-4">
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Name"
            style={{ width: "90%" }}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            style={{ width: "90%" }}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            placeholder="Phone Number"
            style={{ width: "90%" }}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </div>

        <div className="mb-4">
          <textarea
            id="projectDetails"
            name="projectDetails"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.projectDetails}
            placeholder="Project Details"
            style={{ width: "90%" }}
          />
          {formik.touched.projectDetails && formik.errors.projectDetails && (
            <div className="text-red-500 text-sm">{formik.errors.projectDetails}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white rounded-md hover:bg-blue-600"
          style={{ backgroundColor: "#06A3DA", border: "none" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
