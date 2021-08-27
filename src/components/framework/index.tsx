import DocLayout from "../../layouts/Docs";
import { CodeHighlighter } from "../common/highlighter";

const MDInstallYarn = `yarn add @litesome/litesome`;
const MDInstallNpm = `npm i @litesome/litesome --save`;

const Utilities = () => {
  return (
    <>
      <DocLayout>
        <h1>Get started</h1>
        <div className="lead">
          Litesome CSS Framework is collection of CSS styles to consistently
          make simple and clean websites. It makes browsers render all elements
          faster and beautifies semantic HTML markups
        </div>
        <h3>How to install?</h3>
        <h4>Manually(recommended)</h4>
        <CodeHighlighter code={MDInstallYarn} />
        <div>or</div>
        <CodeHighlighter code={MDInstallNpm} />
      </DocLayout>
    </>
  );
};

export default Utilities;
