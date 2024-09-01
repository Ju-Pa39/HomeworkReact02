
function App() {
    const [counters, setCounters] = React.useState([])

    let sum = counters.reduce((a, crru) => {
        return a + crru.number
    }, 0)

    const updateCounter = (id, n) => {
        console.log(id)
        let idx = counters.findIndex(el => el.id === id)
        console.log(id)
        const newCounters = [...counters]
        newCounters[idx].number += n
        setCounters(newCounters)
    }

    const deClick = (id) => {
        console.log(id)
        let idx = counters.findIndex(el => el.id === id)
        let newCounters = [...counters]
        newCounters.splice(idx, 1)
        setCounters(newCounters)
    }

    function AddCounter() {
        let newCounters = [...counters]
        let nextId = counters.length + 1
        newCounters.push({ id: { nextId }, number: 0 })
        setCounters(newCounters)
    }

    return (
        <div className='app'>
            <h1 className="show-sum">Sum = {sum} </h1>
            <button onClick={AddCounter} className="btn-add">Add Counter</button>
            <hr />
            {counters.map(el => (
                <Counter key={el.id} item={el} updateCounter={updateCounter} deClick={deClick} />
            ))

            }
        </div>
    )
}

function Counter(props) {
    const { item, updateCounter, deClick } = props
    return (
        <div className="counter">
            <button onClick={() => updateCounter(item.id, -1)} className="btn btn-dec">-</button>
            <h3 className="number">{item.number}</h3>
            <button onClick={() => updateCounter(item.id, +1)} className="btn btn-inc">+</button>
            <button onClick={() => updateCounter(item.id, -item.number)} className="btn btn-clr">C</button>
            <button onClick={() => deClick(item.id)} className="btn btn-del">X</button>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)