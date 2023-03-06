import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { FileUploader } from "react-drag-drop-files";

import Eye from "public/eye.svg";
import EyeSlash from "public/eye-slash.svg";
import Calendar from "public/calendar.svg";

import Layout from "@/components/layout/Layout";
import Input from "@/components/input/Input";
import DivSubmittedData from "@/components/skeletons/DivSubmittedData";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: number;
  dateBirth: string;
  password: string;
  gender: string;
  uploadedImage: FileList | null;
  // uploadedImage: typeof Image;
};

export default function Login() {
  const router = useRouter();

  const fileTypes = ["JPG", "PNG", "JPEG", "GIF"];
  const [passwordShown, setPasswordShown] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState(0);
  const [submittedDateBirth, setSubmittedDateBirth] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");
  const [submittedGender, setSubmittedGender] = useState("");
  const [submittedFile, setSubmittedFile] = useState("");

  const methods = useForm<FormValues>({
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = methods;

  register("uploadedImage", {
    required: "This Image is required!",
  });

  register("dateBirth", {
    required: "This Date Birth is required!",
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
        dateBirth: "",
      });
    }
  }, [formState, reset]);

  return (
    <Layout pageTitle="Login">
      <section className="min-h-screen w-full bg-lightBG dark:bg-darkBG text-white flex justify-center items-center font-poppins py-32">
        <DivSubmittedData
          setShowDiv={setShowDiv}
          showDiv={showDiv}
          submittedFile={submittedFile}
          submittedName={submittedName}
          submittedEmail={submittedEmail}
          submittedPhoneNumber={submittedPhoneNumber}
          submittedDateBirth={submittedDateBirth}
          submittedPassword={submittedPassword}
          submittedGender={submittedGender}
        />

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              setSubmittedName(data.name);
              setSubmittedEmail(data.email);
              setSubmittedPhoneNumber(data.phoneNumber);
              setSubmittedDateBirth(data.dateBirth);
              setSubmittedPassword(data.password);
              setSubmittedGender(data.gender);
              setSubmittedFile(JSON.stringify(data.uploadedImage));
              // setSubmittedData(data);

              console.log(data.uploadedImage);
              console.log(JSON.stringify(data.uploadedImage));
              // console.log(data);

              // router.push(`login/${data.name}`);
            })}
            className={`flex flex-col h-full w-max p-12 rounded-2xl shadow-[0px_10px_20px_5px_rgba(0,0,0,0.1)] items-center ${
              showDiv ? "blur-sm" : "blur-none"
            }`}
          >
            <div className="flex flex-col justify-center items-start w-full">
              <h2 className="text-lightText dark:text-white flex justify-center w-full font-semibold text-2xl mb-2">
                Login
              </h2>

              <label className="flex justify-center w-full px-[3vw] py-10 transition border-2 border-gray-300 border-inherit border-dashed rounded-xl appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-gray-400 dark:fill-slate-300"
                      d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z"
                    />
                  </svg>
                  <span className="font-medium text-[#B2BEB5]">
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
              <Input
                id="name"
                titleLabel="Name"
                inputType="text"
                registerType={{
                  required: "This Name is required!",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters required",
                  },
                }}
                placeholder="Name"
                errorMessage={errors.name?.message}
              />

              <Input
                id="email"
                titleLabel="Email"
                inputType="text"
                registerType={{
                  required: "This Email is required!",
                  pattern: {
                    value: /^\S+@\S+[.]+\S/i,
                    message: "Email Not Same with pattern",
                  },
                }}
                placeholder="Email"
                errorMessage={errors.email?.message}
              />

              <Input
                id="phoneNumber"
                titleLabel="Phone Number"
                inputType="tel"
                registerType={{
                  required: "This Phone Number is required!",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 number required!",
                  },
                  pattern: {
                    value: /^\d+$/i,
                    message: "Just enter a number",
                  },
                }}
                placeholder="Phone Number"
                errorMessage={errors.phoneNumber?.message}
              />

              <label htmlFor="dateBirth">Date Birth</label>
              <span className="flex hover:border-gray-400 duration-200 bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
                <input
                  type="date"
                  {...register("dateBirth")}
                  placeholder="Date Birth"
                  className="w-full focus:placeholder:opacity-0 focus:outline-none bg-transparent"
                />
                <Image
                  src={Calendar}
                  className="cursor-pointer scale-[0.85] -z-10 absolute right-14"
                  alt=""
                />
              </span>
              <p className="text-red-500 text-sm">
                {errors.dateBirth?.message}
              </p>

              <label htmlFor="password">Password</label>
              <span className="flex hover:border-gray-400 duration-200 bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
                <input
                  type={passwordShown ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password"
                  className="w-full focus:placeholder:opacity-0 focus:outline-none bg-transparent"
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
              <span className="flex hover:border-gray-400 duration-200 bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
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
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </section>
    </Layout>
  );
}
