import DocLayout from "../../../layouts/Docs/index";

const Helpers = () => {
  return (
    <>
      <DocLayout>
        <h1>Utility classes</h1>
        <div className="lead">
          All generic form controls, designed for consistency
        </div>
        <h2>1. Containers</h2>
        <p>
          Containers are a core building block that wraps content within a given
          device or viewport
        </p>
        <div className="code-example">
          <div className="container">
            <div className="box">Content blocks</div>
          </div>
        </div>
        <h2>2. Alignment</h2>
        <div className="left-align text-success lead">
          Text aligned in the center
        </div>
        <div className="center-align text-info lead">
          Text aligned in the center
        </div>
        <div className="right-align text-danger lead">
          Text aligned in the center
        </div>
        <h2>3. Spacing</h2>
        <div>
          Set of spacing classes that includes vertical and horizontal
          properties. The classes are named using the format{" "}
          <code className="code-wrapper">"property-sides-size"</code>
        </div>
        <h6>Property shorthand classes</h6>
        <ul className="list-block">
          <li>
            <span className="text-danger">m</span> - for classes that set{" "}
            <span className="text-danger">margin</span>
          </li>
          <li>
            <span className="text-danger">p</span> - for classes that set{" "}
            <span className="text-danger">padding</span>
          </li>
        </ul>
        <h6>Side shorthand classes</h6>
        <ul className="list-block">
          <li>
            <span className="text-danger">x</span> - for classes that set
            <span className="text-danger"> margin left and right </span>
          </li>
          <li>
            <span className="text-danger">y</span> - for classes that set
            <span className="text-danger"> margin top and bottom</span>
          </li>
        </ul>
        <h6>Size shorthand classes</h6>
        <ul className="list-block">
          <li>
            <span className="text-danger">sm</span> - for classes that set
            margin or padding to <span className="text-danger">0.6em</span>{" "}
            value
          </li>
          <li>
            <span className="text-danger">md</span> - for classes that set
            margin or padding to <span className="text-danger">0.8em</span>{" "}
            value
          </li>
          <li>
            <span className="text-danger">lg</span> - for classes that set
            margin or padding to <span className="text-danger">1.8em</span>{" "}
            value
          </li>
        </ul>
        <div className="code-example">
          <div className="white my-md py-sm">.py-sm</div>
          <div className="white my-md py-md">.py-md</div>
          <div className="white my-md py-lg">.py-lg</div>
        </div>
        <h2>4. Hiding element</h2>
        <p>
          To hide elements simply use the{" "}
          <code className="code-wrapper">.hide</code> class. Please note that{" "}
          <code className="code-wrapper">.show</code> class with enforce element
          to be visible
        </p>
        <h2>5. Shadows</h2>
        <p>
          Add shadows to elements with box-shadow was made simple with few
          helper classes
        </p>
        <h6>Shadow classes</h6>
        <ul className="list-block">
          <li>
            <code className="code-wrapper">.shadow</code> - apply default shadow
          </li>
          <li>
            <code className="code-wrapper">.shadow-sm</code> - apply small
            shadow
          </li>
          <li>
            <code className="code-wrapper">.shadow-md</code> - apply medium
            shadow
          </li>
          <li>
            <code className="code-wrapper">.shadow-lg</code> - apply large
            shadow
          </li>
        </ul>
        <div className="code-example">
          <div className="box my-md shadow">Default shadow</div>
        </div>
        <div className="code-example">
          <div className="box my-lg shadow-sm">Small shadow</div>
        </div>
        <div className="code-example">
          <div className="box my-lg shadow-md">Medium shadow</div>
        </div>
        <div className="code-example">
          <div className="box my-lg shadow-lg">Large shadow</div>
        </div>
        <h2>6. Rounded corners</h2>
        <p>Rounded corners of element made easy</p>
        <ul className="list-block">
          <li>
            <code className="code-wrapper">.radius</code> - apply default radius
          </li>
          <li>
            <code className="code-wrapper">.radius-sm</code> - apply small
            radius
          </li>
          <li>
            <code className="code-wrapper">.radius-md</code> - apply medium
            radius
          </li>
          <li>
            <code className="code-wrapper">.radius-lg</code> - apply large
            radius
          </li>
          <li>
            <code className="code-wrapper">.rounded</code> class make
          </li>
        </ul>
      </DocLayout>
    </>
  );
};

export default Helpers;
