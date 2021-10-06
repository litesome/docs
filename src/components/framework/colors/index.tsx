import DocLayout from "../../../layouts/Docs/index";
import { CodeHighlighter, CodeInline } from "../../common/highlighter";
const MDColor = `<div class="text-primary">primary color</div>
<div class="text-secondary">secondary color</div>
<div class="text-success">success color</div>
<div class="text-info">info color</div>
<div class="text-danger">danger color</div>
<div class="text-dark">dark color</div>
<div class="text-light">light color</div>`;
const MDColorVariables = `/* Platform-level theming */
--base-color
--main-bg-color
--secondary-color
--primary-color;
/* Cross platforms colors */
--danger-color
--info-color
--warning-color
--success-color
--dark-color
--light-color
--white-color
/* Managing gray variants */
--gray-lighten-1
--gray-lighten-2
--gray-darken-1
--gray-darken-2`
const MDColorVariableExample = `.account-name {
  color: var(--dark-color);
}`

const Box = () => {
  return (
    <>
      <DocLayout>
        <h1>Color utilities</h1>
        <div className="lead">
          Color utilities are used for changing colors for text, link and
          background.
        </div>
        <h2>Text colors</h2>
        <div className="code-example">
          <div className="my-sm light text-primary">primary color</div>
          <div className="my-sm light text-secondary">secondary color</div>
          <div className="my-sm light text-success">success color</div>
          <div className="my-sm light text-info">info color</div>
          <div className="my-sm light text-danger">danger color</div>
          <div className="my-sm primary text-light">light color</div>
          <div className="my-sm light text-dark">dark color</div>
        </div>
        <CodeHighlighter code={MDColor} />
        <h2>Color variables</h2>
        <div>
          Litesome provide a set of color variables that can be used in the
          customized styles
        </div>
        <CodeHighlighter code={MDColorVariables} />
        <h2>Example</h2>
        <CodeHighlighter code={MDColorVariableExample} />
        <h2>Reset text to default base color</h2>
        <p>
          <code className="code-wrapper">.text-base-color</code> reset color of
          text and their children element with default base color in the theme
        </p>
      </DocLayout>
    </>
  );
};

export default Box;
