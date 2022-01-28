import { useFieldArray } from 'react-hook-form'
import Button from '@/components/Button/Button'
import Accordion from '@/components/Accordion/Accordion'
import { HiOutlineTrash, HiPlus } from 'react-icons/hi'
import FieldGenerator from './FieldGenerator'

const FieldArrray = ({
  fieldsArray,
  control,
  register,
  errors,
  name,
  getValues,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  })

  return (
    <div className="pl-2">
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <Accordion
              title={getValues(`${name}.${index}.title`) || '...'}
              style={'secondary'}
              className={'pt-2 relative'}
              menu={
                <HiOutlineTrash
                  className="w-5 h-5 mr-4 cursor-pointer hover:text-red-500"
                  onClick={() => remove(index)}
                />
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
