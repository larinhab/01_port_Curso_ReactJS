import { useState } from 'react'

const listRender = () => {
    const [list] = useState("Matheus", "Pedro", "João")

    const [ users, setUsers ] = useState([
        {id: 1, name:"Matheus", age: 31},
        {id: 2, name:"Pedro", age: 12},
        {id: 3, name:"João", age: 43}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUserState) => prevUserState.filter(( user ) => randomNumber !== user.id))
    }

    return (
        <div>
            {/*render sem key */}
            <ul>
                {list.map((item)=> (
                    <li>{item}</li>
                ))
                }
            </ul>
            {/*render com key */}
            <ul>
                {
                users.map((user) => (
                    <li key={user.id}>
                        {user.name} - { user.age } anos
                    </li>
                ))
                }
            </ul>
             {/* previus state */}
             <button onClick={ deleteRandom }>Delete Random User</button>
        </div>
    )
}

export default listRender