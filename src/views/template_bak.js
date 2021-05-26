/*
 * @Author: your name
 * @Date: 2021-04-14 16:10:54
 * @LastEditTime: 2021-05-26 14:27:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuc-demo\src\template.js
 */
export const templateContent = `
<template>
  <div style="height: 100%">
    <Card dis-hover :bordered="false" style="margin-bottom: 30px;">
      <Row>
        <i-col :xs="{span:24,offset:0}" :xs="{span:20,offset:2}" :md="{span:16,offset:4}" :lg="{span:12,offset:6}" :xl="{span:12,offset:6}">
          <i-form :model="formData" style="min-height: 100px" :label-width="100" label-position="right">
            <form-item label="输入框">
                <i-input></i-input>
            </form-item>
            <form-item>
              <i-button>保存</i-button>
            </form-item>
          </i-form>
        </i-col>
      </Row>
    </Card>
    <vue-draggable-resizable :active.sync="active" class="vdr1">
      <p>Controlling the active state from outside the component by providing the <b>:{{active}}</b> prop.</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:false,
      formData:{}
    };
  },
  computed: {
  },
  methods: {
  }
}
</script>`
