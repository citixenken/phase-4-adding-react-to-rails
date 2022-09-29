import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((movies) => console.log(movies));
  }, []);
  return <h1>Hello from React!</h1>;
}
