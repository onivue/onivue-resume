import { blocksObject } from './Blocks'

const BlockSelector = ({ blockTypes, setValue, append, getValues }) => {
  return (
    <div className="grid flex-wrap grid-cols-2 gap-4 mb-10 lg:grid-cols-2">
      {blockTypes.map((blockType, index) => {
        const block = blocksObject[blockType]
        return (
          <div className="text-sm" key={index}>
            <div
              className="flex p-2 border-2 rounded-lg cursor-pointer hover:bg-primary-200"
              onClick={() => {
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
