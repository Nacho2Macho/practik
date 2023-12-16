import './App.scss';
import '@components/styles/Row.scss';
import '@components/styles/Label.scss';
import '@components/styles/Title.scss';
import '@components/styles/Input.scss';

import FormContainer from './components/features/forms/AllDataFromForms/FormContainer';

function App() {
  return (
    <div className='wrapper'>
      <FormContainer />
    </div>
  );
}

export default App;
