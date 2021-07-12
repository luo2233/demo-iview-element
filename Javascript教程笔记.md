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
    1、值类型：字符串(string，是不可变的；转义序列只表示一个字符)、数字(number)、布尔(boolean)、空对象指针(null,typeof值为object,布尔值为false)、未定义(undefined，布尔值为false)、Symbol(ES6新添加的数据类型，唯一标识符，表示独一无二的值)
    2、应用数据类型：对象(object)、数组(array)、函数(function)
    3、null == undefined 的结果为true
·typeof类型
    对于未声明变量和声明但未初始化的变量，typeof返回的都是“undefined”。所以建议在声明变量的同时进行初始化
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
·<JavaScript语法区分大小写，标识符的命名规则通常采用驼峰大小写的形式，即第一个单词的首字母小写，后面的每一个单词的首字母大写
·关键字、保留字、true、false和null不能作为标识符
·<JavaScript语句采用分号结尾，省略分号意味着由解析器决定语句在哪里结尾
·<JavaScript创建变量的三种声明方式
    1、var 在JavaScript的任何版本都支持，使用var定义的变量会成为包含它的函数中的局部变量，该函数会在函数退出时被销毁
       var 声明提升，使用var关键字声明的变量会自动提升到函数作用域顶部
       var 声明的范围是函数作用域
       var声明的迭代变量会泄露到循环外部
    2、const 只能在ES6及更晚的版本中使用 
       const 声明变量时要同时初始化变量，且变量声明后无法被修改，如果声明的是一个对象，那么修改对象内部的属性是被允许的
       const 声明的范围是块作用域，不允许在作用域内重复声明
    3、let 同样只能在ES6及更晚的版本中使用
       let 声明的范围是块作用域，不允许在同一个块作用域中出现冗余声明，这样的行为非常适合在循环中声明迭代变量
       let 声明的变量不会在作用域中被提升
       使用let声明迭代变量时，JavaScript引擎在后台为每一个迭代循环声明一个新的迭代变量。这种行为适合于所有风格的for循环
·<JavaScript 数值转换
    1、Number()，转型函数，可以用于任何函数
    2、parseInt()，主要用于将字符串转换为数字，整数值，可以传入进制数来作为第二个参数，告诉解析器要解析的是几进制的字符串
    3、parseFloat()，主要用于将字符串转换为数字，浮点值，始终忽略字符串开头的零，只解析十进制，可以解析整数
·<JavaScript 字符串转换
    1、toString()，返回当前值的的字符串等价物，返回自身的一个副本，null和undefined没有toString()方法
    2、String()转型函数，始终返回相应类型值的字符串，如果值有toString方法，则直接调用该方法并返回结果；null就返回null，undefined就返回undefined；
    3、模板字面量
    4、字符串插值
    5、String.raw`\u00A9`，直接获取原始的模板字面量内容（如换行符或Unicode字符）
    6、模板字面量标签函数d
<JavaScript Symbol类型需要使用Symbol()函数初始化
·Symbol()方法
    1、Symbol.asynIterator
d    3、Symbol.isConcatSpreadable
    4、Symbol.iterator
    5、Symbol.match
    6、Symbol.replace
    7、Symbol.search
    8、Symbol.species
    9、Symbol.split
    10、Symbol.toPrimitive
    11、Symbol.toStringTag
    12、Symbol.unscopables

·JavaScript 操作符
    前缀递增（递减）操作符，变量的值都会在语句被求值之前改变；
    后缀递增（递减）操作符，变量的值都会在语句被求值之后改变
    以上四种操作符可以作用于任何          

·位操作符
·布尔操作符
·乘性操作符
    1、乘法操作符（*）
    2、除法（商）操作符（/）
    3、取模(余数)操作符（%）
    4、指数操作符（** /  Math.pow() )
·加性操作符
    1、加法操作符（+)
    2、减法操作符(-)
·关系操作符（>, <, <=, >=),返回布尔值，任何关系操作符在涉及比较NaN时都返回false
    1、数值比较
    2、字符串比较，逐个比较字符串中对应字符的编码
    3、任一操作数是数值，则将另一个操作数转换为数值，执行数值比较
    4、任一操作数是对象，调用valueOf（）和toString（）方法，转换后再根据前面的规则执行比较
    5、布尔值，则将其转换为数值再执行比较
·相等操作符
    1、等于（==）和不等于（!=），比较前强制类型转换
    2、全等（===）和不全等（!==），比较前不转换
·条件操作符
    xxx = 条件 ？ 为真执行X ：为假执行Y
