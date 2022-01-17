import { useEffect, useRef } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import useResumeStore from '@/stores/useResumeStore'
import Accordion from '@/components/Accordion/Accordion'
import { HiOutlineTrash, HiPlus } from 'react-icons/hi'
import { fieldGroups } from '@/components/Forms/ResumeForm/data'
import { blocksObject } from './Blocks'
import FieldGenerator from './FieldGenerator'
import FieldArrraySection from './FieldArraySection'

const Form = () => {
  const formValues = useResumeStore((state) => state.formValues)
  const setFormValues = useResumeStore((state) => state.setFormValues)
  const timeout = useRef(null)

  const {
    register,
    control,
    watch,
    getValues,
    setValue,
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
      <div className="py-4 ">
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
            />
          )
        })}

        {/* 
          // !  --------------------------------
        */}
      </div>
    </>
  )
}

export default Form
