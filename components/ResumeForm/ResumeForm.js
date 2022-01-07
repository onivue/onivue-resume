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
                {fieldsArray.map((field, i) => {
                  return (
                    <Field
                      field={field}
                      register={register}
                      errors={errors}
                      getValues={getValues}
                      control={control}
                      key={i}
                      fieldArrayData={`${name}.${index}`}
                    />
                  )
                  // return (
                  //   <Input
                  //     {...register(`${name}.${index}.${field.id}`)}
                  //     label={field.label}
                  //     id={`${name}.${index}.${field.id}`}
                  //     type={'text'}
                  //     placeholder={'...'}
                  //     helperText={''}
                  //     dot={''}
                  //     errors={errors}
                  //     key={i}
                  //   />
                  // )
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
            append({})
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
        {fieldGroups.map((fieldGroup, i) => {
          return (
            <Accordion
              title={fieldGroup.groupName}
              style={'primary'}
              className={'pt-2 mb-4'}
              key={i}
              defaultOpen={fieldGroup.defaultOpen}
            >
              <div className="py-2">
                {fieldGroup.fields.map((field, i) => {
                  return (
                    <Field
                      field={field}
                      key={i}
                      register={register}
                      errors={errors}
                      getValues={getValues}
                      control={control}
                    />
                  )
                })}
              </div>
            </Accordion>
          )
        })}
      </div>
    </>
  )
}

const Field = ({
  field,
  register,
  errors,
  getValues,
  control,
  fieldArrayData,
}) => {
  let fieldID
  if (fieldArrayData) {
    fieldID = `${fieldArrayData}.${field.id}`
  } else {
    fieldID = field.id
  }

  if (field.type === 'fieldarray') {
    return (
      <FieldArrray
        name={field.name}
        fieldsArray={field.fieldsArray}
        control={control}
        register={register}
        errors={errors}
        getValues={getValues}
      />
    )
  }

  if (
    field.type === 'text' ||
    field.type === 'checkbox' ||
    field.type === 'radio'
  ) {
    return (
      <div className="w-full">
        <Input
          {...register(fieldID, { required: field.required })}
          label={field.label}
          id={fieldID}
          type={field.type}
          placeholder={field.placeholder || '...'}
          helperText={field.helperText}
          dot={field.required}
          errors={errors}
        />
      </div>
    )
  }

  if (field.type === 'rangeinput') {
    return (
      <input
        {...register(fieldID, { required: field.required })}
        type="range"
        max="100"
      />
    )
  }

  if (field.type === 'textarea') {
    return (
      <div className="w-full ">
        <TextArea
          label={field.label}
          id={fieldID}
          {...register(fieldID, {
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
      <div className="w-full">
        <Controller
          control={control}
          name={fieldID}
          render={({ field: { value, onChange } }) => (
            <InputTag
              label={field.label}
              id={fieldID}
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
}

export default Form
