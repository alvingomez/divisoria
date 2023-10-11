import bcrypt from 'bcryptjs';

const users = [
    {
        name:'Admin',
        email:'admin@divimail.com',
        password:bcrypt.hashSync('adminadmin',10),
        isAdmin:true,
    },
    {
        name:'Alvin',
        email:'alving@divmail.com',
        password:bcrypt.hashSync('a1b2c3d4', 10),
        isAdmin:false,
    },
    {
        name:'Guest',
        email:'guest@divmail.com',
        password:bcrypt.hashSync('guest2023', 10),
    }
];
export default users;

