export default function About(){
    return (
        <div className="flex text-green-400 text-2xl justify-center items-center h-screen">
            <h1>About Page</h1>
        </div>
    )
}

































// interface UserProps {
//     id: number;
//     name: string;
// }

// const UserPage = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users: UserProps[] = await response.json();
//   return (
//     <>
//         <h1>Users</h1>
//         <ul>
//             {users.map(user => 
//                 <li key={user.id}>{user.name}</li>
//             )}
//         </ul>
//     </>
//   )
// }

// export default UserPage;