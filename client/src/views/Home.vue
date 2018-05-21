<template>
  <div class="home">
    <div class="heading-parent">
      <img class="img_logo" src="../assets/images/thunderban-fit.jpg">
      <AddTask class="heading-child" />
    </div>

    <div class="row">
      <div class="backlog col l3 s12 offset-l1">
        <Category 
          title="BACKLOGS" 
          klass="heading backlog-heading col l12 s12"
          :tasks="arrBacklogs"
        />
      </div>
      <div class="middle col l4 s12">
        <div class="row">
          <div class="todo col s12">
            <Category 
              title="TO DO" 
              klass="heading todo-heading col l12 s12"
              :tasks="arrTodos"
            />
          </div>
          <div class="doing col s12">
            <Category 
              title="DOING" 
              klass="heading doing-heading col l12 s12"
              :tasks="arrDoings"
            />
          </div>
        </div>
      </div>
      <div class="done col l3 s12" style="margin-bottom:400px;">
        <Category
          title="DONE" 
          klass="heading done-heading col l12 s12"
          :tasks="arrDone"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Cuprum|Fira+Sans|Graduate|Monoton|Pacifico|Press+Start+2P');

.img_logo {
  width: 38vw;
}

@media only screen and (max-width: 375px) {
    .img_logo {
      width: 80%;
      height: 80%;
    }
}

.backlog {
  border: 5px solid #0d47a1;
  border-radius: 20px;
  min-height: 20vh;
  margin: 10px;
}

.middle {
  /* border: 1px solid red; */
  min-height: 20vh;
  margin: 10px;
}

.todo {
  border: 5px solid #1e88e5;
  border-radius: 20px;
  min-height: 10vh;
  margin-bottom: 5px;
}

.doing {
  border: 5px solid #64b5f6;
  border-radius: 20px;
  min-height: 10vh;
  margin-top: 5px;
}

.done {
  border: 5px solid #bbdefb;
  border-radius: 20px;
  min-height: 20vh;
  margin: 10px;
}

.heading-parent {
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
}

.heading-child {
  /* border: 1px solid red; */
  align-self: center;
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Category from '@/components/Category.vue'
import AddTask from '@/components/AddTask.vue'
import Footer from '@/components/Footer.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Category,
    AddTask,
    Footer
  },
  created () {
    this.$store.dispatch('getTasks')
  },
  computed: {
    ...mapState([
      'tasks',
      'arrBacklogs',
      'arrTodos',
      'arrDoings',
      'arrDone'
    ])
  }

}
</script>

