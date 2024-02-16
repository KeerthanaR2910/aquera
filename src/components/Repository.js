const Repository = ({name,description,topics}) => {
    return (<div className="w-full border-1 border-solid bg-slate-200 p-4 rounded-lg flex gap-2 md:max-w-[80%]">
        <div className="flex flex-col">
            <span>Name:</span>
            <span>Description:</span>
            <span>Topics:</span>
        </div>
        <div className="flex flex-col">
            <span>{name}</span>
            <span>{description || 'None' }</span>
            <span>{topics?.join(', ') || 'None'}</span>
        </div>
    </div>);
}

export default Repository