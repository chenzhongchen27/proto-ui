import Emitter from '../u-emitter.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-tab',
    parentName: 'u-tabs',
    mixins: [Emitter, RouterItem],
    props: {
        title: String,
        value: null,
        hidden: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            parentVM: undefined,
        };
    },
    computed: {
        selected() {
            if (this.parentVM)
                return this.parentVM.router ? this.active : this.parentVM.selectedVM === this;
        },
    },
    created() {
        this.dispatch(this.$options.parentName, 'add-item-vm', this);
    },
    destroyed() {
        this.dispatch(this.$options.parentName, 'remove-item-vm', this);
    },
};
