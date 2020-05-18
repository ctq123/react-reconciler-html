import ReactReconciler from 'react-reconciler';

let reconciler = ReactReconciler({
    /** configuration for how to talk to host enviroment */
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

    finalizeInitialChildren() {},
    getChildHostContext() {},
    getPublicInstance() {},
    getRootHostContext() {},
    prepareForCommit() {},
    resetAfterCommit() {},
    shouldSetTextContent() {
        return false;
    },
});

let ReactDomMini = {
    render(whatToRender, div) {
        let container = reconciler.createContainer(div, false, false);
        reconciler.updateContainer(whatToRender, container, null, null);
    },
};

export default ReactDomMini;