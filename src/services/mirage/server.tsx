import {Server ,Model ,Factory ,belongsTo ,hasMany ,Response} from 'miragejs'
import user from '../routes/user'

export const handleErrors = (error: any, message = 'An error ocurred') => {
    return new Response(400, undefined, {
      data: {
        message,
        isError: true,
      },
    });
  };

  export const setupServer =(env? : string) : Server =>{
    return new Server({
        environment : env ?? 'development',

        models :{
            user : Model.extend({
                diary : hasMany(),
            }),
            diary : Model.extend({
                entry : hasMany(),
                dairy : belongsTo()
            }),
            entry : Model.extend({
                diary : belongsTo(),
            })
        },

        factories : {
            user : Factory.extend({
                username : "test",
                password : "12345",
                email : "diary@gmail.com"
            })
        },

        seeds : (server) : any =>{
            server.create('user')
        },
        routes() : void{
            this.urlPrefix = "https://localhost:3000"

            this.post('/login',user.login)
            this.post('/signup',user.signUp)

        }        
    })
}