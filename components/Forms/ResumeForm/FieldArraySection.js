import { useFieldArray } from 'react-hook-form'
import Accordion from '@/components/Accordion/Accordion'
import { blocksObject } from './Blocks'
import FieldArrray from './FieldArray'
import FieldGenerator from './FieldGenerator'
import BlockMenu from '@/components/BlockMenu/BlockMenu'
import { HiCheck } from 'react-icons/hi'
import { useState } from 'react'
import BlockSelector from './BlockSelector'

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
  blockTypes,
}) => {
  const { fields, remove, move, append } = useFieldArray({
    control,
    name: name,
  })

  const [showRename, setShowRename] = useState(false)
  return (
    <div className="border-t-2" key={sectionIndex}>
      <h3 className="mx-2 my-4 text-xl font-bold">{section.name}</h3>
      {fields.map((block, blockIndex) => {
        return (
          <div key={block.id}>
            <Accordion
              title={
                <div className="flex">
                  <div className="self-center mx-2">
                    {blocksObject[block.type]?.icon}
                  </div>

                  {getValues(
                    `sections.${sectionIndex}.blocks.${blockIndex}.title`,
                  )}
                </div>
              }
              showRename={showRename}
              renameInput={
                <div className="relative w-full px-2">
                  <input
                    className="w-full pl-2 pr-10 rounded outline-none focus:ring-primary-600 focus:ring-2"
                    {...register(
                      `sections.${sectionIndex}.blocks.${blockIndex}.title`,
                    )}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        setShowRename(!showRename)
                      }
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center mr-4">
                    <HiCheck
                      className="cursor-pointer hover:scale-110 hover:text-primary-600"
                      onClick={() => setShowRename(!showRename)}
                    />
                  </div>
                </div>
              }
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
                  editFunction={() => setShowRename(!showRename)}
                />
              }
              style={'primary'}
              className={'mb-4'}
              key={blockIndex}
              defaultOpen={block.defaultOpen || false}
            >
              {blocksObject[block.type]?.type === 'fieldarray' ? (
                <FieldArrray
                  name={`sections.${sectionIndex}.blocks.${blockIndex}.values`}
                  fieldsArray={blocksObject[block.type].fields}
                  control={control}
                  register={register}
                  errors={errors}
                  getValues={getValues}
                />
              ) : (
                blocksObject[block.type]?.fields.map((field, i) => {
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
      <BlockSelector
        blockTypes={blockTypes}
        setValue={setValue}
        getValues={getValues}
        append={append}
      />
    </div>
  )
}

export default FieldArrraySection
