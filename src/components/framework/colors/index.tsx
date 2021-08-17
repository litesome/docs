import DocLayout from "../../../layouts/Docs/index";
import CodeHighlighter from "../../common/highlighter";

const MDColor = `<div className="text-primary">primary color</div>
<div className="text-secondary">secondary color</div>
<div className="text-success">success color</div>
<div className="text-info">info color</div>
<div className="text-error">error color</div>
<div className="text-dark">dark color</div>
<div className="text-light">light color</div>`;

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
          <div className="py-sm text-error">error color</div>
          <div className="py-sm text-dark">dark color</div>
          <div className="py-sm text-light">light color</div>
        </div>
        <CodeHighlighter code={MDColor} />
      </DocLayout>
    </>
  );
};

export default Box;
