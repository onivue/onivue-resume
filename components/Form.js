import { useForm, Controller } from 'react-hook-form'
import Input from '@/components/Form/Input'
import InputTag from '@/components/Form/InputTag'
import TextArea from './Form/TextArea'
import useFormStore from '@/stores/useFormStore'
import { useEffect } from 'react'
import Button from '@/components/Button/Button'

const Form = () => {
  const setFormValues = useFormStore((state) => state.setFormValues)
  const formValues = useFormStore((state) => state.formValues)

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({ defaultValues: formValues })

  const onSubmit = (data) => {
    console.log(data)
    reset({}, { keepValues: true })
    setFormValues(data)
  }
  useEffect(() => {
    console.log(dirtyFields, isDirty)
  }, [formState])

  // const watchAllFields = watch()
  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => {
  //     console.log(value, name, type)
  //     setFormState(value)
  //   })
  //   return () => subscription.unsubscribe()
  // }, [watchAllFields])

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
      <form className="py-4 lg:p-4" onSubmit={handleSubmit(onSubmit)}>
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
                  dirtyFields={dirtyFields}
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
                  dirtyFields={dirtyFields}
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
                      dirtyFields={dirtyFields}
                    />
                  )}
                />
              </div>
            )
          }
        })}

        {isDirty && dirtyFields && (
          <Button className="w-full mt-6" type="submit" style="secondary">
            Änderungen Übernehmen
          </Button>
        )}
      </form>
    </>
  )
}

export default Form
