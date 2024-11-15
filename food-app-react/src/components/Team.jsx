import React from "react";
import UserTeam from "./UserTeam";
import userInfo from "../util/userInfo";
class Team extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-xl font-medium title-font mb-4 text-gray-900 tracking-widest">user :
              <userInfo.Consumer>
                {(data)=>data.logedInUserName}
              </userInfo.Consumer>
              </h1>
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This is a Class Base Component in <code className="cursor-pointer" >React.js</code> which were used before introduced of functional components</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <UserTeam
                username={"tanyaaa05"}
                role={" CEO "}
                leetcode={"https://leetcode.com/u/tanyaaa005"}
              />
              <UserTeam
                username={"shivalalprasad"}
                role={"CTO"}
                leetcode={"https://leetcode.com/u/shivalalprasad"}
              />
            </div>
          </div>
        </section>
      </>
    )
  }

}

export default Team;
