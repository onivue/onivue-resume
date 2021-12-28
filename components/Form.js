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
    formState: { errors },
  } = useForm({ defaultValues: formState })
  const onSubmit = (data) => {
    console.log(data)
    setFormState(data)
  }
  return (
    <>
      <form className="px-4 py-4 m-2 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap sm:-mx-3">
          <div className="w-full sm:p-3 ">
            <Input
              {...register('name', { required: true })}
              label="Name"
              id="name"
              type="text"
              helperText=""
              defaultValue="Default Value"
              placeholder="..."
              errors={errors}
              dot={true}
            />
          </div>

          <div className="w-full sm:p-3">
            <Input
              {...register('jobTitle', {
                required: true,
              })}
              label="Job Titel"
              id="jobTitle"
              type="text"
              helperText=""
              defaultValue=""
              placeholder=""
              errors={errors}
              dot={true}
            />
          </div>
          <div className="w-full sm:p-3">
            <TextArea
              label="Über mich"
              id="aboutMe"
              {...register('aboutMe', {
                required: true,
              })}
              type="number"
              helperText="Helper text"
              defaultValue=""
              placeholder=""
              errors={errors}
              dot={true}
              rows={3}
            />
          </div>
          <div className="w-full sm:px-3">
            <Input
              label="Radio"
              id="radio"
              {...register('radio')}
              type="radio"
              helperText="Helper text"
              defaultValue=""
              placeholder="..."
              errors={errors}
              dot={false}
            />
          </div>

          <div className="w-full sm:px-3">
            <Input
              label="Checkbox"
              id="checkbox"
              {...register('checkbox')}
              type="checkbox"
              helperText="Helper text"
              defaultValue="Default Value"
              placeholder=""
              errors={errors}
              dot={false}
            />
          </div>
          <div className="w-full sm:px-3">
            <Controller
              control={control}
              name="skills"
              render={({ field: { value, onChange } }) => (
                <InputTag id="skills" value={value} setValue={onChange} />
              )}
            />
          </div>
        </div>
        <Button className="mt-2" type="secondary">
          Submit
        </Button>
        <Button className="mt-2" type="primary">
          Submit
        </Button>
      </form>
    </>
  )
}

export default Form
