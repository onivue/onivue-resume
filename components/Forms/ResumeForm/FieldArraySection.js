import { useFieldArray } from 'react-hook-form'
import Accordion from '@/components/Accordion/Accordion'
import { blocksObject } from './Blocks'
import FieldArrray from './FieldArray'
import FieldGenerator from './FieldGenerator'
import BlockMenu from '@/components/BlockMenu/BlockMenu'
import { HiCheck, HiWifi } from 'react-icons/hi'
import { useState } from 'react'

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
  const { fields, remove, move } = useFieldArray({
    control,
    name: name,
    // shouldUnregister: true,
  })

  const [showRename, setShowRename] = useState(false)
  return (
    <div className="border-t-2" key={sectionIndex}>
      {fields.map((block, blockIndex) => {
        return (
          <div className="" key={block.id}>
            <Accordion
              title={getValues(
                `sections.${sectionIndex}.blocks.${blockIndex}.title`,
              )}
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
              className={'pt-2 mb-4'}
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
    </div>
  )
}

export default FieldArrraySection
