import { useFieldArray } from 'react-hook-form'
import Button from '@/components/Button/Button'
import Accordion from '@/components/Accordion/Accordion'

import FieldGenerator from './FieldGenerator'
import {
  HiOutlineArrowSmDown,
  HiOutlineArrowSmUp,
  HiOutlineTrash,
  HiPlus,
} from 'react-icons/hi'

const FieldArrray = ({
  fieldsArray,
  control,
  register,
  errors,
  name,
  getValues,
}) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: name,
  })

  return (
    <div className="pl-2">
      {fields.map((item, index, arr) => {
        return (
          <div key={item.id}>
            <Accordion
              title={getValues(`${name}.${index}.title`) || '...'}
              style={'secondary'}
              className={'pt-2 relative'}
              menu={
                <div className="flex self-center mr-2 text-primary-400">
                  <HiOutlineTrash
                    className="w-5 h-5 mr-2 cursor-pointer hover:text-red-500"
                    onClick={() => remove(index)}
                  />

                  <HiOutlineArrowSmUp
                    className="w-5 h-5 mr-2 cursor-pointer hover:text-primary-500"
                    onClick={() =>
                      index === 0 ? null : move(index, index - 1)
                    }
                  />

                  <HiOutlineArrowSmDown
                    className="w-5 h-5 cursor-pointer hover:text-primary-500"
                    onClick={() =>
                      index === arr.length - 1 ? null : move(index, index + 1)
                    }
                  />
                </div>
              }
            >
              <div className="py-2">
                {fieldsArray.map((field, i) => {
                  // console.log(field.id)
                  return (
                    <FieldGenerator
                      field={field}
                      register={register}
                      errors={errors}
                      getValues={getValues}
                      control={control}
                      key={i}
                      fieldArrayData={`${name}.${index}`}
                    />
                  )
                })}
              </div>
            </Accordion>
          </div>
        )
      })}
      <div className="flex items-center justify-center w-full pt-2">
        <Button
          className="bg-opacity-0"
          style="secondary"
          onClick={() => {
            append({})
          }}
        >
          <HiPlus className="w-4 h-4 " />
        </Button>
      </div>
    </div>
  )
}

export default FieldArrray
