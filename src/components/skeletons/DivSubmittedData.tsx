import Image from "next/image";
import { SetStateAction } from "react";
import X from "public/x.svg";

interface SubmittedData {
  setShowDiv: React.Dispatch<SetStateAction<boolean>>;
  showDiv: boolean;

  submittedFile: string;
  submittedName: string;
  submittedEmail: string;
  submittedPhoneNumber: number;
  submittedDateBirth: string;
  submittedPassword: string;
  submittedGender: string;
}

export default function LayerSubmittedData(props: SubmittedData) {
  return (
    <div
      className={`absolute w-[90%] h-full shado-xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.2)] rounded-[3vw] flex flex-col text-lightText opacity-75 dark:text-white py-7 items-center z-20 dark:bg-darkBG bg-lightBG ${
        props.showDiv ? "block" : "hidden"
      }`}
    >
      <div className="flex w-full items-center justify-center">
        <h1 className="w-[90%] flex justify-center text-2xl">
          Your Submitted Data
        </h1>
        <button
          onClick={() => {
            props.setShowDiv(false);
          }}
          className="p-2 text-2xl duration-200 border-transparent border-2 hover:border-gray-200 rounded-lg"
        >
          <Image src={X} alt="" />
        </button>
      </div>
      <div className="flex w-full h-full justify-center">
        <div className="w-1/3 h-full flex items-center p-14 justify-center">
          <span className="border-2 w-full h-full rounded-xl flex items-center justify-center">
            {props.submittedFile}
          </span>
        </div>
        <div className="w-2/3 h-full flex flex-col p-10 justify-center">
          <label htmlFor="">Name :</label>
          <span className="p-2 border-2 rounded-md">{props.submittedName}</span>
          <label htmlFor="">Email :</label>
          <span className="p-2 border-2 rounded-md">
            {props.submittedEmail}
          </span>
          <label htmlFor="">Phone Number :</label>
          <span className="p-2 border-2 rounded-md">
            {props.submittedPhoneNumber}
          </span>
          <label htmlFor="">Date Birth :</label>
          <span className="p-2 border-2 rounded-md">
            {props.submittedDateBirth}
          </span>
          <label htmlFor="">Password :</label>
          <span className="p-2 border-2 rounded-md">
            {props.submittedPassword}
          </span>
          <label htmlFor="">Gender :</label>
          <span className="p-2 border-2 rounded-md">
            {props.submittedGender}
          </span>
        </div>
      </div>
    </div>
  );
}
