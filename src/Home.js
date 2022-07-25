export const Home = () => {

  const handleClick = () => console.log('Button clicked')
  const handleClick2 = (obj, e) => console.log(obj + ' licked by a', e.type);
  const handleNight = (animal, e) => console.log(animal + ' is going to RUN and ' + e.type);

  return (
    <div className="home">
        <h2>Homepage</h2>
    <button onClick={handleClick}>Click me</button>
    <button onClick={(e) => handleClick2('Penis', e)}>Lick me again</button>
    <button onClick={(e) => handleNight('Cat', e)}> Night has come</button>        
    </div>
  )

};