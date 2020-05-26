const ReconcilerHostConfig = {
  /**
   * 上下文信息
   */
  getRootHostContext() {},
  getChildHostContext() {},

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

}