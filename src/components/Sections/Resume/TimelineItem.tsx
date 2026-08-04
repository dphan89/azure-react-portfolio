import {FC, memo} from 'react';

import type {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  const renderDate = (d: string) => {
    const match = d.match(/(https?:\/\/\S+)/);
    if (!match) return <span className="flex-1 text-sm sm:flex-none">{d}</span>;
    const url = match[0];
    const before = d.replace(url, '').trim();
    return (
      <span className="flex-1 text-sm sm:flex-none">
        {before && <>{before} </>}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          {url}
        </a>
      </span>
    );
  };
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          {renderDate(date)}
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
