import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FileUploader } from "react-drag-drop-files";
import Eye from "public/eye.svg";
import EyeSlash from "public/eye-slash.svg";
import Calendar from "public/calendar.svg";
import Image from "next/image";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: number;
  dateBirth: string;
  password: string;
  gender: string;
  isAdmin: boolean;
  // uploadedImage: typeof Image;
  uploadedImage: FileList | null;
};

const fileTypes = ["JPG", "PNG", "JPEG", "GIF"];

export default function Login() {
  const [username, setUsername] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState(0);
  const [submittedDateBirth, setSubmittedDateBirth] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");
  const [submittedGender, setSubmittedGender] = useState("");
  const [submittedFile, setSubmittedFile] = useState("");

  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
    console.log(file);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  register("name", {
    required: {
      value: true,
      message: "This is required!",
    },
    minLength: {
      value: 4,
      message: "Minimal 4",
    },
    onChange: (e) => setUsername(e.target.value),
  });

  register("email", {
    required: {
      value: true,
      message: "This is required!",
    },
    pattern: /^\S+@\S+$/i,
  });

  register("phoneNumber", {
    required: "This Phone number is required!",
  });

  register("dateBirth", {
    required: "This Date Birth is required!",
    // pattern: [0-9]{3}-[0-9]{2}-[0-9]{3},
  });

  register("uploadedImage", {
    required: "This Image is required!",
  });

  register("password", {
    required: "This Password is required!",
  });

  register("gender", {
    required: "This Gender is required!",
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setShowDiv(true);
      reset({
        name: "",
        email: "",
        phoneNumber: 0,
        password: "",
        gender: "",
        isAdmin: true,
        dateBirth: "",
      });
    }
  }, [formState, reset]);

  return (
    <Layout pageTitle="Login">
      <section className="min-h-screen w-full bg-lightBG dark:bg-darkBG text-white flex justify-center items-center font-poppins py-32">
        <div
          className={`absolute w-[90%] h-full shado-xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.2)] rounded-[5vw] flex flex-col text-lightText opacity-75 dark:text-white py-7 justify-center items-center z-20 dark:bg-darkBG bg-lightBG ${
            showDiv ? "block" : "hidden"
          }`}
        >
          <div className="flex w-full items-center justify-center">
            <h1 className="w-[90%] flex justify-center text-2xl">
              Your Submitted Data
            </h1>
            <button
              onClick={() => {
                setShowDiv(false);
              }}
              className="px-2 text-2xl duration-200 border-transparent border-2 hover:border-gray-200 rounded-lg"
            >
              x
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <span className="p-2 border-2 rounded-md">{submittedName}</span>
            <span>{submittedEmail}</span>
            <span>{submittedPhoneNumber}</span>
            <span>{submittedDateBirth}</span>
            <span>{submittedPassword}</span>
            <span>{submittedGender}</span>
            <span>{submittedFile}</span>
            <>{file}</>
          </div>
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            // setSubmittedData(data);
            setSubmittedName(data.name);
            setSubmittedEmail(data.email);
            setSubmittedPhoneNumber(data.phoneNumber);
            setSubmittedDateBirth(data.dateBirth);
            setSubmittedPassword(data.password);
            setSubmittedGender(data.gender);
            setSubmittedFile(JSON.stringify(data.uploadedImage));

            console.log(data.uploadedImage);
            console.log(JSON.stringify(data.uploadedImage));
            // console.log(data);
          })}
          className={`flex flex-col h-full w-max p-12 rounded-2xl shadow-[0px_10px_20px_5px_rgba(0,0,0,0.1)] items-center ${
            showDiv ? "blur-sm" : "blur-none"
          }`}
        >
          <div className="flex flex-col justify-center items-start w-full">
            <h2 className="text-lightText dark:text-white flex justify-center w-full font-semibold text-2xl mb-2">
              Login
            </h2>

            {/* <FileUploader
              handleChange={handleChange}
              name="file"
              classes="h-24 z-0 border-white"
              types={fileTypes}
              multiple={true}
              hoverTitle="Ini Hover"
              // {...register("uploadedImage")}
            /> */}

            <label className="flex justify-center w-full h-32 px-[4vw] py-4 transition border-2 border-gray-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-[#B2BEB5] dark:text-darkParagraph">
                  Drop your photo here, or {""}
                  <span className="dark:text-darkComponent text-lightText underline">
                    browse
                  </span>
                </span>
              </span>
              <input
                type="file"
                accept="image/*,.png,.jpg,.jpeg"
                multiple={true}
                className="hidden"
                // name="file_upload"
                {...register("uploadedImage")}
              />
            </label>
            <p className="text-red-500 text-sm">
              {errors.uploadedImage?.message}
            </p>
          </div>

          <div className="flex flex-col gap-y-1 h-max w-full text-lightText dark:text-white">
            <label htmlFor="name">Name</label>
            <span className="flex bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
              <input
                type="text"
                {...register("name")}
                placeholder="Name"
                className="w-full focus:outline-none bg-transparent"
              />
            </span>
            <p className="text-red-500 text-sm">{errors.name?.message}</p>

            <label htmlFor="email">Email</label>
            <span className="flex bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="w-full focus:outline-none bg-transparent"
              />
            </span>
            <p className="text-red-500 text-sm">{errors.email?.message}</p>

            <label htmlFor="tel">Phone Number</label>
            <span className="flex bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
              <input
                type="number"
                {...register("phoneNumber")}
                placeholder="Phone Number"
                className="w-full focus:outline-none bg-transparent"
              />
            </span>
            <p className="text-red-500 text-sm">
              {errors.phoneNumber?.message}
            </p>

            <label htmlFor="dateBirth">Date Birth</label>
            <span className="flex bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
              <input
                type="date"
                {...register("dateBirth")}
                placeholder="Date Birth"
                className="w-full focus:outline-none bg-transparent"
              />
              <Image
                src={Calendar}
                className="cursor-pointer scale-[0.85] -z-10 absolute right-14"
                alt=""
              />
            </span>
            <p className="text-red-500 text-sm">{errors.dateBirth?.message}</p>

            <label htmlFor="password">Password</label>
            <span className="flex bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
              <input
                type={passwordShown ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="w-full focus:outline-none bg-transparent"
              />
              <Image
                onClick={() => {
                  setPasswordShown(!passwordShown);
                }}
                src={passwordShown ? EyeSlash : Eye}
                className="cursor-pointer scale-90"
                alt=""
              />
            </span>
            <p className="text-red-500 text-sm">{errors.password?.message}</p>

            <label htmlFor="Gender">Gender</label>
            <span className="flex bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
              <select
                {...register("gender")}
                className="w-full focus:outline-none bg-transparent"
              >
                <option value="Male" className="dark:bg-darkBG">
                  Male
                </option>
                <option value="Female" className="dark:bg-darkBG">
                  Female
                </option>
              </select>
            </span>
            <p className="text-red-500 text-sm">{errors.gender?.message}</p>

            <button
              type="submit"
              className="rounded-lg cursor-pointer p-2 bg-darkComponent text-darkText duration-200 hover:shadow-md hover:bg-darkComponentHover"
            >
              <Link
                href={`login/${username}`}
                target="_blank"
                className="w-full h-full p-2"
              >
                Submit
              </Link>
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
