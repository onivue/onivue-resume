import { forwardRef, useState } from 'react'
import Input from '@/components/Form/Input'
import { HiOutlineX, HiPlus } from 'react-icons/hi'

const InputTag = forwardRef(({ id, setValue, value = [], ...rest }, ref) => {
  const [input, setInput] = useState('')

  const onKeyDown = (e) => {
    const val = e.target.value
    if (e.key === 'Enter') {
      e.preventDefault()
      if (val) {
        addTagValue(val)
      }
    }
    if (e.key === 'Backspace' && !val) {
      // TODO REMOVE OPTION
    }
  }

  const addTagValue = (val) => {
    if (val) {
      if (value.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return
      }
      setValue([...value, val])
      setInput('')
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
        iconRight={
          <HiPlus
            className="cursor-pointer hover:text-primary-500"
            onClick={(e) => addTagValue(input)}
          />
        }
        {...rest}
      />

      <div className="flex flex-wrap gap-2">
        {value.map((tag, i) => (
          <div
            key={i}
            className="px-3 py-1 my-1 text-sm bg-primary-50 rounded-full min-w-[50px] text-center flex justify-between ring-2 ring-primary-200"
          >
            {tag}

            <HiOutlineX
              className="self-center ml-1 text-gray-600 align-middle cursor-pointer dureation-1000 hover:text-red-500"
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
