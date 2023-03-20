<template>
  <div class="container">
    <span class="is-typing"></span>
    <h2>Lets Chat About {{topic}}</h2>
    <label>
      <input type="radio" value="Life" v-model="topic" @change="changeTopic" /> 
      Life
    </label>
    <label>
      <input type="radio" value="This Toy" v-model="topic" @change="changeTopic" /> 
      {{toy.name}}
    </label>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        <span>{{msg.from}}:</span>{{msg.txt}}
      </li>
    </ul>
    <hr />
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" placeholder="Your msg" class="chat"/>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import {socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG, SOCKET_EMIT_SET_TOPIC} from '../services/socket.service'
import { userService } from '../services/user.service.js'
import { toyService } from '../services/toy.service.js'

export default {
  data() {
    return {
      msg: {from: '', txt: ''},
      msgs: [],
      topic : 'Love',
      toy : ''
    }
  },
  async created() {
    socketService.emit(SOCKET_EMIT_SET_TOPIC, this.topic)
    socketService.on(SOCKET_EVENT_ADD_MSG, this.addMsg)
    const { toyId } = this.$route.params;
                const toy = await toyService.getById(toyId);
                this.toy = toy;
    
    
  },
  destroyed() {
    socketService.off(SOCKET_EVENT_ADD_MSG, this.addMsg)
  },
  methods: {
    addMsg(msg) {
      this.msgs.push(msg)
    },
    sendMsg() {
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      const user = userService.getLoggedinUser()
      const from = (user && user.fullname) || 'Guest'
      this.msg.from = from
      
      socketService.emit(SOCKET_EMIT_SEND_MSG, this.msg)
      console.log('Sending', {...this.msg})
      this.msg = {from:'', txt: ''}
    },
    // changeTopic() {
    //   socketService.emit(SOCKET_EMIT_SET_TOPIC, this.topic)
    // }
  }
}
</script>
