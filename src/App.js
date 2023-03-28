import "./App.css";
import React from "react";
import Counter from "./component/Counter";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Moez Khmissi",
        bio: "Hi, I am student.",
        imgSrc: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png",
        profession: "Student",
      },
      show: true,
      btn: "Hide",
    };
  }

  toggle = () => {
    this.setState({ show: !this.state.show });
    if (this.state.show === true) {
      this.setState({ btn: "Show" });
    } else {
      this.setState({ btn: "Hide" });
    }
  };

  render() {
    const { person } = this.state;
    return (
      <div className="page">
        <button onClick={() => this.toggle()}>{this.state.btn}</button>
        {this.state.show && (
          <div className="info">
            <img src={person.imgSrc} alt="Profile" />
            <span className="name">{person.fullName}</span>
            <span className="pro">{person.profession}</span>
            <span className="bio">{person.bio}</span>
            <Counter />
          </div>
        )}
      </div>
    );
  }
}