·赋值操作符（=）
·逗号操作符，用来在一条语句中执行多个操作。也可在赋值中使用，最终会返回表达式中最后一个值
·语句（流控制语句）
    1、if语句
    2、do-while语句，后测试循环语句，循环体内的代码至少执行一次
        do{
            statement
        }while(expression)
    3、while语句，先测试循环语句，循环体内的代码可能不会执行
        while(expression) statement
    4、for语句，先测试语句，无法通过while循环实现的逻辑，同样也无法使用for循环实现
        for(initialization; expression; post-loop-expression) statement
    5、for-in语句，严格的迭代语句，用于枚举对象中的非符号键属性，不保证排列顺序
        for(property in expression) statement
    6、for-of语句，严格的迭代语句，用于遍历可迭代对象的元素
        for (property of expression) statement
    7、标签语句，用于给语句加标签，可以在后面通过break或continue语句引用，典型的应用场景是嵌套循环。
        label: statement
    8、break和continue语句，break和continue都可以于标签语句一起使用，返回代码中特定的位置，通常是在嵌套循环中
        break语句用于立即退出循环，强制执行循环后的下一条语句
        continue语句也是立即退出循环，但会再次从循环顶部开始执行
    9、with语句，将代码作用域设置为特定的对象主要的场景是针对一个队形反复操作，严格模式不允许使用with语句（一般不推荐使用with语句）
        with (expreesion) statement;
    10、switch语句，与if语句紧密相关的一种流控制语句，可以用于所有数据类型，条件的值不需要是常量，也可以是变量或表达式
        switch(expresion){
            case value1:
                statement
                break;
            case value2:
                statement
                break;
            ...
            default:
                statement
        }
·函数,使用function关键字声明，后跟一组参数，然后是函数体
    function functionName(arg0, arg1, argN){
        statements
    }
·原始值和引用值
    1、 原始值 最简单的数据，按值访问，保存在栈内存
        引用值 由多个值构成的对象，保存在堆内存中
        JavaScript不允许直接访问内存位置
    2、动态属性，原始值不可以有属性，引用值可以随时添加/修改和删除其属性和方法
    3、复制值
        1、原始值：通过变量吧一个原始值赋值到另一个变量时，原始值会被复制到新变量的位置，原值和副本都可以独立使用，互不干扰
        2、引用值：把引用值从一个变量赋给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置，区别在于这里复制的值实际上是一个指针，指向存储在堆内存中的对象，两个对象实际上指向同一个对象，因此一个对象上面的变化会在另一个对象上反映出来
        3、传递参数，在JavaScript中所有参数都是按值传递的，在按值传递参数时，值会被复制到一个局部变量（函数中的参数就是局部变量）
    4、确定类型（typeof / instanceof）
        result = variable instanceof constructor
·执行上下文(作用域): 可分为全局上下文、函数上下文和块级上下文
    1、内部上下文可以访问外部上下文，但外部上下文无法访问内部上下文
    2、下一级上下文可以访问上一级上下文，上一级上下文无法访问下一级上下文
·变量声明
    var
    let
    const
·标识符查找
·垃圾回收，执行环境负责在代码执行时管理内存，周期性的
    1、标记清理：最常用的垃圾回收策略
    2、引用计数：顾名思义
    3、性能：调度垃圾回收程序方面的问题会导致性能下降
    4、内存管理：优化内存占用的最佳手段就是保证在执行代码时只保存必要的数据，如果数据不必要就设置为null，从而释放其引用，这也叫做解除引用，最适合于全局变量和全局对象的属性。
        1、通过let和const声明提升性能
        2、隐藏类和删除操作
        3、内存泄漏：JavaScript中的内存泄漏大部分是由不合理的引用导致的
            a. 意外声明全局变量是最常见但也最容易修复的内存泄露问题
            b. 定时器也可能导致内存泄漏问题
            c. 闭包也可能会导致内存泄漏问题
        4、静态分配与对象池：静态分配是优化的一种极端方式，除非垃圾回收严重地影响了应用程序，可以利用它提升性能，但在大多数情况下，这都属于过早优化，因此不用考虑。 
    
