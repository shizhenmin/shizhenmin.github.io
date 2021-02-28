---
plt.title("2 * x + 1")title: python-matplotlib
categories: python
tags: python 模块
---

* content
{:toc}
## 基础

### 导入python包

```python
import numpy as np
import matplotlib.pyplot as plt
```



### 简单的例子

画一条直线：

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-1, 1, 50)  # 定义x值
y = 2 * x + 1  # 定义y值

plt.plot(x, y)  # 开始画图
plt.show()  # 显示图像
```

![a_sample_example_1](/images/python/matplotlib/a_sample_example_1.jpg)





一个图两条线:

```python
x = np.linspace(-1, 1, 50)  # 定义x值
y1 = 2 * x + 1  # 定义y值
y2 = x ** 2

plt.plot(x, y2)
# color 设置颜色
# linewitdth 设置宽度
# linestyle 设置线的样式
plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--')

plt.show()
```

![a_sample_example_2](/images/python/matplotlib/a_sample_example_2.jpg)



画两个图:

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



## 标题

```python
import matplotlib.pyplot as plt

plt.title("Title of figure")  # 设置标题
plt.show()
```

![a_figure_with_title](/images/python/matplotlib/a_figure_with_title.jpg)



设置格式：

```python
plt.title('2 * x + 1', fontweight='bold', fontstyle='italic')
```

[matplotlib命令与格式：标题(title),标注(annotate),文字说明(text)](https://blog.csdn.net/helunqu2017/article/details/78659490/)



标题位置：

```python
plt.title("Title of figure", y=0.85)  # 设置标题
```





### 多子图时添加标题

subplots多子图时添加主标题和子标题：

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(2, 2)
fig.suptitle('My Figure')  # 设置主标题
ax[0][0].set_title('My Title')  # 设置子标题
plt.show()
```

![multiple_fig_title](/images/python/matplotlib/multiple_fig_title.jpg)



## 坐标轴

### 坐标轴标题

```python
import matplotlib.pyplot as plt

plt.xlabel('I am x')  # x轴标签
plt.ylabel('I am y')  # y轴标签
plt.show()
```

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.set_xlabel('I am x')  # x轴标签
ax.set_ylabel('I am y')  # y轴标签
plt.show()
```

![xy_axis_label](/images/python/matplotlib/xy_axis_label.jpg)

相关参数：

```python
import matplotlib.pyplot as plt

plt.xlabel("Time (s)", labelpad=10, color='r', fontfamily='fantasy', fontweight='normal', fontsize=16, fontstyle='italic')
plt.show()
```

labelpad 是指坐标轴标题离坐标轴的距离。



### 坐标轴范围

```python
import matplotlib.pyplot as plt

plt.xlim(0, None)  #
plt.ylim(0, 100)  #
plt.show()
```

![xy_axis_range_1](/images/python/matplotlib/xy_axis_range_1.jpg)



```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.set_xlim(2, 8)  #
ax.set_ylim(20, 80)  #
plt.show()
```

![xy_axis_range_2](/images/python/matplotlib/xy_axis_range_2.jpg)



### 坐标轴刻度密度

```python
import matplotlib.pyplot as plt
import numpy as np

plt.xticks(np.arange(0, 101, 20))  # 从0到100，间隔20
plt.yticks([-2, 0, 2])  # 刻度值为-2, 0, 2
plt.show()
```

![xy_axis_ticks_1](/images/python/matplotlib/xy_axis_ticks_1.jpg)

或者：

```python
import matplotlib.pyplot as plt
from matplotlib.pyplot import MultipleLocator

fig, ax = plt.subplots()
# 从0到100，间隔20
ax.set_xticks(np.arange(0, 101, 20))
# 另一种方法，从0到100，间隔30
ax.set_ylim(0, 100)
ax.yaxis.set_major_locator(MultipleLocator(30))
plt.show()
```

![xy_axis_ticks_2](/images/python/matplotlib/xy_axis_ticks_2.jpg)



### 坐标轴刻度朝内

```python
# 设置xtick和ytick的方向：in、out、inout
plt.rcParams['xtick.direction'] = 'in'
plt.rcParams['ytick.direction'] = 'in'

