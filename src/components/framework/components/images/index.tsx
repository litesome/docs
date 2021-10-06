import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";
import LakeImage from "./../../../../assets/images/lake.jpeg";
import Avatar from "./../../../../assets/images/avatar.png";

const MDDefualtImage = `<div class='image'>
  <img src="./" alt="image" />
</div>`;
const MDAvatarWithUser = `<div class="avatar user-avatar">
  <img src="./" alt="user" />
  <span>John Doe</span>
  <i class="i-right" />
</div>`;

const Images = () => {
  return (
    <>
      <DocLayout>
        <h1>Images</h1>
        <div className="lead">
          Customized image container in different scenarios
        </div>
        <div className="box">
          <div className="code-example">
            <div className="image">
              <img src={LakeImage} alt="city" />
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDDefualtImage} />
        <h2>User avatar with name</h2>
        <div className="box">
          <div className="code-example">
            <button className="avatar">
              <img src={Avatar} alt="user" />
            </button>
            <button className="avatar">
              <img src={Avatar} alt="user" />
            </button>
          </div>
          <div className="code-example">
            <div className="avatar user-avatar">
              <img src={Avatar} alt="user" />
              <span>My Account</span>
              <i className="i-right" />
            </div>
          </div>
          <div className="code-example">
            <div className="avatar avatar-lg light user-avatar">
              <img src={Avatar} alt="user" />
              <span>John Doe</span>
              <i className="i-right" />
            </div>
          </div>
        </div>
        <CodeHighlighter code={MDAvatarWithUser} />
      </DocLayout>
    </>
  );
};

export default Images;
