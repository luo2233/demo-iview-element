·<JavaScript是一门用来与网页交互的脚本语言
·完整的JavaScript实现包含三个部分
    1、核心：ECMAScript，由ECMA-262定义并提供核心功能
    2、文档对象模型：DOM(Document Object Model)，DOM将整个页面抽象为一组分层节点，提供与网页内容交互的方法和接口
    3、浏览器对象模型：BOM (Brower Object Model)，提供与浏览器交互的方法和接口

·<script>标签8个拥有8个属性
    1、async：异步脚本，立即开始下载脚本，不影响其他页面动作，只对外部脚本有效；
    2、charset：使用src指定的代码字符集；
    3、crossorigin：配置相关请求的CORS（跨源资源共享）设置，默认为不使用；
    4、defer：推迟执行脚本，表示脚本可以延迟到文档完全被解析和显示之后再执行，只对外部脚本文件有效；
    5、integrity：允许接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）；
    6、language：已废弃，最初用于表示代码中所使用的脚本语言
    7、src：表示包含要执行的外部脚本文件
    8、type：代替language，表示代码块中脚本语言的内容类型
·<noscript>用于给不支持JavaScript的浏览器提供替代的内容，当出现以下两种情况，noscript中的内容会被渲染：
    1、浏览器不支持脚本
    2、浏览器对脚本的支持被关闭
·无论是行内script还是外部script，在编译或下载时会造成页面阻塞

·<javascript 是控制网页行为的语言，在HTML中，JavaScript程序由web浏览器执行，按照被编写的顺序逐一执行
特点：，
    1、轻量级
    2、可插入HTML页面
    3、插入HTML页面后可以在所有浏览器上执行
    4、简单易学

·<document.write,在html中写入文档流，相当于在原有Html代码中添加一串html代码，如果在文档加载后使用则会覆盖整个文档

·<match()方法，在字符串中检索指定的值，返回的是值，而不是索引值
·<script标签中 “type='text/javascript'”,现在是非必要的，在旧版本的实例中可能会出现
·<JavaScript没有任何打印或输出的函数，当可以通过四种方式来输出数据
    1、通过警告框输出，window.alert()/alert()
    2、通过html输出流，写入html文档中。document.write()  【出于测试目的，此方法用的较多】
    3、通过操作html元素，写入html元素中。documen.getElement.innerHtml = ""
    4、通过console.log()方法，输出到控制台
·字面量：在编程语言中，一般固定值称为字面量，如数字字面量/字符串字面量/数组字面量，等等
·变量：在编程语言中，变量用于存储数据值
·变量可以通过变量名访问，在指令式的语言中，变量通常是可变的，字面量是一个恒定的值
·<JavaScript语句，向浏览器发出的命令，语句是用分号分隔的,使用分号的另一用处就是可以在一行中写多条语句，此外用分号结束语句是可选的
·<JavaScript对大小写敏感，使用unicode字符集
·命名规则，在JavaScript中常用的命名规则为驼峰法，如className(而不是classname)
·声明变量，var， const， let
·<JavaScript的数据类型
    1、值类型：字符串(string)、数字(number)、布尔(boolean)、对空(mull)、未定义(undefined)、Symbol(ES6新添加的数据类型，唯一标识符，表示独一无二的值)
    2、应用数据类型：对象(object)、数组(array)、函数(function)
·<JavaScript拥有动态类型，即相同的变量可用作不同的类型
·在声明新变量时，可以通过new关键字来声明其类型
·<JavaScript对象是拥有属性和方法的数据，在JavaScript中变量均为对象
·<JavaScript对象是易变的，它们通过引用来寻址而非用值
·<JavaScript脚本加载
    1、<script></script>标签，注意在代码中不能出现字符串</script>，会导致浏览器报错。使用转义字符“\”，可以避免这个问题
    2、可以放在<head>或<body>中，或两者兼之
    3、可放在外部脚本文件中，文件拓展名为.js，引用时在<script scr=""></script>标签的src属性中设置引用的脚本名称或完整的URL链接
        外部脚本文件的好处：
            a. 分离了HTML和代码
            b. 使HTML和JavaScript更易于阅读和维护
            c. 已缓存的JavaScript文件可加速页面加载
    4、动态加载脚本：创建script对象，添加src属性url值，设置async的值，通过操作DOM节点来添加script元素：document.createElement("script") =》 document.appendChildren(script)，同时在文档头部显示声明：<link rel = "preload" href = "xxx.js">,让浏览器预加载器知道这些动态请求文件的存在




