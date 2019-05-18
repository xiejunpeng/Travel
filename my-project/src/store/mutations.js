export default{
    changeCity(state, city) {  //ctx是自带的  
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {

        }
    }
}