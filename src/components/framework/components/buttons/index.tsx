import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDButtonsDefault = `<button type='button'>Primary</button>`;
const MDButtons = `<button type="button">Get started</button>
<button type="button" class="outline">Outline</button>
<button type="button" class="secondary">Secondary</button>
<button type="button" class="danger">Danger</button>
<button type="button" disabled>Disabled</button>`;
const MDButtonWithSpinners = `<button type="button"><span class="loading" />Get started</button>
<button type="button" class="outline"><span class="loading" />Outline</button>
<button type="button" class="secondary"><span class="loading" />Get started</button>
<button type="button" class="danger"><span class="loading" />Danger</button>
<button type="button" disabled><span class="loading" />Disabled</button>`;
const MDButtonBlock = `<button type="button" class="button-block">Block button</button>`;
const MDButtonSize = `<button type="button" class="button primary button-lg">Large Button</button>
<button type="button" class="button primary">Default size</button>
<button type="button" class="button primary button-sm">Small Button</button>`;
const MDButtonsWithIcons = `<button type="button"><i class="i-message" /> Message</button>
<button type="button" class="outline"><i class="i-check" /> Confirm action</button>
<button type="button" class="secondary"><i class="i-check" /> Confirm action</button>
<button type="button" class="danger"><i class="i-play" /> Play song</button>`;

const Buttons = () => {
  return (
    <>
      <DocLayout>
        <h1>Buttons</h1>
        <div className="lead">
          Call-to-action buttons in different style and sizes
        </div>
        <div>By default, a button without any class takes primary background color of the platform</div>
        <button type="button">Submit</button>
        <CodeHighlighter code={MDButtonsDefault} />
        <h2>Button variants</h2>
        <div className="box">
          <div className="code-example">
            <button type="button">Get started</button>
            <button type="button" className="outline">
              Outline
            </button>
            <button type="button" className="secondary">
              Secondary
            </button>
            <button type="button" className="danger">
              Danger
            </button>
            <button type="button" disabled>
              Disabled
            </button>
          </div>
        </div>
        <CodeHighlighter code={MDButtons} />
        <h2>Button with spinners</h2>
        <div className="box">
          <div className="code-example">
            <button type="button">
              <span className="loading" /> Get started
            </button>
            <button type="button" className="outline">
              <span className="loading" />
              Outline
            </button>
            <button type="button" className="secondary">
              <span className="loading" /> Get started
            </button>
            <button type="button" className="danger">
              <span className="loading" />
              Danger
            </button>
            <button type="button" disabled>
              <span className="loading" />
              Disabled
            </button>
          </div>
        </div>
        <CodeHighlighter code={MDButtonWithSpinners} />
        <div className="alert info">
          Disabled button can never accommodate loading state
        </div>
        <h3>Sizes of buttons</h3>
        <div className="box">
          <div className="code-example">
            <button type="button" className="button primary button-lg">
              Large Button
            </button>
            <button type="button" className="button primary">
              Default size
            </button>
            <button type="button" className="button primary button-sm">
              Small Button
            </button>
          </div>
        </div>
        <CodeHighlighter code={MDButtonSize} />
        <h3>Button block</h3>
        <div className="box">
          <div className="code-example">
            <button type="button" className="button-block">
              Block button
            </button>
          </div>
        </div>
        <CodeHighlighter code={MDButtonBlock} />
        <h3>Buttons with icons</h3>
        <div className="box">
          <div className="code-example">
            <button type="button">
              <i className="i-message" /> Message
            </button>
            <button type="button" className="outline">
              <i className="i-check" /> Confirm action
            </button>
            <button type="button" className="secondary">
              <i className="i-check" /> Confirm action
            </button>
            <button type="button" className="danger">
              <i className="i-play" /> Play song
            </button>
          </div>
        </div>
        <CodeHighlighter code={MDButtonsWithIcons} />
      </DocLayout>
    </>
  );
};

export default Buttons;
