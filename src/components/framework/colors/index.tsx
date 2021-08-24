import DocLayout from "../../../layouts/Docs/index";
import { CodeHighlighter, CodeInline } from "../../common/highlighter";
const MDColor = `<div class="text-primary">primary color</div>
<div class="text-secondary">secondary color</div>
<div class="text-success">success color</div>
<div class="text-info">info color</div>
<div class="text-danger">danger color</div>
<div class="text-dark">dark color</div>
<div class="text-light">light color</div>`;

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
          <div className="py-sm text-primary">primary color</div>
          <div className="py-sm text-secondary">secondary color</div>
          <div className="py-sm text-success">success color</div>
          <div className="py-sm text-info">info color</div>
          <div className="py-sm text-danger">danger color</div>
          <div className="py-sm text-dark">dark color</div>
          <div className="py-sm text-light">light color</div>
        </div>
        <CodeHighlighter code={MDColor} />
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
