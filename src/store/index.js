import { createStore } from 'vuex'

const store = createStore({
    state : {
       username: 'Anh',
       age: '10'
    },
    getters:{
        getUsername: state =>{
            return "Username" + ": " + state.username
        },
        getAge: state =>{
            return state.age + " " + 'year old'
        }
    },
    mutations: {
     changeUsername(state, newUername){
        state.username = newUername;
     }
    },
    actions:{
    handleChangeUsername(context, newUsername){
    context.commit('changeUsername', newUsername);
}
    }
  })

export default store;




