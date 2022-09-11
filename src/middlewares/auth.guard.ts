export function isAdmin(){
    if(localStorage.getItem('rol') != 'admin'){
        return '/forbidden'
    }
}