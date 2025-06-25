import React from 'react'
import axios from 'axios';


function Form() {

  function handleSubmit(e) {

    e.preventDefault();
    const userame = e.target.username.value;
    const email = e.target.email.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const feedback = e.target.feedback.value;
    
    const data = {
      "username": userame,
      "email": email,
      "title": title,
      "category": category,
      "feedback": feedback
    }

    axios.post('http://localhost:3000/feedback', data);
    e.target.reset();

    alert('Feedback submitted successfully!')

  }

  return (
    <div className="h-screen bg-yellow-100 flex items-center justify-center">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6" onSubmit={handleSubmit}> 
        <h2 className="text-3xl font-bold text-gray-800 text-center">User Feedback System</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            required
            placeholder="username"
            name='username'
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            required
            type="email"
            name='email'
            placeholder="you@example.com"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            required
            placeholder="Enter your title here"
            name='title'
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
  <label className="block text-sm font-medium text-gray-700">
    Category
  </label>
  <select
    defaultValue=""
    required
    name='category'
    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-700"
  >
    <option value="" disabled>Select a category</option>
    <option value="Suggestion">Suggestion</option>
    <option value="Bug Report">Bug Report</option>
    <option value="Feature Request">Feature Request</option>
    <option value="General Feedback">General Feedback</option>
    <option value="Other">Other</option>
  </select>
</div>

      <div>
          <label className="block text-sm font-medium text-gray-700">Feedback</label>
          <textarea
           required
           name="feedback" placeholder='Enter your feedback here'
           className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
           ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form