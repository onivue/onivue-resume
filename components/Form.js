import { useForm, Controller } from 'react-hook-form'
import Input from '@/components/Form/Input'
import InputTag from '@/components/Form/InputTag'
import TextArea from './Form/TextArea'
import useFormStore from '@/stores/useFormStore'
import { useEffect, useRef } from 'react'
import Button from '@/components/Button/Button'

const Form = () => {
  const setFormValues = useFormStore((state) => state.setFormValues)
  const formValues = useFormStore((state) => state.formValues)
  const timeout = useRef(null)

  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: formValues, mode: 'onChange' })

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        console.log(value, name, type)
        setFormValues(value)
      }, 600)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const fields = [
    {
      label: 'Name',
      id: 'name',
      type: 'text',
      required: true,
    },
    {
      label: 'Job Titel',
      id: 'jobTitle',
      type: 'text',
      required: true,
    },
    {
      label: 'Adresse',
      id: 'address',
      type: 'text',
      required: false,
    },
    {
      label: 'PLZ',
      id: 'plz',
      type: 'text',
      required: false,
    },
    {
      label: 'Telefon',
      id: 'phone',
      type: 'text',
      required: false,
    },
    {
      label: 'Email',
      id: 'mail',
      type: 'text',
      required: false,
    },
    {
      label: 'Über mich',
      id: 'aboutMe',
      type: 'textarea',
      required: true,
      rows: 3,
    },
    {
      label: 'Skills',
      id: 'skills',
      type: 'taginput',
      required: false,
      helperText: 'Mit Enter bestätigen',
    },
  ]

  return (
    <>
      <form className="py-4 lg:p-4">
        {fields.map((field) => {
          if (
            field.type === 'text' ||
            field.type === 'checkbox' ||
            field.type === 'radio'
          ) {
            return (
              <div className="w-full " key={field.id}>
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
      </form>
    </>
  )
}

export default Form
