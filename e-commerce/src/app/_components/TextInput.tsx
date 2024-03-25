import React,{ChangeEvent} from 'react';

interface TextInputProps {
    label: string;
    type:string;
    name:string;
    placeholder?: string;
    className?: string;
    value: string;
    labelClassName?: string;
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    type,
    placeholder,
    className,
    name,
    value,
    labelClassName,
    onChange
}) => {
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label htmlFor={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <input
            name={name}
                type={type}
                placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid rounded placeholder-gray-500"
                id={label}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;
