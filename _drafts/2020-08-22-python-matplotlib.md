---
title: python-matplotlib
categories: python
tags: python 模块
---

* content
{:toc}
## 例子

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-1, 1, 50)  # 定义x值
y = 2 * x + 1  # 定义y值

plt.plot(x, y)  # 开始画图
plt.show()  # 显示图像
```

画两个图

```python
x = np.linspace(-1, 1, 50)  # 定义x值
y1 = 2 * x + 1  # 定义y值
y2 = x ** 2  # 定义y值

plt.figure()  # 新建figure图像
plt.plot(x, y1)

plt.figure(num=3,figsize=(5,3))  # 再新建一个figure图像，设置序号、长宽
plt.plot(x, y2)

plt.show()
```

一个图两条线

```python
x = np.linspace(-1, 1, 50)  # 定义x值
y1 = 2 * x + 1  # 定义y值
y2 = x ** 2

plt.figure(num=3,figsize=(8,5))
plt.plot(x, y2)
# color 设置颜色
# linewitdth 设置宽度
# linestyle 设置线的样式
plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--')

plt.show()
```



## 坐标轴

```python
x = np.linspace(-1, 1, 50)  # 定义x值
y1 = 2 * x + 1  # 定义y值
y2 = x ** 2

plt.plot(x, y2)
plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--')

plt.xlim((-1, 2))  # x轴范围
plt.ylim((-2, 3))  # y轴范围
plt.xlabel('I am x')  # x轴标签
plt.ylabel('I am y')  # y轴标签

new_ticks = np.linspace(-1, 2, 5)
plt.xticks(new_ticks)  # 定义x轴坐标刻度线
plt.yticks([-2, 0, 2], ['bad', 'normal', 'good'])  # 定义y轴坐标标签
```

从0开始，间隔20：

```python
plt.xticks(np.arange(0, 101, 20))
```



坐标轴范围

```python
plt.xlim(0, None)
plt.ylim(0, 100)
```

设置坐标轴名称

```python
plt.xlabel('I am x')  # x轴标签
plt.ylabel('I am y')  # y轴标签

fig, ax = plt.subplots(figsize=(5, 3))
ax.set_xlabel('time [s]')
ax.set_ylabel('Damped oscillation [V]')
```

设置坐标轴刻度

```python
plt.xticks(np.arange(0, 101, 20))
```





```python

```





```python

```





### 坐标轴取对数

```python
# 方法1
fig, ax = plt.subplots()
ax.set_xscale("log")  #x坐标轴取对数
ax.set_yscale("log")  #y坐标轴取对数

# 方法2
plt.axes(xscale = "log")  #每次画数据时都要加上
```



### 坐标轴从0开始

```python
plt.xlim(0, None)
plt.ylim(0, 100)
```



### 移动坐标轴

```python
x = np.linspace(-3, 3, 50)
y = 2 * x + 1

plt.plot(x, y,)

ax = plt.gca()
ax.spines['right'].set_color('none')  # 隐藏右边框
ax.spines['top'].set_color('none')  # 隐藏上边框
ax.xaxis.set_ticks_position('bottom')  # 将下边框作为x轴
ax.spines['bottom'].set_position(('data', 0))  # 移动位置，使其与y轴的0相交
ax.yaxis.set_ticks_position('left')  # 将左边框作为y轴
ax.spines['left'].set_position(('data', 0))  #  移动位置，使其与x轴的0相交

plt.show()
```



### 坐标轴刻度值设置透明度

```python
x = np.linspace(-3, 3, 50)
y = 2 * x + 1

ax = plt.gca()
ax.spines['right'].set_color('none')
ax.spines['top'].set_color('none')
ax.xaxis.set_ticks_position('bottom')
ax.spines['bottom'].set_position(('data', 0))
ax.yaxis.set_ticks_position('left')
ax.spines['left'].set_position(('data', 0))

