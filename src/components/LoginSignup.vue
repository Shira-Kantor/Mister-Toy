<!-- // import { showErrorMsg } from "../services/event-bus.service.js"
// import { userService } from "../services/user.service.js"
import { userService } from '../services/user.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default { -->
    <template>
        <section class="login-signup">
            <h3>Login/Signup</h3>
            <form @submit.prevent="login">
                <h2>Login</h2>
                <input type="text" v-model="credentials.username" placeholder="Username" />
                <input type="password" v-model="credentials.password" placeholder="Password" />
                <button>Login</button>
            </form>
            <hr />
            <form @submit.prevent="userSignup">
                <h2>Signup</h2>
                <input type="text" v-model="signupInfo.fullname" placeholder="Full name" />
                <input type="text" v-model="signupInfo.username" placeholder="Username" />
                <input type="password" v-model="signupInfo.password" placeholder="Password" />
                <button>Signup</button>
            </form>
        </section>
    </template>
        
       
    <script>
    
    export default {
        name: 'LoginSignup',
        data() {
            return {
                credentials: {
                    username: '',
                    password: ''
                },
                signupInfo: {
                    fullname: '',
                    username: '',
                    password: ''
                }
            }
        },
    
        methods: {
            userSignup() {
                this.$store.dispatch({ type: 'signup', signupInfo: this.signupInfo })
                // .then(() => {
                //     showSuccessMsg('logedin ')
                // })
                // .catch((err) => {
                //     showErrorMsg('Cannot login')
                // })
            },
            login() {
                // console.log('hey ',this.credentials.username);
                this.$store.dispatch({ type: 'login', credentials: this.credentials })
                this.$emit('changedUserSats')
            },
        }
    }
    </script>