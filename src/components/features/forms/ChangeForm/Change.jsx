//Change.jsx
import { useState } from 'react';
import '../ChangeForm/Change.scss';
import '@components/styles/Button.scss';

export default function Change({ onChange, onSubmit }) {
  const [lastChangeDateTime, setLastChangeDateTime] = useState(null);

  const handleButtonClick = () => {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString();
    setLastChangeDateTime(formattedDateTime);
    onChange('change', formattedDateTime);
    onSubmit({ lastChangeDateTime: formattedDateTime });
  };

  return (
    <div className='change'>
      <button className='change__button btn' type='button' onClick={handleButtonClick}>
        Изменить
      </button>
      {lastChangeDateTime && (
        <p className='change__date description'>последние изменения {lastChangeDateTime}</p>
      )}
    </div>
  );
}
