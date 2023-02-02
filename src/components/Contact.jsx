import React, {useState} from 'react'
import { contact } from '../constants/index'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Form Data: ", formData);
  };


  return (
  <div className='w-1/2 flex flex-col px-[1vw] bg-secondary mt-[6vh] '>
    <div className='scale-[0.8]'>
      <h1 className='text-white font-bold text-5xl font-oswald my-4 mb-[5vh]'>{contact[0].title}</h1>
      <p className='text-white font-semibold text-lg font-oswald'>{contact[0].content[0].content}</p>
      <br />
      <p className='text-white font-semibold text-lg font-oswald'>{contact[0].content[0].goodbyes}</p>
      <br />
      <p className='text-white font-semibold text-lg font-oswald'>{contact[0].content[0].name}</p>
    </div>
    <div className='ml-[4.2vw]'>
      <h2 className='text-white font-semibold text-lg font-oswald'><span className='text-third'>Email:</span> <a href="mailto:perezcosciatomas@gmail.com">perezcosciatomas@gmail.com</a></h2>
      <h2 className='text-white font-semibold text-lg font-oswald'><span className='text-third'>LinkedIn:</span> <a href="https://www.linkedin.com/in/tomas-perez-coscia/">tomas-perez-coscia</a></h2>
    </div>
    <div className='flex flex-col'>
      <form
        className="bg-primary p-6 rounded-lg shadow-md flex flex-col scale-[0.75] overscroll-contain"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium text-gray-700 mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium text-gray-700 mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="border border-gray-400 p-2 w-full"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-third text-white font-semibold py-2 px-4 rounded hover:bg-gray-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}


export default Contact