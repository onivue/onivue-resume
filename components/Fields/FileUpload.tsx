// @ts-nocheck
import Input from '@/components/Fields/Input';
import Compressor from 'compressorjs';
import { forwardRef, useEffect, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const FileUpload = forwardRef(({ id, setValue, value, ...rest }, ref) => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
    const files = e.target.files;
    const file = files[0];
    const filesize = Math.round(file.size / 1024);
    // console.log('FILESIZE: ' + filesize + ' KB')
    if (file) {
      new Compressor(file, {
        quality: 0.7, // 0.6 can also be used, but its not recommended to go below.
        success: (compressedResult) => {
          getBase64(compressedResult);
        },
      });
    } else {
      setValue(null);
    }
  };
  useEffect(() => {
    if (value === '' || value === null) {
      setInput('');
    }
  }, [value]);

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setValue(reader.result);
    };
  };

  return (
    <>
      <Input
        value={input}
        type="file"
        onChange={onChange}
        name={id}
        id={id}
        ref={ref}
        iconRight={
          value && <HiOutlineTrash className="cursor-pointer hover:text-red-500" onClick={() => setValue(null)} />
        }
        accept="image/png, image/jpeg"
        {...rest}
      />
    </>
  );
});

export default FileUpload;
