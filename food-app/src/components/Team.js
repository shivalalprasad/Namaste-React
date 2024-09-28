import React from "react";
import UserTeam from "./UserTeam";
// import github from '../util/github-mark.svg'
class Team extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   statevar0: 0,
    //   statevar1: 1,
    // }
  }

  render() {
    // const { statevar0, statevar1 } = this.state
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
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
        {/* <section className="text-gray-600 body-font">
          <h1 className="flex-grow sm:pr-16 text-2xl text-center font-medium title-font text-gray-900">State Variable in React js</h1><br />
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto mb-8">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">statevar0</h1>
              <span className="flex-grow sm:pr-16 text-2xl font-medium title-font text-blue-900">: {statevar0}</span>
              <button className="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0"
                onClick={() => {
                  this.setState({
                    statevar0: this.state.statevar0 + 1
                  })
                }}
              >{"+"}</button>
              <button className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0 ml-8"
                onClick={() => {
                  this.setState({
                    statevar0: this.state.statevar0 - 1
                  })
                }}
              >{"-"}</button>
            </div>
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto mb-8">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">statevar1</h1>
              <span className="flex-grow sm:pr-16 text-2xl font-medium title-font text-blue-900">: {statevar1}</span>
              <button className="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0"
                onClick={() => {
                  this.setState({
                    statevar1: this.state.statevar1 + 1
                  })
                }}
              >{"+"}</button>
              <button className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0 ml-8"
                onClick={() => {
                  this.setState({
                    statevar1: this.state.statevar1 - 1
                  })
                }}
              >{"-"}</button>            </div>
          </div>
        </section> */}
      </>
    )
  }

}

export default Team;
