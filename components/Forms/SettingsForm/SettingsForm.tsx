// @ts-nocheck
import Input from '@/components/Fields/Input';
import useResumeStore from '@/stores/useResumeStore';
import { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

const fields = [
  {
    label: 'Dokumenttitel Resume',
    id: 'titleResume',
    type: 'text',
    required: false,
  },
  {
    label: 'Dokumenttitel Cover',
    id: 'titleCover',
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
  // {
  //   label: 'Rundes Foto',
  //   id: 'roundedImage',
  //   type: 'checkbox',
  //   required: false,
  // },
];

const SettingsForm = () => {
  const resumeSettings = useResumeStore((state) => state.resumeSettings);
  const setResumeSettings = useResumeStore((state) => state.setResumeSettings);
  const timeout = useRef(null);

  const {
    register,
    watch,
    formState: { errors },
    control,
  } = useForm({ defaultValues: resumeSettings, mode: 'onBlur' });

  console.log('R', resumeSettings);
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        console.log(value, name, type);
        setResumeSettings(value);
      }, 600);
    });
    return () => subscription.unsubscribe();
  }, [watch, resumeSettings]);

  return (
    <>
      <div className="flex flex-col">
        {fields.map((field, index) => {
          return (
            <div key={field.id} className="w-full">
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
          );
        })}
        <div className="col-span-2">
          <label>
            <Controller
              control={control}
              name="roundedImage"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Input
                  label={'Rundes Foto?'}
                  errors={errors}
                  id="roundedImage"
                  type="checkbox"
                  {...register('roundedImage', { required: false })}
                  checked={value}
                  onChange={() => onChange(!value)}
                />
              )}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default SettingsForm;
