import React, {
  useState
} from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
      .then(res => res.json())
      .then(result => {
        this.setState({
          users: result
        });
      });
  }
//Display Logo, Name(h1), email, company, skill, Average

  render() {
    const users = this.state.users && this.state.users.students.map((user, index) => {
      const scores = user.grades.reduce((total, current) => {
        return (parseInt(total, 10) + parseInt(current, 10)/10);
      }, 0);
      const match = (
        <div>
          <img src={user.pic}/>
          <h3>{`${user.firstName}  ${user.lastName}`}</h3>
          <p>{`Email: ${user.email}`}</p>
          <p>{`Company: ${user.company}`}</p>
          <p>{`Skill: ${user.skill}`}</p>
          <p>{`Average: ${scores}%`}</p>
        </div>
      );
      return (
        <div key={index}>{match}</div>
      );
    });
    return (
      <>
      <div>{users}</div>
      </>
    );
  }
}
