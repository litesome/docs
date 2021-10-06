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
const MDFormInputSuccess = `<div class="input-field input-success">
  <label htmlFor="password">Password</label>
  <input
    id="password"
    type="password"
    name="password "
    placeholder="Your password"
  />
  <p class="help text-success">Your password is strong</p>
</div>`;
const MDFormInputInfo = `<div class="input-field input-info">
  <label htmlFor="password">Password</label>
  <input
    id="password"
    type="password"
    name="password "
    placeholder="Your password"
  />
  <p class="help text-info">Provind a strong password</p>
</div>`;
const MDFormInputDanger = `<div class="input-field input-danger">
  <label htmlFor="password">Password</label>
  <input
    id="password"
    type="password"
    name="password "
    placeholder="Your password"
  />
  <p class="help text-danger">Your password is week</p>
</div>`;
const MDFormCheckbox = `<div class="checkbox">
  <input id="one" type="checkbox" name="cb1" />
  <label htmlFor="one">Hey! Check me too.</label>
</div>
<div class="checkbox">
  <input id="two" type="checkbox" name="cb2" />
  <label htmlFor="two">Hey! Check me too.</label>
</div>
<div class="checkbox">
  <input id="three" type="checkbox" disabled name="cb3" />
  <label htmlFor="three">Disabled</label>
</div>`;
const MDFormRadio = `<div class="radiobox">
  <input id="male" type="radio" name="cb1" checked />
  <label htmlFor="male">Male</label>
</div>
<div class="radiobox">
  <input id="famale" type="radio" name="cb1" />
  <label htmlFor="famale">Famale</label>
</div>
<div class="radiobox">
  <input id="disabled" type="radio" disabled name="cb1" />
  <label htmlFor="disabled">Disabled</label>
</div>`;
const MDFormSwitch = `<div class="switch">
  <input id="switch" checked type="checkbox" class="switch" />
  <label htmlFor="switch">Switch</label>
</div>
<div class="switch">
  <input
    id="disabledSwitch"
    type="checkbox"
    disabled
    class="switch"
  />
  <label htmlFor="disabledSwitch">Disabled switch</label>
</div>`;

const Forms = () => {
  return (
    <>
      <DocLayout>
        <h1>Forms</h1>
        <div className="lead">
          All generic form control styles, options and custom elements
        </div>
        <div className="box">
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
        </div>
        <CodeHighlighter code={MDFormInput} />
        <h2>General form</h2>
        <div className="code-example">
          <div className="box">
            <form>
              <div className="row">
                <div className="l-sm-12 l-lg-6">
                  <div className="input-field input-success">
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
                  <div className="input-field input-danger">
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
                  <div className="input-field input-info">
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
                  <button type="button">
                    Submit
                  </button>
                  <button type="button" className="secondary">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <CodeHighlighter code={MDFormGeneral} />
        <h2>Input messages</h2>
        <h3>Success message</h3>
        <div className="box">
          <div className="code-example">
            <div className="input-field input-success">
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
        </div>
        <CodeHighlighter code={MDFormInputSuccess} />
        <h3>Error message</h3>
        <div className="box">
          <div className="code-example">
            <div className="input-field input-danger">
              <label htmlFor="names">Last name</label>
              <input
                id="names"
                type="text"
                name="last_name "
                placeholder="Last name"
              />
              <p className="help text-danger">Something went wrong</p>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDFormInputInfo} />
        <h3>Info message</h3>
        <div className="box">
          <div className="code-example">
            <div className="input-field input-info">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password "
                placeholder="Your password"
              />
              <p className="help text-info">Provind a strong password</p>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDFormInputDanger} />
        <h2>Checkbox</h2>
        <div className="box">
          <div className="code-example">
            <div className="checkbox">
              <input id="one" type="checkbox" name="cb1" />
              <label htmlFor="one">Hey! Check me too.</label>
            </div>
            <div className="checkbox">
              <input id="two" type="checkbox" name="cb2" />
              <label htmlFor="two">Hey! Check me too.</label>
            </div>
            <div className="checkbox">
              <input id="three" type="checkbox" disabled name="cb3" />
              <label htmlFor="three">Disabled</label>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDFormCheckbox} />
        <h2>Radio</h2>
        <div className="box">
          <div className="code-example">
            <div className="radiobox">
              <input id="male" type="radio" name="cb1" checked />
              <label htmlFor="male">Male</label>
            </div>
            <div className="radiobox">
              <input id="famale" type="radio" name="cb1" />
              <label htmlFor="famale">Famale</label>
            </div>
            <div className="radiobox">
              <input id="disabled" type="radio" disabled name="cb1" />
              <label htmlFor="disabled">Disabled</label>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDFormRadio} />
        <div className="box">
          <h2>Switch</h2>
          <div className="code-example">
            <div className="switch">
              <input id="switch" checked type="checkbox" className="switch" />
              <label htmlFor="switch">Switch</label>
            </div>
            <div className="switch">
              <input
                id="disabledSwitch"
                type="checkbox"
                disabled
                className="switch"
              />
              <label htmlFor="disabledSwitch">Disabled switch</label>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDFormSwitch} />
        <h2>Form select</h2>
        <div className="box">
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
          <div className="input-select">
            <select disabled name="format" id="format">
              <option selected>Select option</option>
              <option value="pdf">All generic form control styles</option>
              <option value="txt">txt</option>
              <option value="epub">ePub</option>
              <option value="fb2">fb2</option>
              <option value="mobi">mobi</option>
            </select>
          </div>
        </div>
      </DocLayout>
    </>
  );
};

export default Forms;
