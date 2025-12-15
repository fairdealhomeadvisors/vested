interface TextCalloutProps {
  location: string;
  projectName: string;
}

export default function TextCallout(props: TextCalloutProps) { 

  return (
    <div className=" relative my-10 text-4xl text-center font-light">
      <h2 className="max-w-lg mx-auto px-2 md:ml-auto md:mr-30 py-10">
        Your <span className="font-helvetica font-light">Dream Home</span> in
        {props.location} — Welcome to{" "}
        <strong className="font-helvetica font-light text-red-600">
          {props.projectName}
        </strong>
      </h2>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 270"
        className="absolute top-0 left-0 right-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
      >
        <path
          d="M-13 223.153C103.395 260.405 390.133 290.355 605.919 112.141C875.653 -110.626 1240.53 44.1974 1280 193.822"
          stroke="#E8E8E8"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
