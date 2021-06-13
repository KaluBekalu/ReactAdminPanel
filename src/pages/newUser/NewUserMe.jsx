import "./NewUser.css";
import { Publish, PermIdentity } from "@material-ui/icons";
const NewUser = () => {
  return (
    <div className="newUserContainer">
      <div className="newUser">
        <h3 className="newUserTitle">NewUser</h3>

        <form className="newUserForm">
          <div className="newUserLeft">
            <div className="newUserItem">
              <label>Username</label>
              <input
                type="text"
                className="newUserInput"
                placeholder="kalubb1234"
              />
            </div>
            <div className="newUserItem">
              <label>Full Name</label>
              <input
                type="text"
                className="newUserInput"
                placeholder="Kalu Bekalu"
              />
            </div>
            <div className="newUserItem">
              <label>Email </label>
              <input
                type="text"
                className="newUserInput"
                placeholder="KalBekalu1@gmail.com"
              />
            </div>
            <div className="newUserItem">
              <label>Phone</label>
              <input
                type="text"
                className="newUserInput"
                placeholder="+251946393208"
              />
            </div>
            <div className="newUserItem">
              <label>Address</label>
              <input
                type="text"
                className="newUserInput"
                placeholder="Oromia | Ethiopia"
              />
            </div>
          </div>
          <div className="newUserRight">
            <div className="newUserUpload">
              <div className="newUserUploadWrapper">
                <PermIdentity className="newUserImage" />
                <span className="newUseUploadLable">Upload Image</span>
              </div>
              <label htmlFor="file">
                <Publish className="newUserIcon" />
              </label>
              <input id="file" type="file" style={{ display: "none" }} />
            </div>
            <button className="updateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
