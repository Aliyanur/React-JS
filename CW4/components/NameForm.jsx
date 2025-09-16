import React, { useCallback, useRef, useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const lastNameInputRef = useRef(null);

  function handleFocus() {
    lastNameInputRef.current.focus();
  }

//   function handleBlur() {
//     lastNameInputRef.current.blur();
//   }

  const onShowData = useCallback(() => {
    alert(`First Name: ${firstName}, Last Name: ${lastName}`);
  }, [firstName, lastName]);

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        ref={lastNameInputRef}
      />
      <br />
      <button onClick={handleFocus}>Focus Last Name</button>
      {/* <button onClick={handleBlur}>Blur Last Name</button> */}
      <button onClick={onShowData}>Show Data</button>
    </>
  );
};

export default NameForm;