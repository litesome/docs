import React from "react";
import DocLayout from "../../../layouts/Docs/index";
import { CodeHighlighter } from "../../common/highlighter";

const MDGridIcon = `<i class="i-grid" />`;

const Icons = () => {
  return (
    <>
      <DocLayout>
        <h1>Icons</h1>
        <div className="lead">Harmonized iconography</div>
        <div className="code-example">
          <i className="i-grid" /> Grid icon
        </div>
        <CodeHighlighter code={MDGridIcon} />
        <h2>Navigation icons</h2>
        <div className="row">
          <div className="l-sm-12 l-md-4 l-lg-3">
            <button className="button primary">
              <i className="i-right" />
            </button>
            <p>i-right</p>
          </div>
          <div className="l-sm-12 l-md-4 l-lg-3">
            <button className="button primary">
              <i className="i-left" />
            </button>
            <p>i-left</p>
          </div>
          <div className="l-sm-12 l-md-4 l-lg-3">
            <button className="button primary">
              <i className="i-menu" />
            </button>
            <p>i-menu</p>
          </div>
          <div className="l-sm-12 l-md-4 l-lg-3">
            <button className="button primary">
              <i className="i-app" />
            </button>
            <p>i-app</p>
          </div>
        </div>
        <h2>Action icons</h2>
        <h2>Money icons</h2>
        <h2>Object icons</h2>
        <div className="row">
          <div className="l-sm-12 l-md-4 l-lg-3">
            <button className="button primary">
              <i className="i-grid" />
            </button>
            <p>i-grid</p>
          </div>
        </div>
      </DocLayout>
    </>
  );
};

export default Icons;
