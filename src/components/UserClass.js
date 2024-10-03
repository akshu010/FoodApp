import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name +"Child Constructor")
    this.state = {
     userInfo:{
      name: "None",
      location: "default",
      avatar_url:"sjhx"
     }
    };
  }
   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshu010")
    const json = await data.json()
    console.log(json)
    this.setState({
      userInfo : json
    })
    // console.log(this.props.name +"Child component")
  }
  render() {
    console.log(this.props.name +"Child Render")
    const { name, location,avatar_url } = this.state.userInfo
    return (
      <div className="details">
<img src={avatar_url} alt="" height={200} />
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h2>Socials:akshay@001</h2>
      </div>
    );
  }
}
export default UserClass;
