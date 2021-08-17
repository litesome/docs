import CodeHighlighter from "../../../common/highlighter";
import DocLayout from "../../../../layouts/Docs/index";

const MDAlerts = `<div className="alert success">
  Yuhuuu! You've got your $11.99 album from The Weeknd
</div>
<div className="alert info">
You've got some friends nearby, stop looking at your phone and find them...
</div>
<div className="alert error">
Damn man! You screwed up the server this time. You should find a good excuse for your boss...
</div>`;

const Alerts = () => {
  return (
    <>
      <DocLayout>
        <h1>Alert messages</h1>
        <div className="lead">Display success, warning and error messages.</div>
        <div className="code-example">
          <div className="alert success">
            Yuhuuu! You've got your $11.99 album from The Weeknd
          </div>
          <div className="alert info">
            You've got some friends nearby, stop looking at your phone and find
            them...
          </div>
          <div className="alert error">
            Damn man! You screwed up the server this time. You should find a
            good excuse for your boss...
          </div>
        </div>
        <CodeHighlighter code={MDAlerts} />
      </DocLayout>
    </>
  );
};

export default Alerts;
