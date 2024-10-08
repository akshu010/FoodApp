import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      {/* Hero Section */}
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          We are passionate about building experiences that make life easier and more enjoyable.
          Our mission is to deliver top-notch services to our customers.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Team Member 1 (Using Functional Component) */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Team Member - Functional
          </h2>
          <User name="Akshay (function)" location="Punjab" />
        </div>

        {/* Team Member 2 (Using Class Component) */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Team Member - Class Based
          </h2>
          <UserClass name="Akshay (class)" location="Himachal" />
        </div>
      </div>

      {/* Our Mission */}
      <div className="max-w-3xl mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to provide high-quality services with a focus on customer satisfaction.
          We work tirelessly to ensure that our users have the best experience possible.
        </p>
      </div>
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
