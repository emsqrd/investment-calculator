export default function UserInput({ userInputValues, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInputValues.initialInvestment}
            onChange={(event) => {
              onInputChange('initialInvestment', event.target.value);
            }}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInputValues.annualInvestment}
            onChange={(event) => {
              onInputChange('annualInvestment', event.target.value);
            }}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInputValues.expectedReturn}
            onChange={(event) => {
              onInputChange('expectedReturn', event.target.value);
            }}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInputValues.duration}
            onChange={(event) => {
              onInputChange('duration', event.target.value);
            }}
          />
        </div>
      </div>
    </section>
  );
}
