type JSXComponent = () => JSX.Element

export interface IRoute {
    name: string
    path: string
    Component: JSXComponent
}