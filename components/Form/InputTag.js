import { forwardRef, useState } from 'react'
import Input from '@/components/Form/Input'

const InputTag = forwardRef(({ id, setValue, value = [], ...rest }, ref) => {
  const [input, setInput] = useState('')

  const onKeyDown = (e) => {
    const val = e.target.value
    console.log(e.key)
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
    <div className="p-1 border-2 rounded">
      <Input
        value={input}
        placeholder="Enter a tag"
        onKeyDown={onKeyDown}
        onChange={onChange}
        className="p-2 mx-2 bg-indigo-100 rounded"
        name={id}
        id={id}
        ref={ref}
      />

      <button
        className="p-2 text-white bg-blue-400 rounded shadow"
        onClick={onKeyDown}
      >
        ADD
      </button>

      <div className="flex flex-wrap gap-2">
        {value.map((tag, i) => (
          <div
            key={i}
            className="px-3 py-1 my-1 text-sm bg-indigo-200 rounded-full min-w-[50px] text-center"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
})

export default InputTag
