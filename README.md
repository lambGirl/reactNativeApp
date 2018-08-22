# reactNativeApp
react native first app，demo

### 需要先安装jdk>1.8,配置java环境变量
### 本人安装android studio,按照官网文档构建项目，搭建模拟器，采用的是studio的模拟器，按照官网文档搭建
### react-native run-android, 命令跑起来，but肯定会报错
  1. 报各种包找不到com.android.tools.build:gradle:3.0.0, 此时我采用了网友的
  ```
    android->build.gradle文件中
    repositories {
        google()  //添加
        jcenter()
    }
    allprojects对象下
    repositories {
        google()  //添加
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
    }
  ```
  加了此时还是报错，此时，去android studio，console中可以看到各种需要update，按照要求update便是， 新建一个模拟器，在执行项目。 终于跑起来了。。。。
