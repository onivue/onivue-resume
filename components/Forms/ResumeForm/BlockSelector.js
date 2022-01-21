import { blocksObject } from './Blocks'

const BlockSelector = ({ blockTypes, setValue, append, getValues }) => {
  return (
    <div className="flex flex-wrap mb-4">
      {blockTypes.map((blockType, index) => {
        const block = blocksObject[blockType]
        return (
          <div className="w-1/2 text-sm" key={index}>
            <div
              className="flex p-2 mx-4 my-2 border-2 rounded-lg cursor-pointer hover:bg-primary-300"
              onClick={() => {
                // setValue('sections.1.blocks', [
                //   ...getValues('sections.1.blocks'),
                //   {
                //     title: 'BITTE TITEL EINGEBEN',
                //     type: blockType,
                //     values: [],
                //   },
                // ])
                append({
                  title: block.displayName,
                  type: blockType,
                  values: [],
                })
              }}
            >
              <div className="mr-2">{block.icon}</div>
              <div>{block.displayName}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BlockSelector
