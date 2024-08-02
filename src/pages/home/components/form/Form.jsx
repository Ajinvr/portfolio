// src/Form.js
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    entry725759798: '',
    entry730614536: '',
    entry2084568391: ''
  });

  const [captchaToken, setCaptchaToken] = useState('');
  const [errors, setErrors] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate email field
    if (name === 'entry730614536') {
      if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Please enter a valid email address.'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: ''
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.email) {
      alert('Please fix the errors before submitting.');
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LdK1hwqAAAAAKbqm-h8FKrk6YT-i7whqBpBIOwd', { action: 'submit' }).then((token) => {
        setCaptchaToken(token);

        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdIUD8dLo1DUIBiwYIwhYP5ZenR-SjfO5reanvsikzh_7Pn-A/formResponse';

        const formBody = new URLSearchParams();
        formBody.append('entry.725759798', formData.entry725759798);
        formBody.append('entry.730614536', formData.entry730614536);
        formBody.append('entry.2084568391', formData.entry2084568391);
        formBody.append('g-recaptcha-response', token);

        fetch(formUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody.toString(),
        }).then(() => {
          setFormData({ entry725759798: '', entry730614536: '', entry2084568391: '' });
          setCaptchaToken('');
          alert('Form submitted successfully');
        }).catch((error) => {
          console.error('Error:', error);
          alert('Form submission failed');
        });
      });
    });
  };

  return (
    <div className='sm:px-20 px-5  md:px-40'>
      <div  className="w-100 mx-auto my-10 p-5 sm:p-10 bg-neon-green shadow-md rounded-lg">
        <h1 className="text-5xl sm:text-6xl font-Bebas-Neue">Get in Touch</h1>
        <p className='mb-5 '>If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas .</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black font-Bebas-Neue">Name</label>
            <input
              type="text"
              name="entry725759798"
              value={formData.entry725759798}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-Bebas-Neue">Email</label>
            <input
              type="email"
              name="entry730614536"
              value={formData.entry730614536}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-black font-Bebas-Neue">Message</label>
            <textarea
              type="text"
              name="entry2084568391"
              value={formData.entry2084568391}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
              required
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-Black-Blue text-neon-green px-3 py-2 rounded-md font-dm-sans"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
