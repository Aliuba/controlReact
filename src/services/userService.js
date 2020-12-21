export class UserService {
    url = "https://jsonplaceholder.typicode.com/users";

    getAllUsers() {
        return fetch(this.url)
            .then(value => value.json())
    }

    getUserById(id){
        return fetch(this.url+"/"+id)
            .then(value => value.json())
    }
}