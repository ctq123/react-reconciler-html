const ReactDOMHostConfig = {
  /**
   * 上下文信息
   */
  // 根容器上下文，只在根节点调用一次
  getRootHostContext() {},
  // 子节点上下文，每遍历一个节点都会调用一次
  getChildHostContext() {},
  
  /**
   * 创建节点实例
   */
  // 普通节点
  createInstance(
      type,
      props,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
  ) {},
  // 文本节点
  createTextInstance(
      text,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
  ) {},
  // 是否需要处理子文本节点，不想处理返回true(当前dom内部消化)
  shouldSetTextContent() {},

  /**
   * 节点树的构建
   */
  // 初始化节点（初始化阶段）
  appendInitialChild(parent, child) {},
  // 添加节点
  appendChild(parent, child) {},
  // 添加子节点到容器节点
  appendChildToContainer(container, child) {},
  // 插入子节点
  insertBefore(container, child, beforeChild) {},
  // 插入子节点到容器节点
  insertInContainerBefore(container, child, beforeChild) {},
  // 删除子节点
  removeChild(parent, child) {},
  // 从容器节点中删除子节点
  removeChildFromContainer(container, child) {},

  /**
   * 节点挂载
   */
  // 完成所有子节点初始化时会被调用（初始化阶段），通常与commitMount配合
  finalizeInitialChildren() {},
  // finalizeInitialChildren返回true时，被触发
  commitMount() {},

  /**
   * 节点更新
   */
  // 准备节点更新，常配合commitUpdate使用
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext,
  ) {},
  // 提交更新，若prepareUpdate返回空，则不会触发commitUpdate
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork,
  ) {},

  /**
   * 提交
   */
  // 开始提交之前调用，保存当前状态，如当前input的focus状态
  prepareForCommit() {},
  // 提交之后调用，常与prepareForCommit配合，如focus状态恢复
  resetAfterCommit() {},

  /**
   * 功能开启相关
   */
  // 是否开启节点修改
  supportsMutation: true,
}