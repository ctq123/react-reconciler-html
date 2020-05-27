import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({

  /**
   * 开启功能
   */
  // 开启子节点修改（不开启无法更新）
  supportsMutation: true,
  // // 开启hydrate，ssr
  // supportsHydration: false,

  createInstance(
      type,
      props,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
  ) {
      console.log(type, props);
      let ele = document.createElement(type);

      ['src', 'className', 'alt', 'href', 'target', 'rel'].forEach(k => {
        if (props[k]) ele[k] = props[k]
      });

      return ele;
  },
  createTextInstance(
      text,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
  ) {
    return document.createTextNode(text);
  },
  // 是否需要创建子文本节点，返回true则不创建，特例dangerouslySetInnerHTML
  shouldSetTextContent() {
    return false
  },

  appendChildToContainer(container, child) {
    container.appendChild(child);
  },
  appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendInitialChild(parent, child) {
    parent.appendChild(child);
  },

  removeChildFromContainer(container, child) {},
  removeChild(parent, child) {},
  insertInContainerBefore(container, child, beforeChild) {},
  insertBefore(container, child, beforeChild) {},

  prepareUpdate(
      instance,
      type,
      oldProps,
      newProps,
      rootContainerInstance,
      currentHostContext,
  ) {},

  commitUpdate(
      instance,
      updatePayload,
      type,
      oldProps,
      newProps,
      finishedWork,
  ) {},

  /**
   * 上下文
   */
  // 获取根容器的上下文信息, 只在根节点调用一次
  getRootHostContext() {},
  // 获取子节点的上下文信息, 每遍历一个节点都会调用一次
  getChildHostContext() {},

  prepareForCommit() {},
  resetAfterCommit() {},
  finalizeInitialChildren() {},
});

const MyReactDOM = {
  render(reactCom, div) {
    const container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(reactCom, container, null, null);
  }  
};

export default MyReactDOM;