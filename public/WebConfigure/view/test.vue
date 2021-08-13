<!--
 * @Author: your name
 * @Date: 2021-08-09 14:26:34
 * @LastEditTime: 2021-08-09 14:28:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\public\WebConfigure\view\test.vue
-->

<template>
      <div style="height: 600px; width:800px"><form-item  label="复选框"><CheckboxGroup ><Checkbox label="1">选项1</Checkbox><Checkbox label="2">选项2</Checkbox></CheckboxGroup></form-item><Card  dis-hover="" :bordered="false" style="margin-bottom: 30px;"><Row ><i-col :xs="{span:20,offset:2}" :md="{span:16,offset:4}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}"><i-form :model="formData" style="min-height: 100px" :label-width="100" label-position="right"><form-item label="输入框"><i-input ></i-input></form-item><form-item ><i-button >保存</i-button></form-item></i-form></i-col></Row></Card><Card dis-hover="" :bordered="false" style="margin-bottom: 30px;"><Row ><i-col :xs="{span:20,offset:2}" :md="{span:16,offset:4}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}"><i-form :model="formData" style="min-height: 100px" :label-width="100" label-position="right"><form-item label="输入框"><i-input ></i-input></form-item><form-item ><i-button >保存</i-button></form-item></i-form></i-col></Row></Card><form-item label="下拉框"><i-select ><i-option value="1">选项1</i-option><i-option value="2">选项2</i-option></i-select></form-item></div>
</template>
<script>

export default {
  data () {
    return { active: false, formData: {} }
  },
  computed: {},
  methods: {},
  watch: {}
}

</script>
