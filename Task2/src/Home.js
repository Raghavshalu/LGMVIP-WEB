import React from 'react'

const Home = ({DataisLoaded, items}) => {
  return DataisLoaded?(
      <></>
  ):(
      <>{
        items.map((items)=>(
            <div className="card">
                        <div className="users">
                            <img src={items.avatar} alt={items.avatar} className="avatar"></img>
                            <h1 className="name">{items.first_name} {items.last_name}</h1>
                            <p className="email">{items.email}</p>
                            <p>ID: {items.id}</p>
                        </div>
                    </div>
        ))
      }
      </>
  )
}

export default Home