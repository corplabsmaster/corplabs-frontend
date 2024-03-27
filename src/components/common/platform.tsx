import React from "react";

export default function Platform(props: any): void {
  const checked = React.useRef(null);
  const labeled = React.useRef(null);
  const [label, setLabel] = React.useState(props.label);

  function onCheck() {
    if (checked.current.style.display == "none") {
      checked.current.style.display = "block";
      checked.current.parentElement.style.backgroundColor = "#ffdf18";
      labeled.current.style.color = "#ffdf18";
    } else {
      checked.current.style.display = "none";
      checked.current.parentElement.style.backgroundColor = "#fff";
      labeled.current.style.color = "#fff";
    }
  }

  function toggleLabel(flag: any) {
    if (flag) {
      setLabel(
        <img
          style={{
            verticalAlign: "middle",
            objectFit: "contain",
            width: "120px",
            paddingBottom: "2px",
          }}
          className="labeled-image"
          src={props.labeledImage}
        />
      );
    } else {
      setLabel(props.label);
    }
  }

  return (
    <li
      className="platform"
      onMouseOver={() => {
        toggleLabel(1);
      }}
      onMouseLeave={() => {
        toggleLabel(0);
      }}
    >
      <div
        className="checkbox"
        onClick={() => {
          onCheck();
        }}
      >
        <span
          ref={checked}
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: "bolder",
            display: "none",
          }}
        >
          &#10004;
        </span>
      </div>
      <span ref={labeled} className="label">
        {label}
      </span>
    </li>
  );
}
