import { useEffect } from "react";

interface InputsProps {
  label: string;
  value: number;
  setValue: (e) => void;
  setError: (bool:boolean) => void;
}

const Inputs: React.FC<InputsProps> = ({
  label,
  value,
  setValue,
  setError,
}) => {

  useEffect(() => {
    if(value>59){
      setError(true)
    }
    if(value<1){
      setError(true)
    }
    if(value>=1 && value<=59){
      setError(false)
    }
  }, [value]);

  return (
    <div>
      <label
        className={`inline-block text-sm font-semibold  mb-1text ${
          value > 59 || value < 1 ? "text-red-300" : "text-darkblue"
        }}`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full h-10 p-2 font-bold bg-gray rounded-xl focus:ring-lightblue focus:outline-none ${
          value > 59 || value < 1
            ? "ring-0 border-4 border-red-300 "
            : " focus:ring-4 "
        } `}
        min="1"
        max="59"
        step="1"
        type="number"
        required
        data-input={label}
        id={label}
        aria-label={`set time for ${label}`}
      />
    </div>
  );
};

export default Inputs;
