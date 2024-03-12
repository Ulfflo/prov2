import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUser } from "./usersSlice";

export default function Users() {
  const { list } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState("");

  function handleOnClick() {
    dispatch(addUser(display));
    setDisplay("");
  }

  return (
    <>
      <input
        type="text"
        value={display}
        onChange={(e) => setDisplay(e.target.value)}
      />
      <button onClick={handleOnClick}>Tryck här</button>
      <li>{list}</li>
    </>
  );
}