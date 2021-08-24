import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDDefualtImage = `<div class='image'>
  <img src="./" alt="image" />
</div>`;

const Images = () => {
  return (
    <>
      <DocLayout>
        <h1>Images</h1>
        <div className="lead">Default image handling</div>
        <div className="image">
          {/* <img src="./" alt="image" /> */}
        </div>
        <CodeHighlighter code={MDDefualtImage} />
      </DocLayout>
    </>
  );
};

export default Images;
