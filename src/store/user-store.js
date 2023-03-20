import { userService } from '../services/user.service.js'

export const userStore = {
    state() {
        return {
            user: userService.getLoggedinUser()
        }
    },
    mutations: {
        login(state, { user }) {
            state.loggedInUser = user
        },
        logout(state) {
            state.loggedInUser = null
        },
        logout(state){
            state.user= null  
        },
        updateUser(state, { user }) {
            state.user = user
        },
        setUser(state, { user }) {
            state.user = user
        },
    },
    getters: {
        user({ user }) {
            // console.log({ user });
            return user
        },
        
    },
    actions: {
        signup({ commit }, { signupInfo }) {
            console.log({ signupInfo });  
            return userService.signup(signupInfo)
                .then(user => {
                    commit({ type: 'setUser', user })
                })
        },
        logout({ commit }) {
            return userService.logout() .then(()=> {
                commit({ type: 'logout'})
            })
           
        },

        login({ commit }, { credentials }) {
            userService.login(credentials)
                .then(user => {
                    // console.log(user);
                    commit({ type: 'setUser', user })
                })
        },
        async loadUsers({ commit }) {
            // TODO: loading
            try {
                const users = await userService.getUsers()
                commit({ type: 'setUsers', users })
            } catch (err) {
                console.log('userStore: Error in loadUsers', err)
                throw err
            }
        },        

        // updateUser({ commit }, { newUser }) {
        //     return userService.updateUser(newUser)
        //         .then(updatedUser => {
        //             commit({ type: 'updateUser', user: updatedUser })
        //         })
        //         .catch((err) => {
        //             console.error('Cannot save product', err)
        //             throw err
        //         })
        // },

        incrementLater(context, { val }) {
            setTimeout(() => {
                context.commit({ type: 'increment', val })
            }, 1500)
        },
    }
}