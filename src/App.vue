<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
      <Button style="background-color:#000000">iview-button</Button>
      <!-- <Table :columns="columns7" :data="data6" border></Table> -->
      <Table :columns="columns7" :data="data6" border ></Table>
      <Tag color="#000000">标签</Tag>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  data() {
    return {
      // 列表头
      columns7: [
        {
          title:"类别",
          key:"courseType",
          className:"demo",
          minWidth:100
        },
        {
          title:"必选修",
          key:"BX",
          className:"demo",
          minWidth:100
        },
        {
          title: "第一学年",
          align: 'center',
          width: 350,
          children:[
            {
            title:'一',
            key:'one',
            width:200,
            height:"100%",
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.one) {
              for (let i in params.row.one) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                    // params.row.one[i]
                  )
                );
              }
            }
            return h("div", params.row.one ? newArray : "");
          },
          },
          {
            title:'二',
            key:'two',
            width:100
          }
          ],
          render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.name) {
              for (let i in params.row.name) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                  )
                );
              }
            }
            return h("div", params.row.name ? newArray : "");
          },
        },
        {
          title: "第二学年",
          align: 'center',
          width: 350,
          children:[
            {
            title:'三',
            key:'three',
            width:200,
            height:"100%",
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.one) {
              for (let i in params.row.one) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                    // params.row.one[i]
                  )
                );
              }
            }
            return h("div", params.row.one ? newArray : "");
          },
          },
          {
            title:'四',
            key:'four',
            width:100
          }
          ],
          render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.name) {
              for (let i in params.row.name) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                  )
                );
              }
            }
            return h("div", params.row.name ? newArray : "");
          },
        },
        {
          title: "第三学年",
          align: 'center',
          width: 350,
          children:[
            {
            title:'五',
            key:'five',
            width:200,
            height:"100%",
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.one) {
              for (let i in params.row.one) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                    // params.row.one[i]
                  )
                );
              }
            }
            return h("div", params.row.one ? newArray : "");
          },
          },
          {
            title:'六',
            key:'six',
            width:100
          }
          ],
          render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.name) {
              for (let i in params.row.name) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                  )
                );
              }
            }
            return h("div", params.row.name ? newArray : "");
          },
        },
        {
          title: "第四学年",
          align: 'center',
          width: 350,
          children:[
            {
            title:'七',
            key:'seven',
            width:200,
            height:"100%",
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.one) {
              for (let i in params.row.one) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                    // params.row.one[i]
                  )
                );
              }
            }
            return h("div", params.row.one ? newArray : "");
          },
          },
          {
            title:'八',
            key:'eight',
            width:100
          }
          ],
          render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.name) {
              for (let i in params.row.name) {
                switch (i) {
                  case "单选题":
                    tagColor = "#3083DC";
                    break;
                  case "多选题":
                    tagColor = "#42BFDD";
                    break;
                  case "不定项选择题":
                    tagColor = "#344966";
                    break;
                  case "判断题":
                    tagColor = "#CDC392";
                    break;
                  case "填空题":
                    tagColor = "#0077B6";
                    break;
                  case "问答题":
                    tagColor = "#788BFF";
                    break;
                  case "材料题":
                    tagColor = "#38A35A";
                    break;
                  default:
                    tagColor = "#69BB56";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                        // color: tagColor,
                      },
                      style:{
                        background: tagColor,
                      }
                    },
                    // i + ":" + params.row.name[i],
                    i
                  )
                );
              }
            }
            return h("div", params.row.name ? newArray : "");
          },
        }, 
        // {
        //   title: "Name",
        //   key: "name",
        // },
        // {
        //   title: "Age",
        //   key: "age",
        // },
        // {
        //   title: "Address",
        //   key: "address",
        // },
        // {
        //   title: "Action",
        //   key: "action",
        //   width: 250,
        //   align: "center",
        //   render: (h, params) => {
        //     return h("div", [
        //       h(
        //         "Button",
        //         {
        //           props: {
        //             type: "primary",
        //             size: "small",
        //           },
        //           style: {
        //             marginRight: "5px",
        //           },
        //           on: {
        //             click: () => {
        //               this.show(params.index);
        //             },
        //           },
        //         },
        //         "查看"
        //       ),
        //       h(
        //         "Button",
        //         {
        //           props: {
        //             type: "",
        //             size: "small",
        //           },
        //           style: {
        //             color: "#ffffff",
        //             background: "#000000",
        //           },
        //           on: {
        //             click: () => {
        //               this.remove(params.index);
        //             },
        //           },
        //         },
        //         params.row.name
        //       ),
        //       h(
        //         "Button",
        //         {
        //           props: {
        //             type: "error",
        //             size: "small",
        //           },
        //           on: {
        //             click: () => {
        //               this.remove(params.index);
        //             },
        //           },
        //         },
        //         "增加"
        //       ),
        //     ]);
        //   },
        // },
      ],

      data6: [
        {
          courseType:"公共课程",
          BX:"必修",
          one:{"单选题":"1","多选题":"2","不定项选择题":"3","判断题":"4","填空题":"5","问答题":"6","材料题":"7"},
          2:"2",
          3:"3",
          4:"4",
          5:"5",
          6:"6",
          7:"7",
          8:"8"
                  },
        {
          courseType: "通识教育课程",
          one:{"单选题":"1","多选题":"2","不定项选择题":"3","判断题":"4","填空题":"5","问答题":"6","材料题":"7"},
          2:"2",
          3:"3",
          4:"4",
          5:"5",
          6:"6",
          7:"7",
          8:"8"
        },
        {
          courseType: "学科专业课程",
          one:{"单选题":"1","多选题":"2","不定项选择题":"3","判断题":"4","填空题":"5","问答题":"6","材料题":"7"},
          2:"2",
          3:"3",
          4:"4",
          5:"5",
          6:"6",
          7:"7",
          8:"8"
        },
        {
          courseType: "综合实践课程",
          age: 26,
          address: "上海市",
          city: "陆家港",
          disrect: "上海东方明珠立交桥",
        },
        {
          courseType: "跨专业课程",
          age: 26,
          address: "上海市",
          city: "陆家港",
          disrect: "上海东方明珠立交桥",
        }
      ],
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`,
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
  },
  name: "app",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ivu-table-wrapper{
  position: relative;
  width: 100%;
  /* left: 10%; */
 }
</style>
