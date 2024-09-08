import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <div></div>
      <div>
        <button className="flex flex-col justify-center items-center"><svg>
            </svg>
            <p>attachmen</p>t</button>
        <button>Type</button>
        <button>Quik actions </button>
        <button>settings</button>
      </div>
    </>
  );
}
