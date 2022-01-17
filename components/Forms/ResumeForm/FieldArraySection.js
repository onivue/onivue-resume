import { useFieldArray } from 'react-hook-form'
import Accordion from '@/components/Accordion/Accordion'
import { blocksObject } from './Blocks'
import FieldArrray from './FieldArray'
import FieldGenerator from './FieldGenerator'
import BlockMenu from '@/components/BlockMenu/BlockMenu'

const FieldArrraySection = ({
  control,
  register,
  errors,
  name,
  getValues,
  setValue,
  section,
  sectionIndex,
  formValues,
}) => {
  const { remove, move } = useFieldArray({
    control,
    name: name,
  })

  return (
    <div className="border-t-2" key={sectionIndex}>
      {section.blocks.map((block, blockIndex) => {
        return (
          <div className="" key={blockIndex}>
            <Accordion
              title={`🛠 ${block.title}`}
              // title={
              //   <div className="w-full">
              //     <input
              //       {...register(
              //         `sections.${sectionIndex}.blocks.${blockIndex}.title`,
              //         {
              //           required: false,
              //         },
              //       )}
              //       className="w-full p-0 bg-transparent border-0 rounded outline-none "
              //       type={'text'}
              //       name={'test'}
              //       id={'test'}
              //       onClick={() => console.log('test')}
              //     />
              //   </div>
              // }
              menu={
                <BlockMenu
                  moveUpFunction={
                    blockIndex === 0
                      ? null
                      : () => {
                          move(blockIndex, blockIndex - 1)
                        }
                  }
                  moveDownFunction={
                    blockIndex === section.blocks.length - 1
                      ? null
                      : () => {
                          move(blockIndex, blockIndex + 1)
                        }
                  }
                  removeFunction={() => {
                    remove(blockIndex)
                  }}
                  changeSectionFunction={() => {
                    let indexnewSection
                    if (sectionIndex === 0) {
                      indexnewSection = 1
                    }
                    if (sectionIndex === 1) {
                      indexnewSection = 0
                    }
                    setValue(`sections.${indexnewSection}.blocks`, [
                      ...formValues.sections[indexnewSection].blocks,
                      formValues.sections[sectionIndex].blocks[blockIndex],
                    ])
                    remove(blockIndex)
                  }}
                />
              }
              style={'primary'}
              className={'pt-2 mb-4'}
              key={blockIndex}
              defaultOpen={block.defaultOpen || false}
            >
              {blocksObject[block.type].type === 'fieldarray' ? (
                <FieldArrray
                  name={`sections.${sectionIndex}.blocks.${blockIndex}.values`}
                  fieldsArray={blocksObject[block.type].fields}
                  control={control}
                  register={register}
                  errors={errors}
                  getValues={getValues}
                />
              ) : (
                blocksObject[block.type].fields.map((field, i) => {
                  return (
                    <FieldGenerator
                      field={field}
                      key={i}
                      register={register}
                      errors={errors}
                      getValues={getValues}
                      control={control}
                      fieldArrayData={`sections.${sectionIndex}.blocks.${blockIndex}.values.0`}
                    />
                  )
                })
              )}
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}

export default FieldArrraySection
