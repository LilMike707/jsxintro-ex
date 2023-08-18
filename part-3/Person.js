function Person(props) {
  let goVote = props.age >= 18 ? "Go Vote" : "Go to School";
  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some info about this person</p>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <li>{hobbies}</li>
      </ul>
    </div>
  );
}
