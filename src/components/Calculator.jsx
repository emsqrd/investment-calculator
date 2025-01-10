import UserInput from './UserInput';

export default function Calculator() {
  return (
    <section id="user-input" className="input-group">
      <UserInput inputLabel="Initial Investment"></UserInput>
      <UserInput inputLabel="Annual Investment"></UserInput>
      <UserInput inputLabel="Expected Return"></UserInput>
      <UserInput inputLabel="Duration"></UserInput>
    </section>
  );
}
