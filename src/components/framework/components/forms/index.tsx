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
          <div className="row">
            <div className="l-sm-12 l-lg-6">
              <div className="input-field">
                <label htmlFor="names">Last name</label>
                <input
                  id="names"
                  type="text"
                  name="last_name "
                  placeholder="Last name"
                />
                <p className="help text-success">
                  This is a help text with success style
                </p>
              </div>
            </div>
            <div className="l-sm-12 l-lg-6">
              <div className="input-field">
                <label htmlFor="names">First name</label>
                <input
                  id="names"
                  type="text"
                  name="first_name "
                  placeholder="First name"
                />
              </div>
            </div>
            <div className="l-sm-12 l-lg-12">
              <div className="input-field">
                <label htmlFor="email">Your email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email..."
                />
                <p className="help text-error">
                  This is a help text with error style
                </p>
              </div>
            </div>
            <div className="l-sm-12 l-lg-12">
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <p className="help text-info">
                  Provind a strong <strong>password</strong>
                </p>
              </div>
            </div>
            <div className="l-sm-12 l-lg-12">
              <div className="input-field">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                />
              </div>
            </div>

            <div className="l-sm-12 l-lg-12">
              <button type="button" className="button primary">
                Submit
              </button>
              <button type="button" className="button bordered-light">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDButtonsDefault} />
      </DocLayout>
    </>
  );
};

export default Forms;
