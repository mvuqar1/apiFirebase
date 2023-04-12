import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormInputs } from '../API/Api';
import { useNavigate } from 'react-router';

export default function FormComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    name: '',
    surname: '',
    age: '',
    mesag: '',
  };

  const [formState, setFormState] = useState(initialState);

  const setFunction = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sentForm = (e) => {
    e.preventDefault();
    dispatch(addFormInputs(formState));
    setFormState(initialState);
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form
        onSubmit={sentForm}
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '500px' }}
      >
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label htmlFor="name" style={{ width: '100px' }}>
            AD:
          </label>
          <input
            key="name"
            id="name"
            type="text"
            name="name"
            value={formState?.name}
            onChange={setFunction}
            style={{ flexGrow: 1, marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label htmlFor="surname" style={{ width: '100px' }}>
            Soyad:
          </label>
          <input
            key="surname"
            id="surname"
            type="text"
            name="surname"
            value={formState?.surname}
            onChange={setFunction}
            style={{ flexGrow: 1, marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label htmlFor="age" style={{ width: '100px' }}>
            Age:
          </label>
          <input
            key="age"
            id="age"
            type="number"
            name="age"
            value={formState?.age}
            onChange={setFunction}
            style={{ flexGrow: 1, marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <label htmlFor="message" style={{ width: '100px' }}>
            Mesaj:
          </label>
          <textarea
            key="message"
            id="message"
            type="textarea"
            name="mesag"
            value={formState?.mesag}
            onChange={setFunction}
            style={{ flexGrow: 1, marginLeft: '10px' }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
