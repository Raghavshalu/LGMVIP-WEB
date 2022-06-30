import React from 'react'
import pic from 'C:/Users/Raghav/Pictures/lets/New folder/task2/src/Spinner-2.gif'
const Home = ({ loading, users }) => {
    return loading ? (
        <div id="main">
            <img src={pic} alt="Loading.." className="loadinggif" />
        </div>
    ) :
        (
            <div id="main">

                {users.map(user =>
                    <div className="profiles">
                        <div className="avengers">
                            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                            <p>USER ID: {user.id}</p>
                            <h1 className="name">{user.first_name} {user.last_name}</h1>
                            <p className="email">{user.email}</p>
                        </div>
                    </div>
                )
                }
            </div>
        )
}

export default Home;