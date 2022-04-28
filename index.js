function App(){
    const [count,setCount] = React.useState(0);
    return (
        <div>
            <h1>Simple Counter App</h1>
            <p className="counter">{count}</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
    )
}

// Render React component to the DOM
ReactDOM.render(<App/>,document.getElementById('root'));