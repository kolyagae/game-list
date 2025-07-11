import { useState, useRef, useEffect } from 'react';
import ArrowIcon from '@/assets/icons/Arrow.svg';
import * as s from './Dropdown.module.css';
import clsx from 'clsx';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={s.dropdownContainer} ref={dropdownRef}>
      <div className={s.dropdownHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption?.label}</span>
        <span>
          <ArrowIcon />
        </span>
      </div>

      {isOpen && (
        <div className={s.dropdownList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={clsx(s.dropdownItem, value === option.value && s.selected)}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
