import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDFormGeneral = `<form>
<div class="row">
  <div class="l-sm-12 l-lg-6">
    <div class="input-field">
      <label htmlFor="names">Last name</label>
      <input
        id="names"
        type="text"
        name="last_name "
        placeholder="Last name"
      />
      <p class="help text-success">
        This is a help text with success style
      </p>
    </div>
  </div>
  <div class="l-sm-12 l-lg-6">
    <div class="input-field">
      <label htmlFor="names">First name</label>
      <input
        id="names"
        type="text"
        name="first_name "
        placeholder="First name"
      />
    </div>
  </div>
  <div class="l-sm-12 l-lg-12">
    <div class="input-field">
      <label htmlFor="email">Your email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your email..."
      />
      <p class="help text-danger">
        This is a help text with danger style
      </p>
    </div>
  </div>
  <div class="l-sm-12 l-lg-12">
    <div class="input-field">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <p class="help text-info">
        Provind a strong <strong>password</strong>
      </p>
    </div>
  </div>
  <div class="l-sm-12 l-lg-12">
    <div class="input-field">
      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Message..."
      />
    </div>
  </div>
  <div class="l-sm-12 l-lg-12">
    <button type="button" class="button primary">
      Submit
    </button>
    <button type="button" class="button bordered-light">
      Cancel
    </button>
  </div>
</div>
</form>`;
const MDFormInput = `<div class="input-field">
  <label htmlFor="full_names">Your full names </label>
  <input
    id="full_names"
    type="text"
    name="full_names "
    placeholder="Full names"
  />
</div>`;

const Forms = () => {
  return (
    <>
      <DocLayout>
        <h1>Forms</h1>
        <div className="lead">
          All generic form control styles, options and custom elements
        </div>
        <div className="row">
          <div className="l-sm-12 l-lg-12">
            <h2>Form input</h2>
            <div className="input-field">
              <label htmlFor="full_names">Your full names </label>
              <input
                id="full_names"
                type="text"
                name="full_names "
                placeholder="Full names"
              />
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDFormInput} />
        <h2>General form</h2>
        <div className="code-example">
          <form>
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
                  <p className="help text-danger">
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
          </form>
        </div>
        <CodeHighlighter code={MDFormGeneral} />
        <h2>Checkbox</h2>
        <div className="checkbox">
          <input id="two" type="checkbox" name="cb1" />
          <label htmlFor="two">Hey! Check me too.</label>
        </div>
        <div className="checkbox">
          <input id="three" type="checkbox" name="cb3" />
          <label htmlFor="three">Hey! Check me too.</label>
        </div>
        <h2>Radio</h2>
        <div className="radiobox">
          <label htmlFor="male">
            <input id="male" type="radio" name="cb1" checked />
            Male
          </label>
        </div>
        <div className="radiobox">
          <label htmlFor="famale">
            <input id="famale" type="radio" name="cb1" />
            Famale
          </label>
        </div>
        <h2>Switch</h2>
        <div className="radiobox">
          <label htmlFor="physics">
            <input id="physics" type="radio" name="cb2" />
            Physics
          </label>
        </div>
        <div className="radiobox">
          <label htmlFor="math">
            <input id="math" type="radio" name="cb2" checked />
            Math
          </label>
        </div>
        <h2>Form select</h2>
        <div className="input-select">
          <select name="format" id="format">
            <option selected>Select option</option>
            <option value="pdf">All generic form control styles</option>
            <option value="txt">txt</option>
            <option value="epub">ePub</option>
            <option value="fb2">fb2</option>
            <option value="mobi">mobi</option>
          </select>
        </div>
      </DocLayout>
    </>
  );
};

export default Forms;
