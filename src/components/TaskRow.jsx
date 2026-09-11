const TaskRow = ({title,storyPoints,setTask,id}) => {
    
 const handleDeleted = () => {
setTask(o => o.filter(e => e.id != id))
    } 
    
    return(
        <div className="task-row">
                            <button className="task-check"></button>
                            <span className="task-title">
                               {title}
                            </span>
                            <div className="estimate-stepper">
                                <button className="stepper-btn">−</button>
                                <span className="stepper-value">{storyPoints}</span>
                                <button className="stepper-btn">+</button>
                            </div>
                            <button className="quick-bump">+2</button>
                            <button onClick={handleDeleted} className="icon-danger">✕</button>
                        </div>
    )
}
export default TaskRow