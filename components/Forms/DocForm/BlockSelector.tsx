import { blocksObject } from './Blocks';

const BlockSelector = ({ blockTypes, setValue, append, getValues }) => {
  return (
    <div className="mb-10 grid grid-cols-2 flex-wrap gap-4 lg:grid-cols-2 ">
      {blockTypes.map((blockType, index) => {
        const block = blocksObject[blockType];
        return (
          <div className="text-sm" key={index}>
            <div
              className="flex cursor-pointer rounded-lg border-2 p-2 hover:border-primary-300 hover:bg-primary-200 dark:hover:text-black"
              onClick={() => {
                append({
                  title: block.displayName,
                  type: blockType,
                  values: [],
                });
              }}
            >
              <div className="mr-2">{block.icon}</div>
              <div>{block.displayName}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlockSelector;
