export const Home = () => {

  const handleClick = (e) => console.log('Button clicked', e);

  // удалить и повторить заново
  const handleClickAgain = (obj, e) => {
    console.log(`${obj} licked  ${e.type}`)
  };

  return (
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>

        <button onClick={(e) => handleClickAgain('Penis', e)}>Lick me again</button>
        
    </div>
  )
}
