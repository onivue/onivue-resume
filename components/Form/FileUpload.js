import { forwardRef, useState, useEffect } from 'react'
import Input from '@/components/Form/Input'
import Button from '@/components/Button/Button'
import { HiOutlineX } from 'react-icons/hi'
import { HiOutlineTrash, HiPlus } from 'react-icons/hi'

const FileUpload = forwardRef(({ id, setValue, value, ...rest }, ref) => {
  const [input, setInput] = useState('')

  const onChange = (e) => {
    setInput(e.target.value)
    const files = e.target.files
    const file = files[0]
    if (file) {
      getBase64(file)
    }
  }
  useEffect(() => {
    if (value === '' || value === null) {
      setInput('')
    }
  }, [value])

  const getBase64 = (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setValue(reader.result)
    }
  }

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
          value && (
            <HiOutlineTrash
              className="cursor-pointer hover:text-red-500"
              onClick={() => setValue(null)}
            />
          )
        }
        accept="image/png, image/jpeg"
        {...rest}
      />
    </>
  )
})

export default FileUpload
