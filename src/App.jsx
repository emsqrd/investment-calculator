import { useState } from 'react';

import Header from './components/Header';
import Result from './components/Result';
import UserInput from './components/UserInput';

const INITIAL_INVESTMENT_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputValues, setUserInputValues] = useState(INITIAL_INVESTMENT_VALUES);

  const inputIsValid = userInputValues.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInputValues((prevUserInputs) => {
      return {
        ...prevUserInputs,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <UserInput userInputValues={userInputValues} onInputChange={handleInputChange} />
        {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
        {inputIsValid && <Result results={userInputValues} />}
      </main>
    </div>
  );
}

export default App;
