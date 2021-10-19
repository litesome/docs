import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDButtonsDefault = `<div className="button-group pull-left"><button type='button' class="button">Primary</button>`;
const MDButtons = `<button type="button" class="button">Get started</button>
<button type="button" class="button outline">Outline</button>
<button type="button" class="button secondary">Secondary</button>
<button type="button" class="button danger">Danger</button>
<button type="button" class="button" disabled>Disabled</button></div>`;
const MDButtonWithSpinners = `<button type="button" class="button"><span class="loading" />Get started</button>
<button type="button" class="button outline"><span class="loading" />Outline</button>
<button type="button" class="button secondary"><span class="loading" />Get started</button>
<button type="button" class="button danger"><span class="loading" />Danger</button>
<button type="button" class="button" disabled><span class="loading" />Disabled</button>`;
const MDButtonBlock = `<button type="button" class="button button-block">Block button</button>`;
const MDButtonSize = `<button type="button" class="button primary button-lg">Large Button</button>
<button type="button" class="button primary">Default size</button>
<button type="button" class="button primary button-sm">Small Button</button>`;
const MDButtonsWithIcons = `<button type="button" class="button"><i class="i-message" /> Message</button>
<button type="button" class="button outline"><i class="i-check" /> Confirm action</button>
<button type="button" class="button secondary"><i class="i-check" /> Confirm action</button>
<button type="button" class="button danger"><i class="i-play" /> Play song</button>`;

const Buttons = () => {
  return (
    <>
      <DocLayout>
        <h1>Buttons</h1>
        <div className="lead">
          Call-to-action buttons in different style and sizes
        </div>
        <div>
          By default, a button without any class takes primary background color
          of the platform
        </div>
        <button type="button" className="button">
          Submit
        </button>
        <a href="/" className="button">
          Submit
        </a>
        <CodeHighlighter code={MDButtonsDefault} />
        <h2>Button variants</h2>
        <div className="box">
          <div className="code-example">
            <div className="button-group pull-left">
              <button type="button" className="button">
                Get started
              </button>
              <button type="button" className="button outline ml-none">
                Outline
              </button>
              <button type="button" className="button secondary ml-none">
                Secondary
              </button>
              <button type="button" className="button danger">
                Danger
              </button>
              <button type="button" className="button" disabled>
                Disabled
              </button>
              <button type="button" className="button outline" disabled>
                Disabled
              </button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="code-example">
            <div className="button-group pull-right">
              <button type="button" className="button">
                Get started
              </button>
              <button type="button" className="button outline">
                Outline
              </button>
              <button type="button" className="button secondary">
                Secondary
              </button>
              <button type="button" className="button danger">
                Danger
              </button>
              <button type="button" className="button" disabled>
                Disabled
              </button>
              <button type="button" className="button outline" disabled>
                Disabled
              </button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="code-example">
            <div className="button-group pull-left">
              <a href="/" className="button">
                Get started
              </a>
              <a href="/" className="button outline">
                Outline
              </a>
              <a href="/" className="button secondary">
                Secondary
              </a>
              <a href="/" className="button danger">
                Danger
              </a>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDButtons} />
        <h2>Button with spinners</h2>
        <div className="box">
          <div className="code-example">
            <div className="button-group pull-left">
              <button type="button" className="button">
                <span className="loading" /> Get started
              </button>
              <button type="button" className="button outline">
                <span className="loading" />
                Outline
              </button>
              <button type="button" className="button secondary">
                <span className="loading" /> Get started
              </button>
              <button type="button" className="button danger">
                <span className="loading" />
                Danger
              </button>
              <button type="button" className="button" disabled>
                <span className="loading" />
                Disabled
              </button>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDButtonWithSpinners} />
        <div className="alert info">
          Disabled button can never accommodate loading state
        </div>
        <h3>Sizes of buttons</h3>
        <div className="box">
          <div className="code-example">
            <div className="button-group pull-left">
              <button type="button" className="button button primary button-lg">
                Large Button
              </button>
              <button type="button" className="button button primary">
                Default size
              </button>
              <button type="button" className="button button primary button-sm">
                Small Button
              </button>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDButtonSize} />
        <h3>Button block</h3>
        <div className="box">
          <div className="code-example">
            <button type="button" className="button button-block">
              Block button
            </button>
          </div>
        </div>
        <CodeHighlighter code={MDButtonBlock} />
        <h3>Buttons with icons</h3>
        <div className="box">
          <div className="code-example">
            <div className="button-group pull-left">
              <button type="button" className="button">
                <i className="i-message" />
                Message
              </button>
              <button type="button" className="button outline">
                <i className="i-check" />
                Confirm action
              </button>
              <button type="button" className="button secondary">
                <i className="i-check" />
                Confirm action
              </button>
              <button type="button" className="button danger">
                <i className="i-play" />
                Play song
              </button>
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDButtonsWithIcons} />
      </DocLayout>
    </>
  );
};

export default Buttons;
