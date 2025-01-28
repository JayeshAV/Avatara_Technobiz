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
    <div className="w-full max-w-lg px-4 py-6 m-auto">
      <label
        htmlFor="name"
        className="block m-2 text-2xl font-medium text-center text-gray-700"
      >
        Request A Quote
      </label>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full p-6 bg-white rounded-lg shadow-md">
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="w-full p-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="mt-1 text-xs text-red-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="example@gmail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-1 text-xs text-red-500"
            />
          </div>

          {/* Service Field */}
          <div className="mb-4">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Service
            </label>
            <Field
              as="select"
              id="service"
              name="service"
              className="w-full p-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a service</option>
              <option value="service1">Ai Development</option>
              <option value="service2">Cloud Services</option>
              <option value="service3">Web Development</option>
              <option value="service4">Apps Development</option>
              <option value="service5">SEO Optimization</option>
            </Field>
            <ErrorMessage
              name="service"
              component="div"
              className="mt-1 text-xs text-red-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="mt-1 text-xs text-red-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 ${
              isSubmitting
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded`}
          >
            {isSubmitting ? "Submitting..." : "Request A Quote"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Home_Form;
