import User from "./User";
import UserClass from "./UserClass";
 const About = () => {
  return (
    <div>
      <h1> About us </h1>
      <h2>This ia a about us page</h2>
      <User name ={"Akshay (function)"} location = {"Punjab"}/>
      <UserClass name={"Akshay (class)"} location = {"Himachal"}/>
    </div>
  );
};
export default About;

// import React, { Component } from "react";
// import User from "./User";
// import UserClass from "./UserClass";

// export class AboutClass extends Component {
//   constructor(prop) {
//     super(prop)
//     console.log("Parent constructor");
//   }
//   componentDidMount() {
//     console.log("Parent ComponentDidMount");
//   }
//   render() {
//     console.log("Parent render");
//     return (
//       <div>
//         <h1> About us </h1>
//         <h2>This is an about us page</h2>
//         <UserClass name={"First (class)"} location={"Himachal"} />
//       </div>
//     );
//   }
// }

// export default AboutClass;
