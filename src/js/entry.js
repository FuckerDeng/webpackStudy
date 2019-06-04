import { person } from "./mudule1"; //导入其他js模块
import data from '../data/data.json'; //导入json模块

import "../css/default.css";

let xiaoming = new person("小明", 20);
xiaoming.say();
console.log(JSON.stringify(data));