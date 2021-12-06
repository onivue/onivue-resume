import { FormProvider, useForm } from 'react-hook-form'
import Input from '@/components/Form/Input'
const Form = () => {
  const methods = useForm()
  const { handleSubmit } = methods
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1 className="mt-10 text-4xl font-semibold text-center text-white ">
        Post a job
      </h1>
      <FormProvider {...methods}>
        <form
          className="px-12 py-10 m-2 mt-10 bg-white rounded"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="input2"
            label="Label"
            helperText="Helper text"
            validation={{ required: 'Custom error message' }}
          />
          <button
            className="w-full px-6 py-3 mt-4 font-semibold text-green-100 bg-green-400 border rounded hover:bg-green-600 text-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </>
  )
}

export default Form
