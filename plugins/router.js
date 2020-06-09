export default ({app}) => {
    // 参数app为执行上下文
    app.router.beforeEach((to, from, next) => {
        // console.log(`我要去：${to.path}`)
        next()
    })
}