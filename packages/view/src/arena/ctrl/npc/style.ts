import { StyleSheet } from 'aphrodite'

interface style {
    /** 组件顶层 */
    root: object
}

export const style: style = StyleSheet.create<style>({
    root: {
        overflow: 'hidden',
        fontSize: 0,
        flexDirection: 'column',
    },
})
