import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import useResumeStore from '@/stores/useResumeStore'
import Input from '@/components/Fields/Input'

const fields = [
  {
    label: 'Dokumenttitel',
    id: 'title',
    type: 'text',
    required: false,
  },

  {
    label: 'Betreff',
    id: 'subject',
    type: 'text',
    required: false,
  },
  {
    label: 'Autor',
    id: 'author',
    type: 'text',
    required: false,
  },
  {
    label: 'Schlüsselwörter',
    id: 'keywords',
    type: 'text',
    required: false,
  },
  {
    label: 'Sprache',
    id: 'language',
    type: 'text',
    required: false,
  },
]

const SettingsForm = () => {
  const resumeMetadata = useResumeStore((state) => state.resumeMetadata)
  const setResumeMetadata = useResumeStore((state) => state.setResumeMetadata)
  const timeout = useRef(null)

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: resumeMetadata, mode: 'onBlur' })

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => {
        console.log(value, name, type)
        setResumeMetadata(value)
      }, 600)
    })
    return () => subscription.unsubscribe()
  }, [watch, resumeMetadata])

  return (
    <>
      <div className="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <Input
                {...register(field.id, { required: field.required })}
                label={field.label}
                id={field.id}
                type={field.type}
                placeholder={'...'}
                helperText={''}
                dot={field.required}
                errors={errors}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SettingsForm
