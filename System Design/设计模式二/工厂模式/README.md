创建型分类 - 研究高效的创建对象

单例模式
抽象工厂模式
建造者模式
工厂模式
原型模式


工厂模式：工厂模式定义创建对象的接口，但是让子类去真正的实例化。也就是工厂方法将类的实例化延迟到子类

工厂模式-对比其他方式
1 工厂类集中了所有对象的创建，便于对象创建的统一管理
2 对象的使用者仅仅是使用产品，实现了单一职责
3 便于扩展，如果新增了一种业务，只需要增加相关的业务对象类和工厂类中的生产业务对象的方法，不需要修改其他的地方
4 确实违反了开闭原则


工厂方法模式：不再有一个唯一的工厂类就创建产品，而是将不同的产品交给对应的工厂子类去实现。每个产品由负责生产的子工厂
来创造。如果添加新的产品，需要做的是添加新的子工厂和产品，而不需要修改其他的工厂代码。

工厂方法模式组成

1. 抽象工厂类：负责定义创建产品的公共接口。
2. 产品子工厂：继承抽象工厂类，实现抽象工厂类提供的接口
3. 每一种产品有各自的产品类

总结
- 代码比简单工厂模式复杂了，引入了抽象层，还有子工厂，这会增加代码的复杂度和理解难度。但是
相比于简单工厂模式，代码的维护性和扩展性提高了，新增产品时，只需要增加对应的产品类和产品工厂类，不需要
修改到抽象工厂类和其他子工厂。更加符合面向对象的开放封闭原则

- 当然具体场景具体分析，复杂性和扩展性相比如何舍去，在使用的时候要结合实际场景去分析。