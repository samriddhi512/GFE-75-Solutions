import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="POST"
      className="form"
      onSubmit={submitForm}
    >
      <div className="input-container">
        <label htmlFor="nameid">Name</label>
        <input id="nameid" type="text" name="name" />
      </div>

      <div className="input-container">
        <label htmlFor="emailid">Email</label>
        <input type="email" name="email" id="emailid" />
      </div>

      <div className="input-container">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" cols="30"></textarea>
      </div>

      <button type="submit"> Send </button>
    </form>
  );
}
