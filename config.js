const configObj = {}

let conn = 'mongodb://localhost:27017/BackendTemplate'
if(process.env.ENV=='prod')
{
    conn = 'mongodb://localhost:27017/BackendTemplate'
}

configObj.connectionString = conn

export const config = configObj;