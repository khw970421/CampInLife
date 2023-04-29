import React from "react";

interface SelectBoxProps {
  optionsTitle: string;
  options: string[];
  changeSelectBoxOption: (event: React.ChangeEvent) => void;
}

export default function SelectBox({
  optionsTitle = "optionsTitle",
  options = [],
  changeSelectBoxOption,
}: SelectBoxProps) {
  return (
    <select onChange={changeSelectBoxOption}>
      <option value={optionsTitle} disabled selected>
        {optionsTitle}
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
