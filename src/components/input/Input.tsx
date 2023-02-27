import { RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = {
  id: string;
  titleLabel: string;
  inputType: string;
  registerType: RegisterOptions;
  placeholder: string;
  errorMessage?: string;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  id,
  titleLabel,
  inputType,
  registerType,
  placeholder,
  errorMessage,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={inputType}>{titleLabel}</label>
      <span className="flex bg-transparent rounded-lg border-gray-300 dark:border-white border-[1px] px-2 py-1">
        <input
          type={inputType}
          // {...rest}
          {...register(id, registerType)}
          placeholder={placeholder}
          className="w-full focus:placeholder:opacity-0 focus:outline-none bg-transparent"
        />
      </span>
      <p className="text-red-500 text-sm">{errorMessage}</p>
    </>
  );
}
