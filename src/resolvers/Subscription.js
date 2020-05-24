const Subscription = {
    demo: {
        subscribe(parent, args, {
            pubsub
        }, info) {
            let count = 0;
            setInterval(() => {
                count++
                pubsub.publish('demo', {
                    demo: count
                })
            }, 1000)
            return pubsub.asyncIterator('demo')
        }

    }
}

export {
    Subscription as
    default
}