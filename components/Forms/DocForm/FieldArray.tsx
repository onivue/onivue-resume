// @ts-nocheck
import Accordion from '@/components/Accordion/Accordion';
import Button from '@/components/Button/Button';
import { useFieldArray } from 'react-hook-form';

import { HiOutlineArrowSmDown, HiOutlineArrowSmUp, HiOutlineTrash, HiPlus } from 'react-icons/hi';
import FieldGenerator from './FieldGenerator';

const FieldArrray = ({ fieldsArray, control, register, errors, name, getValues }) => {
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: name,
  });

  return (
    <div className="pl-2">
      {fields.map((item, index, arr) => {
        return (
          <div key={item.id}>
            <Accordion
              title={getValues(`${name}.${index}.title`) || '...'}
              style={'secondary'}
              className={'relative pt-2'}
              menu={
                <div className="mr-2 flex self-center text-primary-400">
                  <HiOutlineTrash
                    className="mr-2 h-5 w-5 cursor-pointer hover:text-red-500"
                    onClick={() => remove(index)}
                  />

                  <HiOutlineArrowSmUp
                    className="mr-2 h-5 w-5 cursor-pointer hover:text-primary-500"
                    onClick={() => (index === 0 ? null : move(index, index - 1))}
                  />

                  <HiOutlineArrowSmDown
                    className="h-5 w-5 cursor-pointer hover:text-primary-500"
                    onClick={() => (index === arr.length - 1 ? null : move(index, index + 1))}
                  />
                </div>
              }
            >
              <div className="py-2">
                {fieldsArray.map((field, i) => {
                  // console.log(field.id)
                  return (
                    <FieldGenerator
                      field={field}
                      register={register}
                      errors={errors}
                      getValues={getValues}
                      control={control}
                      key={i}
                      fieldArrayData={`${name}.${index}`}
                    />
                  );
                })}
              </div>
            </Accordion>
          </div>
        );
      })}
      <div className="flex w-full items-center justify-center pt-2">
        <Button
          className="bg-opacity-0"
          style="secondary"
          onClick={() => {
            append({});
          }}
        >
          <HiPlus className="h-4 w-4 " />
        </Button>
      </div>
    </div>
  );
};

export default FieldArrray;
