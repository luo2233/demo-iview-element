<template>
  <div id="app">
    <div>
      <p>教学计划表综览</p>
      <div class="head">
        <span>入学年：2020</span>
        <span>专业：信息管理与信息系统</span>
        <span>学院：商学院</span>
      </div>
      <div class="detail">
        <span>颜色说明：</span>
        <Tag v-for="(detail, index) in details" :key="index" v-bind:style="setStyle(detail)">{{detail}}</Tag>
      </div>
      <div class="typeBtn">
        <Button style="background-color:blue" @click="handleChangeBX">依必选修查看</Button>
        <Button style="background-color:#000000" @click="handleChangeType">依类别查询</Button>
      </div>
      <Table :columns="columns7" :data="data6" :span-method="handleSpan" border ></Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail:'',
      details:["公共必修","通识选修","专业必修","专业选修","综合实践必修","综合实践选修","跨专业必修","通识必修"],
      // 列表头
      columns7: [
        {
          title:"类别",
          key:"courseType",
          maxWidth:100
        },
        {
          title:"必选修",
          key:"BX",
          maxWidth:100
        },
        {
          title: "第一学年",
          align: 'center',
          children:[
            {
            title:'一',
            key:'one',
            height:"100%",
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.one) {
              for (let i in params.row.one) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
                    tagColor = "#69BB56";
                    break;
                  default:
                    tagColor = "#ffffff";
                }
                newArray.push(
                  h(
                    "Button",
                    {
                      props: {
                     
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
            return h("div", params.row.one ? newArray : "");
          },
          },
          {
            title:'二',
            key:'two',
            align: 'center',
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.two) {
              for (let i in params.row.two) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
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
            return h("div", params.row.two ? newArray : "");
          },
          }
          ],
          
        },
        {
          title: "第二学年",
          align: 'center',
          children:[
            {
            title:'三',
            key:'three',
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.three) {
              for (let i in params.row.three) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
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
            return h("div", params.row.three ? newArray : "");
          },
          },
          {
            title:'四',
            key:'four',
            align: 'center',
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.four) {
              for (let i in params.row.four) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
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
            return h("div", params.row.four ? newArray : "");
          },
          }
          ],
        },
        {
          title: "第三学年",
          align: 'center',
          children:[
            {
            title:'五',
            key:'five',
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.five) {
              for (let i in params.row.five) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
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
            return h("div", params.row.five ? newArray : "");
          },
          },
          {
            title:'六',
            key:'six',
            align: 'center',
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.six) {
              for (let i in params.row.six) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
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
            return h("div", params.row.six ? newArray : "");
          },
          }
          ],
        },
        {
          title: "第四学年",
          align: 'center',
          children:[
            {
            title:'七',
            key:'seven',
            align:"center",
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.seven) {
              for (let i in params.row.seven) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
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
            return h("div", params.row.seven ? newArray : "");
          },
          },
          {
            title:'八',
            key:'eight',
            align: 'center',
            render: (h, params) => {
            let newArray = [];
            let tagColor = "";
            if (params.row.eight) {
              for (let i in params.row.eight) {
                switch (i) {
                  case "公共必修":
                    tagColor = "#3083DC";
                    break;
                  case "通识选修":
                    tagColor = "#42BFDD";
                    break;
                  case "专业必修":
                    tagColor = "#344966";
                    break;
                  case "专业选修":
                    tagColor = "#CDC392";
                    break;
                  case "综合实践必修":
                    tagColor = "#0077B6";
                    break;
                  case "综合实践选修":
                    tagColor = "#788BFF";
                    break;
                  case "跨专业必修":
                    tagColor = "#38A35A";
                    break;
                  case "通识必修":
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
            return h("div", params.row.eight ? newArray : "");
          },
          }
          ],
        }, 
      ],

      data6: [
        {
          courseType:"公共课程",
          BX:"必修",
          one:{"公共必修":"1","通识必修":"2","专业必修":"4","综合实践必修":"6","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType:"公共课程",
          BX:"选修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "通识教育课程",
          BX:"必修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "通识教育课程",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "学科专业课程",
          BX:"必修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "学科专业课程",
          BX:"选修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "综合实践课程",
          BX:"必修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "综合实践课程",
          BX:"选修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "跨专业课程",
          BX:"必修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
        {
          courseType: "跨专业课程",
          BX:"选修",
          one:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          two:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          three:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          four:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          five:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          six:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          seven :{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
          eight:{"公共必修":"1","通识必修":"2","通识选修":"3","专业必修":"4","专业选修":"5","综合实践必修":"6","综合实践选修":"7","跨专业必修":"8"},
        },
      ],
    };
  },
  methods: {
    handleSpan({ rowIndex, columnIndex}) {
      let i = [0,2,4,6,8]
      for(let a = 0; a<i.length; a++){
        if(rowIndex === i[a] && columnIndex === 0) {
        //分别代表合并的行数和列数
        return [2,1];
      }
        else if (rowIndex === i[a]+1 && columnIndex === 0) {
        //分别代表合并的行数和列数，设为0则直接不显示
        return [0,0];
      }
      }
    },

    setStyle(str){
      if(str == "公共必修"){
        return "background:#3083DC"
      }
      else if(str == "通识选修"){
        return "background:#42BFDD"
      }
      else if(str == "专业必修"){
        return "background:#344966"
      }
      else if(str == "专业选修"){
        return "background:#CDC392"
      }
      else if(str == "综合实践必修"){
        return "background:#0077B6"
      }
      else if(str == "综合实践选修"){
        return "background:#788BFF"
      }
      else if(str == "跨专业必修"){
        return "background:#38A35A"
      }
      else if(str == "通识必修"){
        return "background:#69BB56"
      }
    }
  },
};
</script>

<style scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head span{
  margin-left: 30px;
}
.detail .ivu-tag .ivu-tag-text{
  color: #ffffff;
}
.ivu-table-wrapper{
  position: relative;
  width: 100%;

}
.ivu-btn span{
  color: aliceblue;
}
</style>
