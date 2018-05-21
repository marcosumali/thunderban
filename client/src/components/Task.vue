<template>
  <div class="task">

    <div class="content col s12 animated fadeIn" v-for="(item, index) in tasks" :key="index">
      <div v-if="!item.Edit">
        <div class="row">
          <div class="content-outer col s5">
            <p class="content-inner"><span :class="colorb">Preparer:</span> <span class="title-font">{{ item.Preparer }}</span></p>
          </div>
          <div class="content-outer col s5">
            <p class="content-inner"><span :class="colorb">Status:</span> <span class="title-font">{{ item.Status }}</span></p>
          </div>
          <div class="content-outer col s1">
            <i class="material-icons pointer" @click="editTask(item)">edit</i>
          </div>
          <div class="content-outer col s1">
            <i class="material-icons pointer" @click="removeTask(item)">close</i>
          </div>
          <div class="content-outer col s12" style="">
            <p class="content-inner task-font"><span :class="colorb">"</span>{{ item.Task }}<span :class="colorb">"</span></p>
          </div>
        </div>
      </div>
      <div v-else>
        <h4 style="margin-top:0px;">Update Task</h4>
          <small style="color:grey">"It does not matter how slowly you go as long as you do not stop."</small>
          <br>
          <small style="color:grey;font-weight:bold;font-style:italic;">Confucius</small>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12" style="margin-bottom:0px;">
                  <i class="material-icons prefix">assignment_ind</i>
                  <input id="edit_preparer" type="text" class="validate" v-model="item.Preparer" required>
                  <!-- <label for="">Preparer</label> -->
                </div>
                <div class="input-field col s12" style="margin-bottom:0px;">
                  <i class="material-icons prefix">bookmark</i>
                  <select class="initialized col s11 offset-s1" v-model="item.Status" style="display:block" required>
                    <option value="" disabled selected>Set your task status</option>
                    <option value="Backlog">Backlog</option>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                  </select>
                  <!-- <label>Status</label> -->
                </div>
                <div class="input-field col s12" style="margin-bottom:0px;">
                  <i class="material-icons prefix">assignment</i>
                  <input id="edit_task" type="text" class="validate" v-model="item.Task" required>
                  <!-- <label for="">Task</label> -->
                </div>
              </div>
            </form>

            <div class="parent">
              <a style="margin-left:15px;" class="modal-close waves-effect waves-green btn #e1f5fe light-blue lighten-5 black-text" @click="cancelEditTask(item)">Cancel</a>
              <a class="modal-close waves-effect waves-green btn #01579b light-blue darken-4" @click="saveEditTask(item)">Update</a>
            </div>

          </div>
      </div>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
  border: 3px solid #cfd8dc;
  border-radius: 10px;
  padding-top: 15px;  
  margin-bottom: 10px;
  /* font-family: 'Fira Sans', sans-serif; */
  /* font-family: 'Anton', sans-serif; */
  /* font-family: 'Pacifico', cursive; */
  /* font-family: 'Cuprum', sans-serif; */
  /* font-family: 'Monoton', cursive; */
  /* font-family: 'Graduate', cursive; */
  /* font-family: 'Press Start 2P', cursive; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.color-backlog {
  color: #0d47a1;
  font-weight: bold;
}

.content-outer {
  /* border: 1px solid brown; */
  padding: 5px;
}

.content-inner {
  /* border: 1px solid blue; */
  margin: 0px;
}

.pointer {
  cursor: pointer;
}

.title-font {
  font-size: 20px;
}

.task-font {
  font-size: 25px;
}


</style>

<script>

export default {
  name: 'Task',
  props: {
    colorb: String,
    tasks: Array
  },
  data () {
    return {
      edit_preparer: '',
      edit_status: '',
      edit_task: ''
    }
  },
  methods: {
    editTask (task) {
      this.$store.dispatch('editTask', task)
    },
    cancelEditTask (task) {
      this.$store.dispatch('cancelEditTask', task) 
    },
    saveEditTask (task) {
      this.$store.dispatch('saveEditTask', task) 
    },
    removeTask (task) {
      let check = confirm('Are you sure you want to remove this task ?')
      if (check == true) {
        this.$store.dispatch('removeTask', task)
      }
    }
  }
}

</script>
