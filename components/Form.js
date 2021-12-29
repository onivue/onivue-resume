import { useForm, Controller } from 'react-hook-form'
import Input from '@/components/Form/Input'
import InputTag from '@/components/Form/InputTag'
import TextArea from './Form/TextArea'
import useFormStore from '@/stores/useFormStore'
import { useEffect } from 'react'
import Button from '@/components/Button/Button'

const Form = () => {
  const setFormState = useFormStore((state) => state.setFormState)
  const formState = useFormStore((state) => state.formState)

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: formState })
  const onSubmit = (data) => {
    console.log(data)
    setFormState(data)
  }

  const watchAllFields = watch()
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(value, name, type)
      setFormState(value)
    })
    return () => subscription.unsubscribe()
  }, [watchAllFields])

  return (
    <>
      <form className="py-4 lg:p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <Input
            {...register('name', { required: true })}
            label="Name"
            id="name"
            type="text"
            placeholder="..."
            errors={errors}
            dot={true}
          />
        </div>

        <div className="w-full">
          <Input
            {...register('jobTitle', {
              required: true,
            })}
            label="Job Titel"
            id="jobTitle"
            type="text"
            errors={errors}
            dot={true}
          />
        </div>
        <div className="w-full">
          <TextArea
            label="Über mich"
            id="aboutMe"
            {...register('aboutMe', {
              required: true,
            })}
            errors={errors}
            dot={true}
            rows={3}
          />
        </div>
        <div className="w-full">
          <Input
            label="Radio"
            id="radio"
            {...register('radio')}
            type="radio"
            helperText="Helper text"
            errors={errors}
            dot={false}
          />
        </div>

        <div className="w-full">
          <Input
            label="Checkbox"
            id="checkbox"
            {...register('checkbox')}
            type="checkbox"
            helperText="Helper text"
            errors={errors}
            dot={false}
          />
        </div>
        <div className="w-full">
          <Controller
            control={control}
            name="skills"
            render={({ field: { value, onChange } }) => (
              <InputTag
                label="Skills"
                id="skills"
                value={value}
                setValue={onChange}
                placeholder="..."
                helperText="mit Enter bestätigen"
              />
            )}
          />
        </div>

        <Button className="mt-2" type="secondary">
          Submit
        </Button>
      </form>
    </>
  )
}

export default Form
