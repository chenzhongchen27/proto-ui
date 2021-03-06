import ListViewItem from '../u-list-view-item.vue';
import RouterItem from '../u-router-item.vue';

export default {
    name: 'u-sidebar-item',
    parentName: 'u-sidebar',
    groupName: 'u-sidebar-group',
    mixins: [ListViewItem, RouterItem],
    watch: {
        active(active) {
            this.watchActive(active);
        },
    },
    created() {
        this.$nextTick(() => this.watchActive(this.active));
    },
    methods: {
        watchActive(active) {
            active && this.groupVM && this.groupVM.toggle(true);
        },
    },
};
