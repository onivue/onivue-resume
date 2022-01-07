import { useEffect, useRef } from 'react'
import { useForm, Controller, useFieldArray, useWatch } from 'react-hook-form'
import Input from '@/components/Form/Input'
import InputTag from '@/components/Form/InputTag'
import TextArea from '@/components/Form/TextArea'
import useFormStore from '@/stores/useFormStore'
import Button from '@/components/Button/Button'
import Accordion from '@/components/Accordion'
import { objectCompare } from '@/lib/helper'
import { HiOutlineTrash, HiPlus } from 'react-icons/hi'
import { fieldGroups } from '@/components/ResumeForm/data'

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
    <>
      {fields.map((item, index) => {
        return (
          <div key={item.id}>
            <Accordion
              title={getValues(`${name}.${index}.title`) || '...'}
              style={'secondary'}
              className={'pt-4 pl-2'}
            >
              <div className="py-2">
                {fieldsArray.map((f, i) => {
                  return (
                    <Input
                      {...register(`${name}.${index}.${f.id}`)}
                      label={f.label}
                      id={`${name}.${index}.${f.id}`}
                      type={'text'}
                      placeholder={'...'}
                      helperText={''}
                      dot={''}
                      errors={errors}
                      key={i}
                    />
                  )
                })}
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-300"
                >
                  <HiOutlineTrash className="w-5 h-5" />
                </Button>
              </div>
            </Accordion>
          </div>
        )
      })}
      <div className="flex items-center justify-center w-full">
        <Button
          className="mt-4 ml-2"
          style="secondary"
          rounded
          onClick={() => {
            append({ title: 'X' })
          }}
        >
          <HiPlus />
        </Button>
      </div>
    </>
  )
}

const Form = () => {
  const formValues = useFormStore((state) => state.formValues)
  const setFormValues = useFormStore((state) => state.setFormValues)
  const timeout = useRef(null)

  const {
    register,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: formValues, mode: 'onBlur' })

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        console.log(value, name, type)
        setFormValues(value)
      }, 600)
    })
    return () => subscription.unsubscribe()
  }, [watch, formValues])

  return (
    <>
      <div className="py-4 lg:p-4 ">
        <input
          type="range"
          max="100"
          className=""
          {...register('slider', { required: false })}
        />
        {fieldGroups.map((fieldGroup, i) => {
          return (
            <Accordion
              title={fieldGroup.groupName}
              style={'primary'}
              className={'pt-2'}
              key={i}
              defaultOpen={fieldGroup.defaultOpen}
            >
              <div className="py-2">
                {fieldGroup.fields.map((field, i) => {
                  if (field.type === 'fieldarray') {
                    return (
                      <FieldArrray
                        name={field.name}
                        fieldsArray={field.fieldsArray}
                        control={control}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        key={i}
                      />
                    )
                  }

                  if (
                    field.type === 'text' ||
                    field.type === 'checkbox' ||
                    field.type === 'radio'
                  ) {
                    return (
                      <div className="w-full" key={field.id}>
                        <Input
                          {...register(field.id, { required: field.required })}
                          label={field.label}
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder || '...'}
                          helperText={field.helperText}
                          dot={field.required}
                          errors={errors}
                        />
                      </div>
                    )
                  }

                  if (field.type === 'textarea') {
                    return (
                      <div className="w-full " key={field.id}>
                        <TextArea
                          label={field.label}
                          id={field.id}
                          {...register('aboutMe', {
                            required: true,
                          })}
                          placeholder={field.placeholder || '...'}
                          helperText={field.helperText}
                          dot={field.required}
                          rows={field.rows || 3}
                          errors={errors}
                        />
                      </div>
                    )
                  }

                  if (field.type === 'taginput') {
                    return (
                      <div className="w-full" key={field.id}>
                        <Controller
                          control={control}
                          name={field.id}
                          render={({ field: { value, onChange } }) => (
                            <InputTag
                              label={field.label}
                              id={field.id}
                              placeholder={field.placeholder || '...'}
                              helperText={field.helperText}
                              dot={field.required}
                              setValue={onChange}
                              value={value}
                            />
                          )}
                        />
                      </div>
                    )
                  }
                })}
              </div>
            </Accordion>
          )
        })}
        {/* <div className="w-full">
          <Input
            {...register('NUMERUS', { required: true })}
            label={'NUMERUS'}
            id={'NUMERUS'}
            type={'text'}
            placeholder={'...'}
            helperText={''}
            dot={true}
            errors={errors}
            defaultValue={'Test'}
            readOnly
          />
        </div> */}
      </div>
    </>
  )
}

const Field = ({ field, register, errors }) => {
  return <></>
}

export default Form
