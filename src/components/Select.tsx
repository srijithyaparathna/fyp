import { useState, forwardRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Dropdown icon


interface SelectProps {
  value: string;
  onChange: (value: string) => void; // Change the type to accept string directly
  options: string[]; // Add options to the component
}

const Select = forwardRef<HTMLDivElement, SelectProps>(({ value, onChange, options }, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleOptionClick = (option: string) => {
    onChange(option); // Pass the selected value directly to the parent component
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative w-full" ref={ref}>
      {/* The div that mimics a select field */}
      <div
        onClick={toggleDropdown}
        className=" flex h-[40px] md:h-[50px] px-[11px] md:px-[17px] w-full bg-transparent border-[1px] 
        hover:border-2 text-14 placeholder:text-muted-graycal focus-visible:outline-none cursor-pointer"
      >
         <span className={`flex w-full items-center justify-between ${value ? 'text-black' : 'text-gray-400'}`}>
          {value || "Select Your Role"} 
        </span>
        <button
          type="button"
          className="text-muted-graycal"
        >
          {isDropdownOpen ? (
            <FiChevronUp size={20} className="text-[#6673FC] w-[15px] md:w-[18px]" />
          ) : (
            <FiChevronDown size={20} className="text-[#6673FC] w-[15px] md:w-[18px]" />
          )}
        </button>
      </div>

      {/* Show the custom dropdown list when clicked */}
      {isDropdownOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)} // Select option
              className="px-[22px] py-[8px] cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

Select.displayName = "Select";

export { Select };



