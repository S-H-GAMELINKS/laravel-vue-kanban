<template>
    <div class="container">
        <kanban-board :stages="stages" :blocks="blocks">
            <div v-for="stage in stages" :slot="stage" :key="stage">
                <h2>{{ stage }}</h2>
                <button v-on:click="addBlock(stage)">Add</button>
            </div>
            <div v-for="block in blocks" :slot="block.id" :key="block.id">
                <div>
                    <strong>id:</strong> {{ block.id }}
                </div>
                <div>
                    {{ block.title }}
                </div>
            </div>
        </kanban-board>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
            blocks: [
                {
                    id: 1,
                    status: 'on-hold',
                    title: 'Test',
                },
            ]
        }
    },
    methods: {
        updateBlock(id, status) {
            this.blocks.find(b => b.id === Number(id)).status = status;
        },
        addBlock(stage) {
            let id = this.blocks.length + 1
            this.blocks.push({
                id: id,
                status: stage,
                title: 'Test'
            })
        }
    },    
}
</script>

