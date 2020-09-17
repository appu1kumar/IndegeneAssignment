import React from 'react';
import './UsersList.css';

const UsersList = (props) => {
    const usersList = props.usersList;

    return(
        <div className='main'>
            <table className='content-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map((list, index) => (
                        <tr key={list.index}>
                            <td>{list.name}</td>
                            <td>{list.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default UsersList;