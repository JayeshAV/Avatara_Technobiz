import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FAQContactSection() {
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
      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyn6mRWwUjUVL5tHd48iDIIGtF7_CU7rP1JioIoC6YWyyZ4o9uivbNcjDoDhNBHuMdRoQ/exec"; // Replace with your actual URL

      fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
       
        .then((data) => {
          if (data.success) {
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

  const faqData = [
    {
      id: "01",
      question: "What services does your IT company provide?",
      answer:
        "Our company specializes in web development, mobile app development, cloud solutions, and custom software solutions.",
    },
    {
      id: "02",
      question: "How long does it take to build a website?",
      answer:
        "The timeline varies depending on the complexity of the project. Typically, it takes 4–6 weeks for a basic website.",
    },
    {
      id: "03",
      question: "Do you offer post-launch support?",
      answer:
        "Yes, we offer ongoing maintenance and support to ensure your platform runs smoothly.",
    },
    {
      id: "04",
      question: "What industries do you specialize in?",
      answer:
        "We specialize in providing web solutions for tech startups, e-commerce, and small businesses.",
    },
  ];

  return (
    <section className="w-[83%] mx-auto mt-10 flex flex-col lg:flex-row gap-10">
      {/* FAQ Section */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">FAQs</h2>
        <div className="flex flex-col gap-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg shadow"
            >
              <div
                onClick={() => toggleAccordion(item.id)}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-gray-700">
                    {item.id}
                  </span>
                  <p className="text-gray-600">{item.question}</p>
                </div>
                <i
                  className={`fa-solid ${
                    activeQuestion === item.id
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  } text-gray-400`}
                ></i>
              </div>
              {activeQuestion === item.id && (
                <div className="p-4 bg-gray-50 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <a href="#contact">
          <button className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
            More Questions?
          </button>
        </a>
      </div>

      {/* Contact Form Section */}
      
    </section>
  );
}
