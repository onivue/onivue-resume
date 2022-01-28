import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import useResumeStore from '@/stores/useResumeStore'
import Accordion from '@/components/Accordion/Accordion'
import { blocksObject } from './Blocks'
import FieldGenerator from './FieldGenerator'
import FieldArrraySection from './FieldArraySection'
import Button from '@/components/Button/Button'
import { objectCompare } from '@/lib/helper'
const blockTypes = ['career', 'tag', 'text', 'level', 'links']

const Form = () => {
  const formValues = useResumeStore((state) => state.formValues)
  const setFormValues = useResumeStore((state) => state.setFormValues)
  const defaultFormValues = useResumeStore((state) => state.defaultFormValues)
  const timeout = useRef(null)

  const {
    register,
    control,
    watch,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: formValues, mode: 'onBlur' })

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        console.log(value, name, type)
        // console.log(formValues)
        setFormValues(value)
      }, 600)
    })
    return () => subscription.unsubscribe()
  }, [watch, formValues])

  useEffect(() => {
    // reset(formValues)
  }, [formValues])

  return (
    <>
      <div className="py-4 ">
        {/* // !  --------DETAILS-------- */}
        <Accordion
          title={
            <div className="flex">
              <div className="self-center mr-2">
                {blocksObject['details']?.icon}
              </div>
              Persönliche Informationen
            </div>
          }
          style={'primary'}
          className={'mb-10'}
          defaultOpen={true}
        >
          <div className="grid w-full grid-cols-1 gap-x-4 lg:grid-cols-2">
            {blocksObject['details'].fields.map((field, i) => {
              return (
                <FieldGenerator
                  field={field}
                  register={register}
                  errors={errors}
                  getValues={getValues}
                  control={control}
                  fieldArrayData={`details`}
                  key={i}
                />
              )
            })}
            <FieldGenerator
              field={{
                label: 'Bild',
                id: 'image',
                type: 'file',
                required: false,
              }}
              register={register}
              errors={errors}
              getValues={getValues}
              control={control}
              fieldArrayData={`details`}
            />
          </div>
        </Accordion>
        {/* // !  --------BLOCKS-------- */}

        {formValues.sections.map((section, sectionIndex) => {
          return (
            <FieldArrraySection
              name={`sections.${sectionIndex}.blocks`}
              control={control}
              register={register}
              errors={errors}
              key={sectionIndex}
              getValues={getValues}
              setValue={setValue}
              section={section}
              sectionIndex={sectionIndex}
              formValues={formValues}
              blockTypes={blockTypes}
            />
          )
        })}
      </div>
      {/* // !  --------FORM FUNCTIONS-------- */}
      <div className="border-t-2 ">
        <div className="grid grid-cols-1 my-12 gap-x-4">
          <Button style="secondary" onClick={() => reset(defaultFormValues)}>
            reset form
          </Button>
        </div>
      </div>
    </>
  )
}

export default Form
