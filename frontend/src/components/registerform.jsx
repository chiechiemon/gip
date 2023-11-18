// frontend/src/components/RegisterForm.jsx
import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/user/register', {
        username,
        password,
      });

      // Handle the response, e.g., display a success message or redirect the user
      console.log(response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
