# pavilion-fronted-project

​		基于vue框架的场馆管理系统前端部分的删减部分，但为了方便熟悉项目组成，基本的框架和部署到服务器上的部分进行保存。

​		使用到的内容可以参考src中的main.js进行了解，包括：vue2.x、cookie、axios、vantUI

​		以下是有关项目的一些介绍，可以帮助了解本项目内容的组成和编写的思考

​		

## 项目有关NPM指令

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 项目架构

#### 根目录内容说明

build、config、test文件夹为vue项目初始附带的文件夹，组成项目运行测试的基础

dist文件夹为项目build后产生的文件夹，用于部署，具体可参考“环境配置”中的“部署流程”

node_modules文件夹为项目所安装使用的依赖，使用前需要先执行npm install指令进行安装，具体可参考“环境配置”中的“运行流程”

static文件夹放置了一些静态资源，包括一些图片

src文件夹为本项目的所有组件，在“项目模块内容说明”中会详细介绍

index.html为本项目的初始显示页面，可进行主组件的配置

README.md即本文件，介绍本项目的一些基本内容和基本操作

除此之外的一些文件也为vue项目初始附带的文件，组成了项目运行，测试的基础

#### 项目各模块内容说明

根据“根目录内容说明”可知，src文件夹中即包含了本项目的所有使用模块，在本部分会对他们的功能进行简要说明。

main.js：应用依赖中内容并对vue项目的显示进行一些配置的主文件

App.vue：主组件，显示在index.html中，内部会根据路由进行各小组件的切换

router：即路由所处的文件夹，内部的index.js为路由配置文件，配置各组件的访问路径和组件内容；title.js即为各组件显示后浏览器上方标题的配置文件，这里考虑是移动端不会显示标题因此暂时将内容进行了注释，若要添加名称只需根据路由中配置好的组件名称设置标题字符串即可。

assets：vue项目初始附带的文件，仅包括一个vue的图标文件，对本项目没有影响

api：内部包含api_summary.js文件，该文件内容为前后端所需所有接口的axios实现形式，主要用于测试新接口以及方便在需要时进行查找。

components：内部包含的即为本项目的所有功能组件，也即是显示在App.vue中的所有组件，各组件功能会在“各组件功能简介”中进行依次说明

#### 各组件功能简介

​	写在前面：组件布局设计可在frontend-plan>前端设计>现阶段界面设计汇总中进行查看，这里不再进行页面设计的介绍。

​	index.vue 系统未构建完毕时为快速查看页面所用

**visitor内：**参观者有关组件

​	Enter.vue 参观者进入页面，包括注册和登录

​	Adopt.vue 参观者进行预约页面

​	AdoptList.vue 参观者查看自身预约信息页面

​	InputId.vue 参观者进入参观过程页面

​	Visit.vue 参观过程页面，会根据不同状态显示不同内容

​	TeamAdd.vue 参观者加入团队页面

​	InformationModify.vue 参观者修改个人信息页面

​	SecuritySetting.vue 参观者修改安全信息页面

​	PersonalFunction.vue 参观者个人功能区页面，炸死你hi参观者当前可使用的功能和个人主页的跳转

​	PersonalHome.vue 参观者个人主页页面，包括工具型功能、基本信息展示、功能区跳转和设置部分的展开

**controller内：**管理员有关组件

​	ControllerEnter.vue 管理员进入页面，仅包括登录

​	PavilionManagement.vue 管理员新增展馆展览页面

​	AllExhibition.vue 管理员查看所有展览页面，包括当前正在进行的和已经结束的展览展示

​	BoothManagement.vue 管理员进行展位管理页面，管理某展览所有展位的有关内容

​	AllAdopt.vue 管理员进行总预约的查看页面，根据日期查看预约信息

​	ControllerAdd.vue 管理员添加新管理员的页面

​	PavilionOverview.vue 管理员进行展馆总览页面，查看展馆的总览信息

​	ControllerFunction.vue 管理员功能区页面，根据管理员身份显示管理员当前可使用功能的展示和个人主页的跳转

​	ControllerHome.vue 管理员个人主页页面，包括可使用的工具型功能、基本信息展示、功能区跳转和设置部分的展开

## 环境配置

#### 要求

运行需要本地安装有node.js，能够执行npm指令，以能够正常运行指令构建、运行本项目

部署要求服务器已经配置好web显示的框架，如nginx，以能够在服务器上显示

#### 运行流程

1.在项目根目录终端中执行npm install安装项目所使用到的一些依赖（如果失败建议重装node）

2.安装依赖成功后便会新增一个node_modules或者更新该文件夹，其内容既是本项目所需的所有依赖文件。此时只需在终端执行npm dev指令即可

运行成功后会显示项目已经在http://localhost:8080/运行，如果发生错误则有两种情况：依赖未完全安装成功，项目内文件错误；前者需要重新安装，后者根据提示修改错误文件即可

#### 部署流程

1.首先保证项目正常运行，参考运行流程

2.在项目根目录终端中执行npm build或npm build --report（后者会带有分析报告）即可

如果构建成功则会在根目录下新增一个dist文件夹，该文件夹既是本项目所有内容的汇总，仅可在服务器上运行。

放置以nginx为例：只需将dist文件夹中内容替换服务器中nginx显示文件夹html中的内容即可，注意nginx服务的开启关闭，在替换后如果正常则可直接通过服务器地址访问，路径和本地相同。