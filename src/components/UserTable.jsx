import React from 'react'
const UserTable = (props)=>{
    const user = props.user
    return(
        <table class="table ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Profile</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((value) => {
            return (
              <tr key={value.id}>
                <th scope="row">{value.id}</th>
                <td><img src={value.avatar} alt={value.email} /></td>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    )
}
export default UserTable;