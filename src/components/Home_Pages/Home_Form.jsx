import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Home_Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must have at least 3 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    service: Yup.string().required("Please select a service"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must have at least 10 characters"),
  });

  const initialValues = {
    name: "",
    email: "",
    service: "",
    message: "",
  };

  const googleScriptUrl =
    "https://script.google.com/macros/s/AKfycbyiR1RTsfXghmJpaivG3bVTG6HfDjnA1pOjCzZk_0R8XQvi4TCv2Oscq5cb58AoNhFi/exec";

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitting(true);

    const formData = new URLSearchParams();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("service", values.service);
    formData.append("message", values.message);

    fetch(googleScriptUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setIsSubmitting(false);
        if (response.ok || response.status === 200) {
          alert("Form submitted successfully!");
          resetForm();
        } else {
          alert("There was an error submitting the form.");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Error:", error);
        alert("There was an error submitting the form.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div
      className="w-full max-w-md p-6 rounded-lg shadow-md"
    
    >
      <h2 className="text-center text-gray font-bold mb-4" style={{color:'grey',fontWeight:'normal',fontSize:'25px'}}>
        Request A Quote
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full bg-white p-5 rounded-lg">
            {/* Name Field */}
        
            <div className="mb-3">
              <Field
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full pt-3  pb-3 p-2 border rounded-md bg-gray-100 rounded-md"
                style={{backgroundColor:'#EEF9FF',width:'100%'}}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <Field
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full pt-3  pb-3 p-25 border rounded-md bg-gray-100"
                style={{backgroundColor:'#EEF9FF',width:'100%'}}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
<br />
            {/* Service Field */}
            <div className="mb-3">
              <Field
                as="select"
                name="service"
                className=" pt-3  pb-3 p-2 border rounded-md bg-gray-100"
                style={{backgroundColor:'#EEF9FF',width:'100%'}}
              >
                <option value="">Select A Service</option>
                <option value="service1">AI Development</option>
                <option value="service2">Cloud Services</option>
                <option value="service3">Web Development</option>
                <option value="service4">Apps Development</option>
                <option value="service5">SEO Optimization</option>
              </Field>
              <ErrorMessage
                name="service"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
<br />
            {/* Message Field */}
            <div className="mb-3">
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full pt-3  pb-3 p-2 border rounded-md bg-gray-100"
                style={{backgroundColor:'#EEF9FF',width:'100%'}}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full  text-white py-3 rounded-md font-bold  transition border-none"
              style={{backgroundColor:'#03A9F4',border:'none'}}
            >
              {isSubmitting ? "Submitting..." : "Request A Quote"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  );
};

export default Home_Form;
