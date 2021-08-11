import DocLayout from "../../layouts/Docs";
import Markdown from '../common/highlighter';

const MDInstallYarn = `yarn add litesome`;
const MDInstallNpm = `npm i litesome --save`;

const  Utilities = () => {
  return (
    <>
      <DocLayout>
        <h1>Utilities</h1>
        <Markdown code={MDInstallYarn} />
        <div>or</div>
        <Markdown code={MDInstallNpm} />
      </DocLayout>
    </>
  );
}

export default Utilities;
