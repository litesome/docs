import DocLayout from "../../../../layouts/Docs/index";
import CodeHighlighter from "../../../common/highlighter";

const MDButtonsDefault = `<button type='button' class='button primary'>Primary</button>
<button type='button' class='button secondary'>Secondary</button>
<button type='button' class='button success'>Success</button>
<button type='button' class='button error'>Error</button>
<button type='button' class='button info'>Info</button>
<button type='button' class='button light'>Light</button>
<button type='button' class='button dark'>Dark</button>`;

const Forms = () => {
  return (
    <>
      <DocLayout>
        <h1>Forms</h1>
        <div className="lead">
          All generic form control styles, options and custom elements
        </div>
        <div className="code-example">
          <div className="input-field">
            <label htmlFor="names">Your names</label>
            <input
              id="names"
              type="text"
              name="last_name "
              placeholder="Full names"
            />
            <p className="help text-success">This is a help text</p>
          </div>
          <div className="input-field">
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email..."
            />
            <p className="help text-error">This is a help text</p>
          </div>
          <div className="input-field">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" placeholder="Message..." />
          </div>
          <button type="button" className="button primary">
            Submit
          </button>
          <button type="button" className="button bordered-light">
            Cancel
          </button>
        </div>
        <CodeHighlighter code={MDButtonsDefault} />
      </DocLayout>
    </>
  );
};

export default Forms;
