import { forwardRef, useState } from 'react'
import Input from '@/components/Form/Input'
import Button from '@/components/Button/Button'
import { HiOutlineX } from 'react-icons/hi'

const InputTag = forwardRef(({ id, setValue, value = [], ...rest }, ref) => {
  const [input, setInput] = useState('')

  const onKeyDown = (e) => {
    const val = e.target.value
    if (e.key === 'Enter') {
      e.preventDefault()
      if (val) {
        if (value.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
          return
        }
        setValue([...value, val])

        setInput('')
      } else if (e.key === 'Backspace' && !val) {
        removeTag(value.length - 1)
      }
    }
  }
  const onChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <Input
        value={input}
        onKeyDown={onKeyDown}
        onChange={onChange}
        name={id}
        id={id}
        ref={ref}
        {...rest}
      />

      <div className="flex flex-wrap gap-2">
        {value.map((tag, i) => (
          <div
            key={i}
            className="px-3 py-1 my-1 text-sm bg-primary-200 rounded-full min-w-[50px] text-center flex justify-between"
          >
            {tag}

            <HiOutlineX
              className="self-center ml-1 text-gray-600 align-middle cursor-pointer hover:text-red-600"
              onClick={() => {
                setValue(value.filter((v) => v != tag))
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
})

export default InputTag
