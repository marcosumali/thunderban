<template>
    <div class="addtask">

      <!-- Modal Trigger -->
      <i class="icon material-icons waves-effect waves-light modal-trigger animated pulse infinite" href="#modal1">note_add</i>

      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Post New Task</h4>
          <small style="color:grey">Psst..The form can be quite hard to click. Maybe you should use 'tab' on your keyboard instead..</small>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <i class="material-icons prefix">assignment_ind</i>
                  <input id="preparer" type="text" class="validate" v-model="preparer" required>
                  <label for="">Preparer</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">bookmark</i>
                  <select class="initialized" v-model="status" required>
                    <option value="" disabled selected>Set your task status</option>
                    <option value="Backlog">Backlog</option>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                  </select>
                  <label>Status</label>
                </div>
                <div class="input-field col s12">
                  <i class="material-icons prefix">assignment</i>
                  <input id="task" type="text" class="validate" v-model="task" required>
                  <label for="">Task</label>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="modal-footer">
          <div class="parent">
            <a class="modal-close waves-effect waves-green btn #e1f5fe light-blue lighten-5 black-text">Cancel</a>
            <a class="modal-close waves-effect waves-green btn #01579b light-blue darken-4" @click="addTask">Post !</a>
          </div>
        </div>
      </div>
          
    </div>

</template>

<script>
export default {
  name: 'AddTask',
  props: {
  },
  data: function() {
    return {
      preparer: '',
      status: '',
      task: ''
    }
  },
  components: {
  },
  methods: {
    addTask () {
      let obj = {
        Preparer: this.preparer,
        Status: this.status,
        Task: this.task,
        Edit: false
      }
      // console.log(obj)

      if (!this.preparer || !this.status || !this.task) {
        alertify.error(`Task's description cannot be empty`);
      } else {
        this.$store.dispatch('addTask', obj)
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icon {
  cursor: pointer;
  color: #01579b;
  font-size: 100px;
}

@media only screen and (max-width: 375px) {
    .icon {
      font-size: 45px;
    }
}

.parent {
  display: flex;
  justify-content: space-between;
}

.row {
  margin-bottom: 0px;
}

.modal-content {
  padding-bottom: 0px;
}

</style>