plt.plot(x, y,linewidth=5,zorder=1)
for label in ax.get_xticklabels() + ax.get_yticklabels():
    label.set_fontsize(12)
    label.set_bbox(dict(facecolor='white', edgecolor='blue', alpha=0.7))
```

[如何在 Matplotlib 中旋转 X 轴刻度标签文本](https://www.delftstack.com/zh/howto/matplotlib/how-to-rotate-x-axis-tick-label-text-in-matplotlib/)



## 图例

```python
x = np.linspace(-1, 1, 50)
y1 = 2 * x + 1  # 定义y值
y2 = x ** 2

plt.xlim((-1, 2))
plt.ylim((-2, 3))
plt.xlabel('I am x')
plt.ylabel('I am y')

new_ticks = np.linspace(-1, 2, 5)
plt.xticks(new_ticks)
plt.yticks([-2, 0, 2], ['very bad', 'normal', 'good'])

plt.plot(x, y2, label='up')  # 给线条加一个标签（不会直接显示）
plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--', label='down')
plt.legend()  # 定义图例
```

### 自定义图例名称

```python
line1, = plt.plot(x, y2, label='up')
line2, = plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--', label='down')
# 自定义图例
plt.legend(handles=[line1, line2,], labels=['aa', 'bb'], loc='best')
```

### 调整图例位置

```python
plt.legend(loc='String or Number', bbox_to_anchor=(num1, num2))
```

| String       | Number |
| ------------ | ------ |
| upper right  | 1      |
| upper left   | 2      |
| lower left   | 3      |
| lower right  | 4      |
| right        | 5      |
| center left  | 6      |
| center right | 7      |
| lower center | 8      |
| upper center | 9      |
| center       | 10     |

第二个参数 bbox_to_anchor 被赋予的二元组中，num1 用于控制 legend 的左右移动，值越大越向右边移动，num2 用于控制 legend 的上下移动，值越大，越向上移动。用于微调图例的位置。



[调整matplotlib的图例legend的位置](https://www.cnblogs.com/IvyWong/p/9916791.html)



## 注解

```python
x0 = 1
y0 = 2 * x0 + 1

# 显示一个点
plt.scatter(x0, y0, s=50, color='b', )
# 画一条曲线([两个x坐标],[两个y坐标],(黑色虚线),宽度)
plt.plot([x0, x0], [y0, 0], 'k--', lw=0.5)

# 标注 方法1
plt.annotate(r'$2x+1=%s$' % y0, xy=(x0,y0), xycoords='data',xytext=(+30,-30),textcoords='offset points',fontsize=16,arrowprops=dict(arrowstyle='->',connectionstyle='arc3,rad=.2'))

# 标注 方法2
plt.text(-3.7,3,r'$This\ is\ the\ text.$')
```

画箭头

```python
plt.annotate('text',xy=(tx0,ty0),xytext=(tx1,ty1),arrowprops=dict(arrowstyle="->,head_length=0.1,head_width=0.1",connectionstyle="arc3"))
#其中，text是在箭头末尾显示的文字，xy是箭头终点坐标，xytext是起点坐标，arrowtypes指定箭头的样式
```



## 散点图

```python
n = 1024
X = np.random.normal(0, 1, n)
Y = np.random.normal(0, 1, n)
T = np.arctan2(Y,X) # 设置颜色

plt.scatter(X, Y, s=75, c=T, alpha=0.5)
# plt.scatter(np.arange(5),np.arange(5))

plt.xlim((-1.5, 1.5))
plt.ylim((-1.5, 1.5))
plt.xticks(())  # 隐藏坐标轴刻度线
plt.yticks(())  # 隐藏坐标轴刻度线
```



## 柱状图

```python
import matplotlib.pyplot as plt
 
data = [5, 20, 15, 25, 10]
 
plt.bar(range(len(data)), data)
plt.show()
```

### 堆积图

有两种方法，一种是用bottom，另一种是在原位置上直接覆盖。

```python
x_data = ['ROSIGA', 'RaGOO', 'Chromosomer']
line = 'fish 6 3 8 6 52 3 4 9 2'

