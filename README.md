# Element-plus [time-picker] feat

## For run

1.clone it

2.`pnpm install `

3.`pnpm run dev`

## Desc

在使用px2rem时，因为px被转换成了rem。在渲染时反向转换，会存在小数点的情况。

(When using px2rem, px is converted to rem. When rendering the reverse conversion, there will be a float number)

这是在MacOS 14寸屏幕上的表现，会产生滚动偏移。

(This is the performance on the MacOS 14 “screen, resulting in a scrolling offset.)

![image-20230516092309379](http://img.mmifx.com//202305160923530.png?qiniu)

转换之后，样式变成了这样

(After the conversion, the style)

![image-20230516092624028](http://img.mmifx.com//202305160926067.png?qiniu)

`height`为1.66667rem。计算后是15.12*1.66667= 25.2000504px

(height is 1.66667rem,After calculation is 25.2000504px)

在time-pick这个组件中，我找了这部分的代码，高度计算部分如下：

(In the time-pick component, I looked for this part of the code, and the height calculation part is as follows)

![image-20230516093034703](http://img.mmifx.com//202305160930746.png?qiniu)

这里高度计算是使用的offsetHeight，offsetHeight会四舍五入为整数值。

(Here the height is calculated using offsetHeight, offsetHeight will be rounded to an integer value.)

一个元素的取整可能偏移量不太明显，但这是个时间选择器，60*0.2=12px，这样就很明显了。

(The integer offset of an element may not be obvious, but this is a time selector, 60*0.2=12px, so it should be obvious.)

当然，这在大多数情况都是没问题的。(不使用px2rem  或者  不转译`/node_module/`下的样式 或者 在1920+的分辨率下 )

(Of course it's ok in most cases,  don't use px2rem  or don't translate the /node_module/ styles ,or the screen width is gt 1920px )

## Solution

找到了问题来源，解决就很简单了,在计算高度时使用getComputedStyle() 获取，然后转换成浮点数即可。

(Use getComputedStyle() when calculating the height, and then convert to a float number)

```javascript
// element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue
const typeItemHeight = (type) => {
  	const scrollbar = unref(listRefsMap[type])
  	// return scrollbar?.$el.querySelector('li').offsetHeight || 0
      const {height}=window.getComputedStyle(scrollbar.$el.querySelector("li"))
      const elementHeight=parseFloat(height)
      return (scrollbar == null ? void 0 : elementHeight) || 0;
};
```







