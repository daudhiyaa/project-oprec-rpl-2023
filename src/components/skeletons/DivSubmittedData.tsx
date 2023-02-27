interface SubmittedData {
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
        <span className="p-2 border-2 rounded-md">{props.submittedEmail}</span>
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
        <span className="p-2 border-2 rounded-md">{props.submittedGender}</span>
      </div>
    </div>
  );
}