·引用值（或者对象）是某个特定引用类型的实例
·引用类型是把数据和功能组合到一起的结构，引用类型有时也被称为对象定义，对象被认为是某个特定引用类型的实例新对象通过使用new操作符后跟一个构造函数来创建，构造函数就是用来创建新对象的函数
    1、Date类型
        a. Date.parse()，接收一个表示日期的字符串参数，并尝试将这个字符串转换为表示该日期的毫秒数
        b. Date.UTC()，也返回日期的毫秒表示，传入的参数是年、以零为起点月数、日、时、分、秒、毫秒，其中年和月是必需的
        c. Date.now()，返回表示方法执行时日期和时间的毫秒数
        d. 继承的方法：重写了一下三种方法
            toLocaleSring():返回与浏览器运行的本地环境一致的日期和时间，格式中通常包含针对时间的AM(上午)或PM（下午），但不包含时区信息；
            toString()：通常返回带时区信息的日期和时间（24小时制）；
            valueOf()：不返回字符串，返回的时日期的毫秒表示，操作符可以直接使用它返回的值
        e. 日期格式化
            toDateString()：显示周几、月、 日、年
            toTimeString()：显示时、分、秒、时区
            toLocaleDateString()：显示周几、月、日、年
            toLocaleTimeString()：显示时、分、秒
            toUTCString()：显示完整的UTC日期
        f. 日期/时间组件方法（33种）
    2、RegExp类型，JavaScript通过RegExp类型支持正则表达式, 正则表达式使用类似Perl的简洁语法来创建：
        let expression = /pattern/flags/;
    也可以使用RegExp构造函数来创建，它接受两个参数，模式字符串和（可选的）标记字符串
        let expression = new RegExp("pattern", "flags")
    任何使用字面量定义的正则表达式也可以通过构造函数来创建
        pattern(模式)：可以是任何简单或复杂的正则表达式
        flags(标记)：每个正则表达式可以带零个或多个flags，用于控制正则表达式的行为
        g：全局模式，查找字符串的全部内容
        i：不区分大小写
        m：多行模式，表示查找到一行文本末尾时会继续查找
        y：粘附模式，表示只查找从lastIndex开始及之后的字符串
        u：Unicode模式，启用Unicode匹配
        s：dotAll模式，表示元字符，匹配任何字符（包括\n或\r）
    RegExp实例方法：
    主要是exec(),用于配合捕获组使用，这个方法只接受一个参数，即要应用模式的字符串。
    test()方法，适用于只想测试模式是否匹配，而不需要实际匹配内容的情况，经常用在if语句中，接收一个字符串参数，如果输入的文本与模式匹配，则参数返回true，否则返回false。
    RegExp构造函数属性：适用于作用域中的所有正则表达式，每个属性都有一个全名和一个简写。

    3、原始值包装类型，可以显式地使用Boolean、Number和String构造函数创建原始值包装对象，不过应该在确实必要时再这么做
    Boolean：在JavaScript中用的很少
    Number：toFixed()，返回包含指定小数点位数地数值字符串
            toExponential()，返回科学计数法表示地数值字符串
            toPrecision()，根据情况返回最合理地输出结果
            Number.isInteger()，辨别一个数值是否保存为整数
    String：每个String对象都有一个length属性，表示字符串中字符的数量
        JavaScript字符串由16位码元组成，使用了两种Unicode编码混合的策略：UCS-2和UTF-16.
        charAt()方法返回给定索引位置的字符，由传给方法的整数参数指定。
        charCodeAt()方法可以查看指定码元的字符编号，返回指定索引位置的码元值，索引值以整数指定。
        fromCharCode()方法用于根据给定的UTF-8码元创建字符串中的字符，可以接受任意多个数值，并返回将所有数值对应字符拼接起来的字符串；
        当字符串既包含单码元字符由包含代理对字符，可以使用codePointAt()来代替charCodeAt()，fromCodePoint()来代替fromCharCode()
        normalize()：用于对字符串应用规范化形式（NFD/NFC/NFKD/NFKC)，使用时需要传入表示哪种形式的字符串
        concat()：将一个或多个字符串拼接成一个新字符串，不影响原值
        slice()/substr()/substring()：从字符串中提取子字符串，都不会修改调用它们的字符串；
        indexOf()/lastIndexOf()：字符串位置方法，从字符串中搜索传入的字符串，并返回位置，区别在于前者从字符串开头开始，后者从字符串末尾开始
        startsWith()/endsWith()/includes()：字符串包含方法，用于判断字符串中是否包含另一个字符串的方法
        trim()/trimLeft()/trimRight()：创建字符串的一个副本，删除前后所有空格，再返回结果，原始字符串不受影响
        repeat()：接受一个参数整数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果
        padStart()/padEnd()：复制字符串。传入两个参数，第一个是长度，第二个参数是可选的填充字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件
        字符串迭代与重构






