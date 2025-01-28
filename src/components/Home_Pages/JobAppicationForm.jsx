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
    <div className="max-w-2xl mx-auto p-4">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Job Application Form</h2>

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
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Field
                  type="text"
                  name="fullName"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Field
                  type="tel"
                  name="phone"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <Field
                  as="select"
                  name="position"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a position</option>
                  {positions.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="position"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience (in years)
                </label>
                <Field
                  type="number"
                  name="experience"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter years of experience"
                />
                <ErrorMessage
                  name="experience"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => setFieldValue('resume', event.currentTarget.files[0])}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
                {values.resume && (
                  <p className="mt-2 text-sm text-gray-600">
                    Uploaded File: <strong>{values.resume.name}</strong>
                  </p>
                )}
                <ErrorMessage
                  name="resume"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default JobApplicationForm;
