import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditFormUser, GetSingleUser } from '../API/Api';
import { useNavigate, useParams } from 'react-router';

export default function EditComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const selector = useSelector(state => state.user.user);

  const initialState = {
    name: '',
    surname: '',
    age: '',
    mesag: '',
  };

  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    dispatch(GetSingleUser(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (selector) {
      setFormState({ ...selector });
    }
  }, [selector]);

  const setFunction = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sentForm = (e) => {
    e.preventDefault();
    dispatch(EditFormUser(formState, params.id));
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
          <input
            key="name"
            id="name"
            type="text"
            name="name"
            value={formState?.name}
            onChange={setFunction}
          />
          <label htmlFor="name" style={{ marginLeft: '10px' }}>
            AD:
          </label>
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <input
            key="surname"
            id="surname"
            type="text"
            name="surname"
            value={formState?.surname}
            onChange={setFunction}
          />
          <label htmlFor="surname" style={{ marginLeft: '10px' }}>
            Soyad:
          </label>
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <input
            key="age"
            id="age"
            type="number"
            name="age"
            value={formState?.age}
            onChange={setFunction}
          />
          <label htmlFor="age" style={{ marginLeft: '10px' }}>
            Age:
          </label>
        </div>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <textarea
            key="message"
            id="message"
            type="textarea"
            name="mesag"
            value={formState?.mesag}
            onChange={setFunction}
          />
          <label htmlFor="message" style={{ marginLeft: '10px' }}>
            Mesaj:
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
