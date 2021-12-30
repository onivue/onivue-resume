import { forwardRef, useState } from 'react'
import Input from '@/components/Form/Input'

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
            className="px-3 py-1 my-1 text-sm bg-primary-200 rounded-full min-w-[50px] text-center "
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
})

export default InputTag
