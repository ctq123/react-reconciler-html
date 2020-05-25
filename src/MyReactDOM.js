import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({
  supportsMutation: true,

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

  getRootHostContext() {},
  getChildHostContext() {},
  prepareForCommit() {},
  resetAfterCommit() {},
  finalizeInitialChildren() {},
  shouldSetTextContent() {},
});

const MyReactDOM = {
  render(reactCom, div) {
    const container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(reactCom, container, null, null);
  }  
};

export default MyReactDOM;