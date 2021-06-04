
    <template>
      <div style="height: 100%"><vue-draggable-resizable :active.sync="active" class="vdr1" @click.native="comfirm"><p >Controlling the active state from outside the component by providing the <b >:{{active}}</b> prop.</p></vue-draggable-resizable></div>
    </template>
    <script>
      

      export default {data(){ 
      return {active:false,formData:{}}
    },computed:{},methods:{/**
        * 确认
        */
         comfirm(){ alert('click') }},watch:{}}
      

    </script>