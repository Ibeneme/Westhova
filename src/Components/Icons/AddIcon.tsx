import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const AddIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "#000000",
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.00738C12.4142 7.00739 12.75 7.34317 12.75 7.75739L12.75 11.25L16.25 11.25C16.6642 11.25 17 11.5858 17 12C17 12.4142 16.6642 12.75 16.25 12.75L12.75 12.75L12.75 16.2426C12.75 16.6568 12.4142 16.9926 12 16.9926C11.5857 16.9926 11.25 16.6568 11.25 16.2426L11.25 12.75L7.76476 12.75C7.35055 12.75 7.01476 12.4142 7.01476 12C7.01477 11.5857 7.35055 11.25 7.76477 11.25L11.25 11.25L11.25 7.75738C11.25 7.34317 11.5858 7.00738 12 7.00738Z"
        fill={color}
      />
    </svg>
  );
};

export default AddIcon;