rosiga_data = [int(x) for x in line.split()[1:4]]
ragoo_data = [int(x) for x in line.split()[4:7]]
chromosomer_data = [int(x) for x in line.split()[7:]]
value = [rosiga_data, ragoo_data, chromosomer_data]

v1=[i[0]+i[1]+i[2] for i in value]
v2=[i[1]+i[2] for i in value]
v3=[i[2] for i in value]

fig, ax = plt.subplots()
ax.bar(x_data,v1,color="green")
ax.bar(x_data,v2,color="red")
ax.bar(x_data,v3,color="blue",hatch='')

for x, y in enumerate(v1):
    ax.text(x, y+3, '%s' % y, ha='center', va='top')
```



![style-bar-hatch.png](https://raw.githubusercontent.com/urmyfaith/urmyfaith.github.io/master/matplot/matplotGallery/images/style-bar-hatch.png)

### step图

```python
x = [1, 2, 3, 4, 5]
plt.step(range(0, len(x)), x, where='mid')
```



## 组合图

2行2列

```python
plt.figure()

plt.subplot(2, 2, 1) # 分成2行2列，在第1个位置画图
plt.subplot(2, 2, 2) # 分成2行2列，在第2个位置画图
plt.subplot(2, 2, 3) # 分成2行2列，在第3个位置画图
plt.subplot(2, 2, 4) # 分成2行2列，在第4个位置画图

plt.show()
```

两行：第一行一个图，第二行3个图

```python
plt.subplot(2, 1, 1)
plt.subplot(2, 3, 4)
plt.subplot(2, 3, 5)
plt.subplot(2, 3, 6)
```

3行5宫格：方法1

```python
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec

plt.figure()
# (共几行几列),(从几行几列开始),列数,行数
ax1 = plt.subplot2grid((3,3),(0,0),colspan=3,rowspan=1)
ax2 = plt.subplot2grid((3,3),(1,0),colspan=2,rowspan=1)
ax3 = plt.subplot2grid((3,3),(2,0),colspan=1,rowspan=1)
ax4 = plt.subplot2grid((3,3),(2,1),colspan=1,rowspan=1)
ax5 = plt.subplot2grid((3,3),(1,2),colspan=1,rowspan=2)

plt.show()
```

3行5宫格：方法2

```python
import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec

plt.figure()
# 定义几行几列
gs = gridspec.GridSpec(3, 3)
# [哪几行,哪几列]
ax1 = plt.subplot(gs[0,:])
ax2 = plt.subplot(gs[1,:2])
ax3 = plt.subplot(gs[1:,2])
ax4 = plt.subplot(gs[2,:1])
ax5 = plt.subplot(gs[2,1:2])

plt.show()
```

## 双坐标

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.arange(0, 10, 0.1)
y1 = 0.05 * x ** 2
y2 = -1 * y1

fig, ax1 = plt.subplots()
ax2 = ax1.twinx()
ax1.plot(x, y1, 'g-')
ax2.plot(x, y2, 'b-')

plt.show()
```







## 网格线

```python
plt.grid()
# 设置网格的透明度
plt.grid(alpha=0.4)
# 编辑网格线的样式
plt.grid(alpha=0.4,linestyle=':')  #虚线
plt.grid(alpha=0.4,linestyle='--')  #小短线相连
plt.grid(alpha=0.4,linestyle='-.')  #点划线

```



## 保存图片大小

用以下语句将“图”往左边缩放一下，给图例腾出空间：

```python
fig.subplots_adjust(right=0.7)
```

设置图片大小可以用以下语句：

```python
fig.set_size_inches(6.4, 4)
```





### 

```python

```



### 

```python

```



### 

```python

```







## 参考

[Matplotlib Python 画图教程 (莫烦Python)](<https://www.bilibili.com/video/av16378354?p=18>)

[python绘制半对数坐标](https://blog.csdn.net/qq_43215484/article/details/103693980)



