import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().trim().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Phone number must contain only numbers')
    .required('Phone number is required'),
  position: Yup.string().required('Please select a position'),
  experience: Yup.number()
    .required('Experience is required')
    .min(0, 'Experience cannot be negative'),
  resume: Yup.mixed().required('Resume is required'),
});

const positions = [
  'Python Developer',
  'React.js Developer',
  'Node.js Developer',
  'React Native Developer',
  'Web Designer',
  'BDE',
];

const JobApplicationForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const googleScriptUrl =
      'https://script.google.com/macros/s/AKfycbzd2EC6x1V7-9afEdmEtga082ptkjApVp5OgWRFqrgPd-4CIwPDgQhczQL1E_JRXdWE/exec';

    const resumeFile = values.resume;
    const reader = new FileReader();

    reader.onloadend = () => {
      const resumeBase64 = reader.result?.split(',')[1]; // Safe check for `reader.result`

      if (resumeBase64) {
        const formData = new URLSearchParams();
        formData.append('fullName', values.fullName);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('position', values.position);
        formData.append('experience', values.experience);
        formData.append('resume', resumeBase64);

        fetch(googleScriptUrl, {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            setSubmitting(false);
            if (response.ok) {
              alert('Form submitted successfully!');
              resetForm();
            } else {
              alert('There was an error submitting the form.');
            }
          })
          .catch((error) => {
            setSubmitting(false);
            console.error('Error:', error);
            alert('There was an error submitting the form.');
          });
      } else {
        setSubmitting(false);
        alert('Error processing the resume file.');
      }
    };

    reader.onerror = () => {
      setSubmitting(false);
      alert('Error reading the resume file.');
    };

    reader.readAsDataURL(resumeFile); // Start reading the file asynchronously
  };
  
  return (
    <div className="container-fluid d-flex justify-content-center ">
    <div className=" bg-white rounded ">
      <h2 className="text-center mb-4 fw-semibold">Job Application Form</h2>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          resume: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="row g-4">
            {/* Full Name */}
            <div className="col-md-12">
              <label className="form-label">Full Name</label>
              <Field
                type="text"
                name="fullName"
                className="form-control"
                placeholder="Enter your full name"
                style={{ backgroundColor: "#EEF9FF" }}
              />
              <ErrorMessage name="fullName" component="p" className="text-danger small" />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                style={{ backgroundColor: "#EEF9FF" }}
              />
              <ErrorMessage name="email" component="p" className="text-danger small" />
            </div>

            {/* Phone Number */}
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <Field
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number"
                style={{ backgroundColor: "#EEF9FF" }}
              />
              <ErrorMessage name="phone" component="p" className="text-danger small" />
            </div>

            {/* Position */}
            <div className="col-md-12">
              <label className="form-label">Position</label>
              <Field as="select" name="position" className="form-select" style={{ backgroundColor: "#EEF9FF" }}>
                <option value="">Select a position</option>
                {positions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="position" component="p" className="text-danger small" />
            </div>

            {/* Experience */}
            <div className="col-md-6">
              <label className="form-label">Experience (in years)</label>
              <Field
                type="number"
                name="experience"
                className="form-control"
                placeholder="Enter years of experience"
                style={{ backgroundColor: "#EEF9FF" }}
              />
              <ErrorMessage name="experience" component="p" className="text-danger small" />
            </div>

            {/* Resume Upload */}
            <div className="col-md-6">
              <label className="form-label">Upload Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={(event) => setFieldValue("resume", event.currentTarget.files[0])}
                className="form-control"
                style={{ backgroundColor: "#EEF9FF" }}
              />
              {values.resume && (
                <p className="mt-2 small text-muted">
                  Uploaded File: <strong>{values.resume.name}</strong>
                </p>
              )}
              <ErrorMessage name="resume" component="p" className="text-danger small" />
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary w-100 ${isSubmitting ? "disabled" : ""}`}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  );
};

export default JobApplicationForm;
