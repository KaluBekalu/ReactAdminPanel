import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import "./User.css";

const user = ({ id }) => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImg"
              src="https://avatars.githubusercontent.com/u/45060771?v=4"
              alt=""
            />
            <div className="userShowTopTitle">
              <span className="userShowUserUserName">Kalu Bekalu</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <h3 className="userShowBottomTitle">Account Details</h3>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">kalubb1234</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">09.09.1997</span>
            </div>
            <h3 className="userShowBottomTitle">Contact Details</h3>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+251946393208</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">KalBekalu1@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Oromia,Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <h3 className="userUpdateTitle">Edit</h3>

          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="kalubb1234"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Kalu Bekalu"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email </label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="KalBekalu1@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+251946393208"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Oromia | Ethiopia"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImage"
                  src="https://avatars.githubusercontent.com/u/45060771?v=4"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="UserUpdateIcon" />
                </label>
                <input id="file" type="file" style={{ display: "none" }} />
              </div>
              <button className="updateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default user;
