<template>
  <div className="container clearfix">
    <div className="people-list" id="people-list">
      <RenderUserList :users="users" />
    </div>

    <div className="chat">
      <div className="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

        <div className="chat-about">
          <div className="chat-with">Chat with {name}</div>
          <div className="chat-num-messages">Happy Today</div>
        </div>
        <i class="fa fa-star"></i>
      </div>

      <div className="chat-history" style="position: 'relative'">
        <RenderContentList :contents="contents" :myname="name" />
      </div>

      <div className="chat-message clearfix">
        <textarea
          name="message-to-send"
          id="message-to-send"
          placeholder ="Type your message"
          :rows="4"></textarea>

        <!-- <HelloModal openProps={true} closeProps={onCloseModal}/> -->
        <input type="file" id="file" name="file"  accept=".gif, .png, .jpg"/>
        <button type="button" >Send</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useToast } from "vue-toastification"
import RenderUserList from './components/renderUserList.vue'
import RenderContentList from './components/renderContentList.vue'

type Tuser = {
  avatar: string
  name: string
  login: number
}

type Tusers = Tuser[]
const tempUsers: Tusers = [
  {
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
    name: 'Vincent Porter',
    login: 1602423163050
  },
  {
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
    name: 'Aiden Chavez',
    login: 1602423163053
  },
  {
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg',
    name: 'Computer',
    login: 1602423163051
  }
]

type TContent = {
  text: string
  time: number
  image: string
  user: string
}
type TContents = TContent[]

const tempContents: TContents = [
  {
    text: 'Hi There, 바르고 고운말 부탁합니다.pc 라고 부르면 컴퓨터가 이야기해요. 예) pc 안녕? 이미지 보여줘',
    time: Date.now() - 300000,
    image: '',
    user: 'Computer-fake'
  }
]


export default defineComponent({
  name: 'Chat',
  components: {
    RenderUserList,
    RenderContentList
  },
  data() {
    return {
      users: tempUsers,
      contents: tempContents,
      name: '',
    }
  },
  setup() {
    const toast = useToast();
    toast.success("My toast content", {
      timeout: 2000,
      hideProgressBar: true,
    })
    return { toast }
  },
})
</script>

<style>

</style>