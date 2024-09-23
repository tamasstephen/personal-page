import Image from "next/image";
import ErrorIcon from "@/assets/alert-circle.svg";

export const ErrorComponent = ({ reset }: { reset: () => void }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center translate-y-[-50%]">
        <Image src={ErrorIcon} alt="alert image" className="mb-4 w-14 h-14" />
        <h2 className="text-xl mb-8 font-semibold">Something went wrong!</h2>
        <button
          className="rounded-md py-2 px-4 border border-white"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
};
