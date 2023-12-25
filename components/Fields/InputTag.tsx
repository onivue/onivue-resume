// @ts-nocheck
import Input from '@/components/Fields/Input';
import { forwardRef, useState } from 'react';
import { HiOutlineX, HiPlus } from 'react-icons/hi';

const InputTag = forwardRef(({ id, setValue, value = [], ...rest }, ref) => {
  const [input, setInput] = useState('');

  const onKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter') {
      e.preventDefault();
      if (val) {
        addTagValue(val);
      }
    }
    if (e.key === 'Backspace' && !val) {
      // TODO REMOVE OPTION
    }
  };

  const addTagValue = (val) => {
    if (val) {
      if (value.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setValue([...value, val]);
      setInput('');
    }
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Input
        value={input}
        onKeyDown={onKeyDown}
        onChange={onChange}
        name={id}
        id={id}
        ref={ref}
        iconRight={<HiPlus className="cursor-pointer hover:text-primary-500" onClick={(e) => addTagValue(input)} />}
        {...rest}
      />

      <div className="flex flex-wrap gap-2">
        {value.map((tag, i) => (
          <div
            key={i}
            className="my-1 flex min-w-[50px] justify-between rounded-full bg-primary-50 px-3 py-1 text-center text-sm text-black ring-2 ring-primary-200"
          >
            {tag}

            <HiOutlineX
              className="dureation-1000 ml-1 cursor-pointer self-center align-middle text-gray-600 hover:text-red-500"
              onClick={() => {
                setValue(value.filter((v) => v != tag));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default InputTag;
