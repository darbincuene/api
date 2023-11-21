 import { useFetch } from './usefetch'
import './App.css'

function App() {
  const { data, loading, error}=useFetch("https://jsonplaceholder.typicode.com/users")
  
  return (
    <>
      <div>
        <h1>hola darbin cuene</h1>
        <div>
          <ul>
            {error&& <li>Error: {error}</li>}
            {loading&& <li>loading...</li>}
            {data?.map((user)=> (
            <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
     
    </>
  )
}

export default App
