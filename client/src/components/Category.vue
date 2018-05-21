<template>
  <div class="category">

    <div class="container col l12 s12">
      <div :class="klass">
        {{ title }}
      </div>

      <div class="content-container col l12 s12">
        <Task
          colorb="color-backlog"
          :tasks="tasks" 
        />
      </div> 
      
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  /* border: 1px solid green; */
  border-radius: 10px;
  padding: 0px;
}

.content-container {
  margin: 0px;
  padding: 0px;
}

.heading {
  /* border: 1px solid black; */
  border-radius: 10px;
  /* min-height: 10vh; */
  /* font-family: 'Fira Sans', sans-serif; */
  /* font-family: 'Anton', sans-serif; */
  /* font-family: 'Pacifico', cursive; */
  font-family: 'Cuprum', sans-serif;
  /* font-family: 'Monoton', cursive; */
  /* font-family: 'Graduate', cursive; */
  /* font-family: 'Press Start 2P', cursive; */
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  margin-bottom: 10px;
  padding: 0px;
}

.backlog-heading {
  color: #0d47a1;
}

.todo-heading {
  color: #1e88e5;
}

.doing-heading{
  color: #64b5f6;
}

.done-heading{
  color: #bbdefb;
}

</style>

<script>
import Task from '@/components/Task.vue'

export default {
  name: 'Category',
  components: {
    Task
  },
  props: {
    title: String,
    klass: String,
    tasks: Array
  }
}

</script>