ax1.tick_params(direction='in',width=2,length=4,colors='gold')
ax2.tick_params(direction='out',width=2,length=4,colors='gold')
ax3.tick_params(direction='inout',width=2,length=4,colors='gold')
```



https://blog.csdn.net/helunqu2017/article/details/78736554

### 坐标轴标签文本

```python
import matplotlib.pyplot as plt

plt.yticks([0, 1, 2], ['bad', 'normal', 'good'])  # 定义y轴坐标标签
plt.show()
```

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.set_yticks([1,2,3])
ax.set_yticklabels(['bad', 'normal', 'good'])  # 定义y轴坐标标签
plt.show()
```

![xy_axis_ticks_3](/images/python/matplotlib/xy_axis_ticks_3.jpg)



### 空白刻度

```python
import matplotlib.pyplot as plt

plt.xticks([])  # Disable xticks.
# ax.set_yticks([])
plt.show()

plt.tick_params(bottom=False, top=False, left=False, right=False)

ax.tick_params(bottom=False, top=False, left=False, right=False)
```

![xy_axis_ticks_4](/images/python/matplotlib/xy_axis_ticks_4.jpg)

[如何在 Matplotlib 中旋转 X 轴刻度标签文本](https://www.delftstack.com/zh/howto/matplotlib/how-to-rotate-x-axis-tick-label-text-in-matplotlib/)

[matplotlib隐藏刻度线、标签和边线](https://blog.csdn.net/weixin_43326122/article/details/107292857)



设置与坐标轴的距离：

```python
ax.xaxis.set_tick_params(pad=15)
```

[【PY】画图Tips1：调整标题、数字和坐标轴的距离](https://www.jianshu.com/p/5f10ee0f8391)



### 坐标轴取对数

```python
# 方法1
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.set_xscale("log")  #x坐标轴取对数
ax.set_ylim(1, 1000)
ax.set_yscale("log")  # y坐标轴取对数
plt.show()

# 方法2
plt.axes(xscale="log")  #每次画数据时都要加上
```

![xy_axis_log](D:/OneDrive%20-%20zju.edu.cn/12_note/Note/images/python/matplotlib/xy_axis_log.jpg)



### 双坐标

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

![xy_double_axis](/images/python/matplotlib/xy_double_axis.jpg)



### 网格线

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(1, 4)
for i, ls in zip(range(4), ['-', '--', '-.', ':']):
    ax[i].set_xticklabels([])
    ax[i].set_yticklabels([])
    ax[i].grid(alpha=0.99, linestyle=ls)  # 使用网格线，设置不同样式
    print(i, ls)

plt.show()
```

![xy_axis_grid](/images/python/matplotlib/xy_axis_grid.jpg)



### 解决标签重叠

旋转：

```python
import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4]
y = ['aaaaaaaaa', 'bbbbbbbbb', 'ccccccccc', 'ddddddddd', 'eeeeeeeee']
plt.plot(x)
plt.xticks(x, y, rotation=45)

plt.show()
```

![xy_axis_ticks_rotation](/images/python/matplotlib/xy_axis_ticks_rotation.jpg)

分行：

```python
import matplotlib.pyplot as plt

x = [0, 1, 2, 3, 4]
y = ['aaaaaaaaa', '\nbbbbbbbbb', 'ccccccccc', '\nddddddddd', 'eeeeeeeee']
plt.plot(x)
plt.xticks(x, y)

plt.show()
```

![xy_axis_ticks_twoline](/images/python/matplotlib/xy_axis_ticks_twoline.jpg)



### 移动坐标轴

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-2, 2, 10)
y = 2 * x + 1

plt.plot(x, y)
ax = plt.gca()  # 获取坐标轴对象
ax.spines['right'].set_color('none')  # 隐藏右边框
ax.spines['top'].set_color('none')  # 隐藏上边框
ax.xaxis.set_ticks_position('bottom')  # 将下边框作为x轴
ax.spines['bottom'].set_position(('data', 0))  # 移动位置，使其与y轴的0相交
ax.yaxis.set_ticks_position('left')  # 将左边框作为y轴
ax.spines['left'].set_position(('data', 0))  # 移动位置，使其与x轴的0相交

plt.show()
```

![xy_axis_move](/images/python/matplotlib/xy_axis_move.jpg)



### 刻度值透明度

```python
import numpy as np
import matplotlib.pyplot as plt

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
    label.set_bbox(dict(facecolor='white', edgecolor='w', alpha=0.7))

plt.show()
```



## 文字

### 顶部添加文字

```python
import matplotlib.pyplot as plt

x = range(5)
y = [5, 10, 15, 20, 25]
plt.scatter(x, y)
plt.ylim(0, 30)
for a, b in zip(x, y):
    plt.text(a, b+0.5, '%.1f' % b, ha='center', va='bottom', fontsize=10)

plt.show()
```

![add_text_1](/images/python/matplotlib/add_text_1.jpg)



| Property                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [fontfamily](https://matplotlib.org/api/text_api.html#matplotlib.text.Text.set_fontfamily) or family | {FONTNAME, 'serif', 'sans-serif', 'cursive', 'fantasy', 'monospace'} |
| [fontsize](https://matplotlib.org/api/text_api.html#matplotlib.text.Text.set_fontsize) or size | float or {'xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'} |
| [fontstyle](https://matplotlib.org/api/text_api.html#matplotlib.text.Text.set_fontstyle) or style | {'normal', 'italic', 'oblique'}                              |
| [fontweight](https://matplotlib.org/api/text_api.html#matplotlib.text.Text.set_fontweight) or weight | {a numeric value in range 0-1000, 'ultralight', 'light', 'normal',  'regular', 'book', 'medium', 'roman', 'semibold', 'demibold', 'demi',  'bold', 'heavy', 'extra bold', 'black'} |
| [color](https://matplotlib.org/api/text_api.html#matplotlib.text.Text.set_color) or c | color                                                        |
|                                                              |                                                              |
|                                                              |                                                              |

[matplotlib.text.Text](https://matplotlib.org/api/text_api.html?highlight=text#matplotlib.text.Text)



## 图例

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 50)
y1 = x + 2
y2 = x ** 2
plt.plot(x, y1, linestyle='--', label='x + 2')  # 给线条加一个标签
plt.plot(x, y2, color='red', label='x ** 2')  # 给线条加一个标签
plt.legend()  # 定义图例
plt.show()
```

另一种方法：

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 50)
y1 = x + 2
y2 = x ** 2
line1, = plt.plot(x, y1, linestyle='--')  # 逗号是必须的
line2, = plt.plot(x, y2, color='red')  # 
plt.legend(handles=[line1, line2], labels=['x + 2', 'x ** 2'])  # 定义图例
plt.show()
```

![legend_1](/images/python/matplotlib/legend_1.jpg)



### 删除重复图例

```python
from collections import OrderedDict
import matplotlib.pyplot as plt
 
handles, labels = plt.gca().get_legend_handles_labels()
by_label = OrderedDict(zip(labels, handles))
plt.legend(by_label.values(), by_label.keys())
```

[python用matplotlib绘图，如何删除重复冗余图例](https://blog.csdn.net/grace_cxj/article/details/80963211)



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

第二个参数 bbox_to_anchor 被赋予的二元组（也可以给四个值）中，num1 用于控制 legend 的左右移动，值越大越向右边移动，num2 用于控制 legend 的上下移动，值越大，越向上移动。用于微调图例的位置。

[调整matplotlib的图例legend的位置](https://www.cnblogs.com/IvyWong/p/9916791.html)



### 多子图使用同一图例

```python
import matplotlib.pyplot as plt

fig = plt.figure()
axes = fig.subplots(nrows=2, ncols=2)
for ax in fig.axes:
    ax.plot([0, 10], [0, 10], label='linear')

# Return handles and labels for legend
lines, labels = fig.axes[-1].get_legend_handles_labels()
fig.legend(lines, labels, loc='upper center')

plt.show()
```

![legend_for_all_subplots_1](/images/python/matplotlib/legend_for_all_subplots_1.jpg)



各个子图中的图例不一样时：

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 501)
fig = plt.figure()
axes = fig.subplots(nrows=2, ncols=2)
axes[0, 0].plot(x, np.sin(x), color='k', label="sin(x)")
axes[0, 1].plot(x, np.cos(x), color='b', label="cos(x)")
axes[1, 0].plot(x, np.sin(x)+np.cos(x), color='r', label="sin(x)+cos(x)")
axes[1, 1].plot(x, np.sin(x)-np.cos(x), color='m', label="sin(x)-cos(x)")

handles = []
labels = []
for ax in fig.axes:
    # Return handles and labels for legend
    axHandle, axLabel = ax.get_legend_handles_labels()
    # 将 handles 和 label 加到列表中
    handles.extend(axHandle)
    labels.extend(axLabel)

# ncol设置图例分为4列展示
fig.legend(handles, labels, ncol=4, loc='upper center')
plt.show()
```

![legend_for_all_subplots_2](/images/python/matplotlib/legend_for_all_subplots_2.jpg)

[Create a Single Legend for All Subplots in Matplotlib](https://www.delftstack.com/howto/matplotlib/how-to-make-a-single-legend-for-all-subplots-in-matplotlib/)

[图例legend语法及设置](https://blog.csdn.net/helunqu2017/article/details/78641290)



## 散点图

### 基础

```python
import numpy as np
import matplotlib.pyplot as plt

n = 64
X = np.random.normal(0, 1, n)
Y = np.random.normal(0, 1, n)
plt.scatter(X, Y)

plt.show()
```

![scatter_example](/images/python/matplotlib/scatter_example.jpg)

性状：



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





## 保存图片大小

用以下语句将“图”往左边缩放一下，给图例腾出空间：

```python
fig.subplots_adjust(right=0.7)
```

```python
subplots_adjust(left=None, bottom=None, right=None, top=None, wspace=None, hspace=None)
```

有六个可选参数来控制子图布局。值均为0~1之间。其中left、bottom、right、top围成的区域就是子图的区域。wspace、hspace分别表示子图之间左右、上下的间距。

设置图片大小可以用以下语句：

```python
fig.set_size_inches(6.4, 4)
```





## 注解

```python
x0 = 1
y0 = 2 * x0 + 1

# 显示一个点
plt.scatter(x0, y0, s=50, color='b', )
# 画一条曲线([两个x坐标],[两个y坐标],(黑色虚线),宽度)
plt.plot([x0, x0], [y0, 0], 'k--', lw=0.5)

# 标注 方法1
plt.annotate(r'$2x+1=%s$' % y0, xy=(x0,y0), xycoords='data', xytext=(+30,-30),textcoords='offset points', fontsize=16, arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=.2'))

# 标注 方法2
plt.text(-3.7,3,r'$This\ is\ the\ text.$')
```

### 箭头

```python
plt.annotate('text', xytext=(tx1,ty1), xy=(tx0,ty0), arrowprops=dict(arrowstyle="->,head_length=0.1,head_width=0.1", connectionstyle="arc3"))
#其中，text是在箭头末尾显示的文字，xy是箭头终点坐标，xytext是起点坐标，arrowtypes指定箭头的样式
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



