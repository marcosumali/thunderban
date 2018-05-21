<template>
    <div class="footer">

        <footer class="page-footer #01579b light-blue darken-4" style="padding-top:0px;">
            <div class="container">
                <div class="row" style="margin-bottom:0px;">
                <div class="col l6 s12">
                    <h5 class="white-text">Thunderban.com</h5>
                    <p class="grey-text text-lighten-4">This is my Kanban portofolio project that I build during my enrollment at <a href="https://hacktiv8.com/" target="_blank" style="color:white">Hacktiv8</a></p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Contact Links</h5>
                    <div class="contacts-parent">
                        <a onclick="M.toast({html: 'Thanks for trying !'})" class="grey-text text-lighten-3 pointer">Try Me !</a>
                        <a onclick="M.toast({html: 'Email me at marco.sumali90@gmail.com'})" class="grey-text text-lighten-3 pointer">My Email</a>
                        <a onclick="M.toast({html: 'Call me on +628111777802'})" class="grey-text text-lighten-3 pointer">My Phone</a>
                        <a onclick="M.toast({html: 'Hope you have a pleasant day :)'})" class="grey-text text-lighten-3 pointer">Thanks !</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                <a href="http://www.madebybastian.com/" style="color:white" target="_blank">© 2018 madebybastian.com</a>
                <!-- <a class="grey-text text-lighten-4 right" href="#!">More Links</a> -->
                </div>
            </div>
        </footer>

    </div>

</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed|Monoton|Pacifico');

footer {
  margin-top: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

}

.pointer {
  cursor: pointer;
}

.footer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.contacts-parent {
    display: flex;
    justify-content: space-between;
}

</style>
