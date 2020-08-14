import { Container, Text, Sprite, Graphics } from 'pixi.js'
import { createRenderer } from '@vue/runtime-core';

const renderer = createRenderer({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      case "rect":
        element = new Graphics()
        element.beginFill(0xff00000)
        element.drawRect(0, 0, 200, 20)
        element.endFill()
        break
      case "circle":
        element = new Graphics()
        element.beginFill(0xffff00)
        element.drawCircle(0, 0, 20, 20)
        element.endFill()
        break
    }
    return element;
  },
  patchProp(el, key, prevValue, nextValue) {
    // pixi
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  createText (text) {
    return new Text(text)
  },
  srcElementText(node, text) {
    // 创建文本
    const cText = new Text(text)
    node.addChild(cText)
  },
  createComment() {},
  insert(el, parent) {
    // append
    console.log(`el: ${el}, parent: ${parent}`);
    parent.addChild(el);
  },
  // 获取父节点
  parentNode() {},
  // 获取兄弟节点
  nextSibling() {}
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}