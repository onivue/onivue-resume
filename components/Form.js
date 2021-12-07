import { useForm } from 'react-hook-form'
import Input from '@/components/Form/Input'
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="pt-8 text-4xl font-semibold text-center text-white">
        CV Settings
      </div>
      <form
        className="px-4 py-10 m-2 mt-10 bg-white rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap sm:-mx-3">
          <div className="w-full sm:px-3 xl:w-1/2">
            <Input
              label="Vorname"
              id="vorname"
              {...register('vorname', { required: 'Vorname is required' })}
              type="text"
              helperText="Helper text"
              defaultValue=""
              errors={errors}
              dot={true}
            />
          </div>
          <div className="w-full sm:px-3 xl:w-1/2">
            <Input
              label="Name"
              id="name"
              {...register('name', { required: 'Name is required' })}
              type="text"
              helperText="Helper text"
              defaultValue="Default Value"
              errors={errors}
              dot={true}
            />
          </div>
          <div className="w-full sm:px-3">
            <Input
              label="Description"
              id="description"
              {...register('description', {
                required: 'Description is required',
              })}
              type="text"
              helperText="Helper text"
              defaultValue="Default Value"
              errors={errors}
              dot={true}
            />
          </div>
        </div>
        <button
          className="px-4 py-1 mt-8 text-white bg-black rounded shadow active:bg-gray-900 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Form
