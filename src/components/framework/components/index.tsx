import { Link } from "react-router-dom";
import DocLayout from "../../../layouts/Docs/index";
import Lists from "./../../../assets/images/lists.svg";
import Box from "./../../../assets/images/box.svg";
import Images from "./../../../assets/images/image.svg";
import Tables from "./../../../assets/images/tables.svg";
import Typography from "./../../../assets/images/typography.svg";
import Navbar from "./../../../assets/images/navbar.svg";
import Form from "./../../../assets/images/form.svg";
import Spinner from "./../../../assets/images/spinner.svg";
import Button from "./../../../assets/images/button.svg";
import Alert from "./../../../assets/images/alert.svg";

const Components = () => {
  return (
    <>
      <DocLayout>
        <h1>Components</h1>
        <div className="lead">Essential collections of elements</div>
        <div className="code-example">
          <div className="row">
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/forms">
                  <div className="box-image">
                    <img className="" src={Form} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Forms</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/lists">
                  <div className="box-image">
                    <img className="" src={Lists} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Lists</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/buttons">
                  <div className="box-image">
                    <img className="" src={Button} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Buttons</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/box">
                  <div className="box-image">
                    <img className="" src={Box} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Box</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/alerts">
                  <div className="box-image">
                    <img className="" src={Alert} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Alerts</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/navbar">
                  <div className="box-image">
                    <img className="" src={Navbar} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Navbar</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/tables">
                  <div className="box-image">
                    <img className="" src={Tables} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Tables</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/images">
                  <div className="box-image">
                    <img className="" src={Images} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Images</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/typography">
                  <div className="box-image">
                    <img className="" src={Typography} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Typography</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="l-sm-12 l-md-4 l-lg-4">
              <div className="box">
                <Link className="text-base-color" to="/docs/components/spinners">
                  <div className="box-image">
                    <img className="" src={Spinner} alt="Lists" />
                  </div>
                  <div className="box-body">
                    <h2>Spinners</h2>
                    <p>
                      The page header is a nice little feature to add
                      appropriate.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DocLayout>
    </>
  );
};

export default Components;
