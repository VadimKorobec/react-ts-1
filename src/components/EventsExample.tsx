import React, { FC, useRef, useState } from "react";

export const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    setValue("");
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  const handleLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const handleWithPrevent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  return (
    <>
      <input
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="УПР"
      />
      <input
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="НЕ УПР"
      />

      <button onClick={handleClick}>Send</button>
      <div
        onDrag={handleDrag}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={handleDrop}
        onDragLeave={handleLeave}
        onDragOver={handleWithPrevent}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 15,
        }}
      ></div>
    </>
  );
};
