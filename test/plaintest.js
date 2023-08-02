const MarkdownIt = require('markdown-it');
const { Remarkable } = require('remarkable');

const spec = '```';
const content = `
### 具有其他元素的块引用

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.


### 嵌套块引用

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### 多级有序列表

1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item


### 多级无序列表

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

At the command prompt, type  \`nano\`.

# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题

>这是引用的内容

**这是加粗的文字**
*这是倾斜的文字*
***这是斜体加粗的文字***
~~这是加删除线的文字~~

北京有很多好玩的地方，以下是一些值得一去的景点：

1. **故宫博物院**：故宫是中国明清两代的皇家宫殿，现在已经成为了博物馆，里面有很多珍贵的文物和艺术品 [[1]](https://bing.com/search?q=北京哪里好玩)。
2. **长城**：长城是中国古代的军事防御工程，也是世界上最伟大的建筑之一。在北京附近有很多不同的长城段可以游览[[2]](http://bj.bendibao.com/tour/2012710/80893.shtm)。
3. **颐和园**：颐和园是中国古代皇家园林之一，也是世界上最著名的园林之一。里面有很多美丽的湖泊、山水、建筑和文化遗产[[3]](https://zhuanlan.zhihu.com/p/614469616)。


### 可点击跳转的图片

[![图片](https://static.yximgs.com/udata/pkg/ks-ad-fe/a.332590c1.min.jpg)](http://www.baidu.com)


### 这是C++ 代码

${spec}cpp
#include <iostream>
#include <vector>

using namespace std;

// 快速排序函数
void quickSort(vector<int>& arr, int low, int high) {
   if (low < high) {
       int pivotIndex = partition(arr, low, high);
       quickSort(arr, low, pivotIndex - 1);
       quickSort(arr, pivotIndex + 1, high);
   }
}

// 划分函数
int partition(vector<int>& arr, int low, int high) {
   int pivot = arr[high];
   int i = low - 1;

   for (int j = low; j <= high - 1; j++) {
       if (arr[j] <= pivot) {
           i++;
           swap(arr[i], arr[j]);
       }
   }
   swap(arr[i + 1], arr[high]);
   return (i + 1);
}

int main() {
   vector<int> arr = {10, 7, 8, 9, 1, 5};
   int n = arr.size();

   quickSort(arr, 0, n - 1);

   for (int i = 0; i < n; i++) {
       cout << arr[i] << " ";
   }

   cout << endl;

   return 0;
}
${spec}



### 这是Javascript代码

${spec}js
var addTwoNumbers = function(l1, l2) {
  let head = null, tail = null;
  let carry = 0;
  while (l1 || l2) {
      const n1 = l1 ? l1.val : 0;
      const n2 = l2 ? l2.val : 0;
      const sum = n1 + n2 + carry;
      if (!head) {
          head = tail = new ListNode(sum % 10);
      } else {
          tail.next = new ListNode(sum % 10);
          tail = tail.next;
      }
      carry = Math.floor(sum / 10);
      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
  }
  if (carry > 0) {
      tail.next = new ListNode(carry);
  }
  return head;
};
${spec}

![aaa](https://s2-11256.kwimgs.com/kos/nlav11256/chrome-plugin-upload/2023-06-20/1687250284418.f785b3cb31d642c1.png)

## 对齐方式

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

## 普通的

| 一个普通标题 | 一个普通标题 | 一个普通题 |
| ------ | ------ | ------ |
| 短文本 | 中等文本 | 稍微长一点 |
| 稍微文本 | 短文本 | 中等文本 |

### table 种类

| 参数    | 说明                   | 类型        | 默认值 |
| ------- | ---------------------- | ----------- | ------ |
| factory | 用来创建所需对象的函数 | () => any | -      |
| deps    | 传入依赖变化的对象     | any[]    | -      |
| events     | 触发事件                                                                                    | ('keydown' \\| 'keyup')[]                                 | ['keydown'] |
| target     | DOM 节点或者 ref                                                                            | () => Element | -             |
| exactMatch | 精确匹配。如果开启，则只有在按键完全匹配的情况下触发事件。比如按键 [shift + c] 不会触发 [c] | boolean                                                   | false       |
| useCapture | 是否阻止事件冒泡                                                                            | boolean                                                 | false       |

`;

let remd = new Remarkable();
remd.parse(content, {});

let mdit = new MarkdownIt();
mdit.parse(content, {});