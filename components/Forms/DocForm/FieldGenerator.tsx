// @ts-nocheck
import FileUpload from '@/components/Fields/FileUpload';
import Input from '@/components/Fields/Input';
import InputTag from '@/components/Fields/InputTag';
import TextArea from '@/components/Fields/TextArea';
import { Controller } from 'react-hook-form';
import FieldArrray from './FieldArray';

const FieldGenerator = ({ field, register, errors, getValues, control, fieldArrayData }) => {
  let fieldID;
  if (fieldArrayData) {
    fieldID = `${fieldArrayData}.${field.id}`;
  } else {
    fieldID = field.id;
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
    );
  }

  if (field.type === 'text' || field.type === 'checkbox' || field.type === 'radio') {
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
    );
  }

  if (field.type === 'rangeinput') {
    return <input {...register(fieldID, { required: field.required })} type="range" max="100" step={10} />;
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
    );
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
    );
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
              accept="image/png, image/jpeg"
            />
          )}
        />
      </div>
    );
  }
};

export default FieldGenerator;
