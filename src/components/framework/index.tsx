import React from "react";
import DocLayout from "../../layouts/Docs";
import Markdown from '../common/highlighter';

const MDInstallYarn = `yarn add litesome`;
const MDInstallNpm = `npm i litesome --save`;

const  Docs = () => {
  return (
    <>
      <DocLayout>
        <h1>Get started</h1>
        <Markdown code={MDInstallYarn} />
        <div>or</div>
        <Markdown code={MDInstallNpm} />
      </DocLayout>
    </>
  );
}

export default Docs;
