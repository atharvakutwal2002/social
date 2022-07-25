import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Nishant Bhosale </b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Pune</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">India</span>
          </div>
         
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Durgesh Mahajan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rutuja Patil</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Vaishnavi Mokadam </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Nishant Bhosale</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Rajat Nawale </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Kiran Gaikwad </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}