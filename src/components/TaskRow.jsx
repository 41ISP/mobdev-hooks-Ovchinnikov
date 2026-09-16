const TaskRow = ({title,storyPoints,setTask,id,done}) => {
    
 const handleDeleted = () => {
setTask(o => o.filter(e => e.id != id))
    } 
    const handlyStoryPoints = (diff) => {
setTask(o => o.map(e => e.id === id ? 
{...e, storyPoints : e.storyPoints + diff} :
e

) )
}

const checkedBoard = () => {
     setTask(prevTasks => prevTasks.map(e => e.id === id ? { ...e, done: !e.done } : e ) ); };

    return(
        <div className="task-row">
                            <button onClick={() => checkedBoard() } className={`task-check ${done ? " checked" : ""}`}></button>
                            <span className={`task-title ${done ? " done" : ""}`}>
                               {title}
                            </span>
                            <div className="estimate-stepper">
                                <button onClick={() => handlyStoryPoints(-1)} className="stepper-btn">−</button>
                                <span className="stepper-value">{storyPoints}</span>
                                <button onClick={() => handlyStoryPoints(1)} className="stepper-btn">+</button>
                            </div>
                            <button onClick={() => handlyStoryPoints(2)} className="quick-bump">+2</button>
                            <button onClick={handleDeleted} className="icon-danger">✕ </button>
                        </div>
    )
}
export default TaskRow