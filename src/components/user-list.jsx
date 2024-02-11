import React from 'react'
import "./user-list.css"

const Userlist = ({users}) => {

  users?.sort(function(usera, userb){
    return usera.followers > userb.followers ? 1 : -1;
  })

  if(users.length === 0) return 

  return (
    <div className='user-list'>
      <table>
        <tr>
          <th>Name</th>
          <th>Followers</th>
        </tr>
        {
          users.map((user, id) => {
            return (
              user.name && (<tr>
                <td>{user.name}</td>
                <td>{ user.followers}</td>
              </tr>)
            )
          })
        }
        </table>
    </div>
  )
}

export default Userlist
