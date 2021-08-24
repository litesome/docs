import DocLayout from "../../layouts/Docs";
import { CodeHighlighter } from "../common/highlighter";

const MDInstallYarn = `yarn add litesome`;
const MDInstallNpm = `npm i litesome --save`;
const MDInstallCDN = `<link rel="stylesheet" href="https://unpkg.com/litesome/css/litesome.css" type="text/css">`;

const Utilities = () => {
  return (
    <>
      <DocLayout>
        <h1>Get started</h1>
        <div className="lead">
          Litesome CSS Framework is collection of CSS styles to consistently
          make simple and clean websites. It makes browsers render all elements
          faster, beautifies semantic HTML markups and in line with modern
          standards
        </div>
        <h3>How to install?</h3>
        <h4>Manually(recommended)</h4>
        <CodeHighlighter code={MDInstallYarn} />
        <div>or</div>
        <CodeHighlighter code={MDInstallNpm} />
        <h4>CDN</h4>
        <CodeHighlighter code={MDInstallCDN} />
      </DocLayout>
    </>
  );
};

export default Utilities;
