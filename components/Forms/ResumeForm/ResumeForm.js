import { useEffect, useRef, useState } from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import Input from '@/components/Fields/Input'
import InputTag from '@/components/Fields/InputTag'
import TextArea from '@/components/Fields/TextArea'
import useResumeStore from '@/stores/useResumeStore'
import Button from '@/components/Button/Button'
import Accordion from '@/components/Accordion/Accordion'
import { HiOutlineTrash, HiPlus } from 'react-icons/hi'
import { fieldGroups } from '@/components/Forms/ResumeForm/data'
import FileUpload from '@/components/Fields/FileUpload'
import { blocksObject, personalInformation } from './Blocks'

const Form = () => {
  const formValues = useResumeStore((state) => state.formValues)
  const setFormValues = useResumeStore((state) => state.setFormValues)
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
        {/* // !  --------DETAILS-------- */}
        <Accordion
          title={'Persönliche Informationen'}
          style={'primary'}
          className={'pt-2 mb-4'}
          defaultOpen={true}
        >
          {blocksObject.details.fields.map((field, i) => {
            return (
              <FieldGenerator
                field={field}
                key={i}
                register={register}
                errors={errors}
                getValues={getValues}
                control={control}
                fieldArrayData={`details`}
              />
            )
          })}
        </Accordion>
        {/* // !  --------BLOCKS-------- */}
        {formValues.blocks.map((block, blockIndex) => {
          return (
            <div className="" key={blockIndex}>
              <Accordion
                title={`🛠 ${block.title}`}
                style={'primary'}
                className={'pt-2 mb-4'}
                key={blockIndex}
                defaultOpen={block.defaultOpen || false}
              >
                {blocksObject[block.type].type === 'fieldarray' ? (
                  <FieldArrray
                    name={`blocks.${blockIndex}.values`}
                    fieldsArray={blocksObject[block.type].fields}
                    control={control}
                    register={register}
                    errors={errors}
                    getValues={getValues}
                  />
                ) : (
                  blocksObject[block.type].fields.map((field, i) => {
                    return (
                      <FieldGenerator
                        field={field}
                        key={i}
                        register={register}
                        errors={errors}
                        getValues={getValues}
                        control={control}
                        fieldArrayData={`blocks.${blockIndex}.values.0`}
                      />
                    )
                  })
                )}
              </Accordion>
            </div>
          )
        })}

        {/* 
          // !  --------------------------------
        */}
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
                    <FieldGenerator
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

const FieldGenerator = ({
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
  // console.log(fieldArrayData, field.id)

  if (field.type === 'fieldarray') {
    return (
      <FieldArrray
        name={fieldArrayData ? `${fieldArrayData}.${field.name}` : field.name}
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
  if (field.type === 'file') {
    return (
      <div className="w-full">
        <Controller
          control={control}
          name={fieldID}
          render={({ field: { value, onChange } }) => (
            <FileUpload
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

const FieldArrraySolo = ({
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
              <Button
                type="button"
                onClick={() => remove(index)}
                className="bg-red-300"
              >
                <HiOutlineTrash className="w-5 h-5" />
              </Button>
            </div>
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

export default Form
