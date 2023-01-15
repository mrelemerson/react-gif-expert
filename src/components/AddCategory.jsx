import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const value = inputValue.trim();

    if (value.length <= 1) return;

    onNewCategory(value);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
}
