const Button = ({onClick, label}) => {
    return <button onClick={onClick} className='appearance-none bg-purple-400 p-2 rounded-lg'>{label}</button>
}
export default Button