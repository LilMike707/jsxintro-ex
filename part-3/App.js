function App() {
  return (
    <div>
      <Person
        name="Mike"
        age={30}
        hobbies={["drinking", "eating", "playing videogames"]}
      />
      <Person
        name="Bill"
        age={69}
        hobbies={["skateboarding", "skydiving", "mountain climbing"]}
      />
      <Person name="Jeffy" age="Unknown" hobbies={["Unknown"]} />
    </div>
  );
}
