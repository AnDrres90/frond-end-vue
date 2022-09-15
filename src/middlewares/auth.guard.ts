export function isAdmin(){
    if(localStorage.getItem('rol') != 'admin'){
        return '/forbidden'
    }
}

export function isSuperAdmin(){
    if(localStorage.getItem('rol') != 'super-admin'){
        return '/forbidden'
    }
}
