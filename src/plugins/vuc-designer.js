/*
 * @Author: your name
 * @Date: 2021-05-26 11:03:32
 * @LastEditTime: 2021-05-26 11:31:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sw_scada_temp\src\plugins\vuc-designer.js
 */
import Vuc from 'vuc-designer'
import 'vuc-designer/dist/styles/vuc.css'
import configs from '@/configs'

const Designer = Vuc.Designer
Designer.use(configs);

export default {
  Designer
}
