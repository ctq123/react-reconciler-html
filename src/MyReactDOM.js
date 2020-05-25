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
  },
  createTextInstance(
      text,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
  ) {},
  appendChildToContainer(container, child) {},
  appendChild(parent, child) {},
  appendInitialChild(parent, child) {},
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
  
  shouldSetTextContent() {
      return false;
  },
});

const MyReactDOM = {
  render(reactCom, div) {
    const container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(reactCom, container, null, null);
  }  
};

export default MyReactDOM;